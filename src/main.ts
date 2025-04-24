import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';

config({ path: '.env' });

export async function initializeSwagger(app: INestApplication<any>) {
  if (
    !process.env.APP_NAME ||
    !process.env.APP_DESC ||
    !process.env.ORG_APP_STORE_ENDPOINT
  ) {
    throw new Error('Required environment variables are missing.');
  }

  const config = new DocumentBuilder()
    .setTitle(process.env.APP_NAME)
    .setDescription(process.env.APP_DESC)
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .addServer(process.env.ORG_APP_STORE_ENDPOINT || '/')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  document.components = {
    ...document.components,
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  };

  document.security = [{ bearerAuth: [] }];
  SwaggerModule.setup('doc', app, document);
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await initializeSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
