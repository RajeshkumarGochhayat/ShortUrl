"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortUrlController = void 0;
const common_1 = require("@nestjs/common");
const short_url_service_1 = require("./short-url.service");
const create_short_url_dto_1 = require("./dto/create-short-url.dto");
const swagger_1 = require("@nestjs/swagger");
const utility_const_1 = require("../../shared/utils/utility.const");
let ShortUrlController = class ShortUrlController {
    shortUrlService;
    constructor(shortUrlService) {
        this.shortUrlService = shortUrlService;
    }
    async create(createShortUrlDto, res) {
        return res.status(common_1.HttpStatus.CREATED).json({
            statusCode: common_1.HttpStatus.CREATED,
            data: await this.shortUrlService.createShortUrl(createShortUrlDto),
            message: 'Short Url added Successfully',
        });
    }
    async redirect(shortCode, res) {
        const url = await this.shortUrlService.getRedirectUrl(shortCode);
        return res.redirect(302, url);
    }
};
exports.ShortUrlController = ShortUrlController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_short_url_dto_1.CreateShortUrlDto, Object]),
    __metadata("design:returntype", Promise)
], ShortUrlController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':shortCode'),
    __param(0, (0, common_1.Param)('shortCode')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ShortUrlController.prototype, "redirect", null);
exports.ShortUrlController = ShortUrlController = __decorate([
    (0, swagger_1.ApiTags)('short-url'),
    (0, swagger_1.ApiResponse)(utility_const_1.ON_INTERNAL_SERVER_ERROR_RESPONSE),
    (0, swagger_1.ApiResponse)(utility_const_1.ON_CREATE_BAD_RESPONSE),
    (0, common_1.Controller)('short-url'),
    __metadata("design:paramtypes", [short_url_service_1.ShortUrlService])
], ShortUrlController);
//# sourceMappingURL=short-url.controller.js.map