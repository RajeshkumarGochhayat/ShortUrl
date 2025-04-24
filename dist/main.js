"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeSwagger = initializeSwagger;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '.env' });
async function initializeSwagger(app) {
    if (!process.env.APP_NAME ||
        !process.env.APP_DESC ||
        !process.env.ORG_APP_STORE_ENDPOINT) {
        throw new Error('Required environment variables are missing.');
    }
    const config = new swagger_1.DocumentBuilder()
        .setTitle(process.env.APP_NAME)
        .setDescription(process.env.APP_DESC)
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
        .addServer(process.env.ORG_APP_STORE_ENDPOINT || '/')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
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
    swagger_1.SwaggerModule.setup('doc', app, document);
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    await initializeSwagger(app);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map