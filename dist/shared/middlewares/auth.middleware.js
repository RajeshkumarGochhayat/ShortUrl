"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const utility_const_1 = require("../utils/utility.const");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '.env' });
let AuthMiddleware = class AuthMiddleware {
    async use(req, res, next) {
        const token = req.headers['authorization']?.split('Bearer ')?.[1] || '';
        if (!token)
            throw new common_1.UnauthorizedException(utility_const_1.STATIC_MESSAGES.TOKEN_MISSING);
        if (token === process.env.ACCESS_KEY) {
            next();
        }
        else {
            throw new common_1.UnauthorizedException(utility_const_1.STATIC_MESSAGES.UNAUTHORIZED);
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map