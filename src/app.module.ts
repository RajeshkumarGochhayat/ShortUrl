import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgDBConfig } from './config';
import { ShortUrlModule } from './app/short-url/short-url.module';
import { AuthMiddleware } from './shared/middlewares/auth.middleware';
import { ShortUrlController } from './app/short-url/short-url.controller';

@Module({
  imports: [TypeOrmModule.forRoot(pgDBConfig), ShortUrlModule],
})
export class AppModule {
  configure(shortUrl: MiddlewareConsumer) {
    shortUrl
      .apply(AuthMiddleware)
      .exclude({ path: 'short-url', method: RequestMethod.POST })
      .forRoutes(ShortUrlController);
  }
}
