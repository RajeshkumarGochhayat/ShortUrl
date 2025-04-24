"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("./config");
const short_url_module_1 = require("./app/short-url/short-url.module");
const auth_middleware_1 = require("./shared/middlewares/auth.middleware");
const short_url_controller_1 = require("./app/short-url/short-url.controller");
let AppModule = class AppModule {
    configure(shortUrl) {
        shortUrl
            .apply(auth_middleware_1.AuthMiddleware)
            .exclude({ path: 'short-url', method: common_1.RequestMethod.POST })
            .forRoutes(short_url_controller_1.ShortUrlController);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(config_1.pgDBConfig), short_url_module_1.ShortUrlModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map