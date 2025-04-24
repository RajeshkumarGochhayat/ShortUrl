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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShortUrlDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const utility_const_1 = require("../../../shared/utils/utility.const");
class CreateShortUrlDto {
    shortCode;
    redirectUrl;
}
exports.CreateShortUrlDto = CreateShortUrlDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'shortCode',
    }),
    (0, class_validator_1.IsString)({
        message: utility_const_1.STATIC_MESSAGES.STRING_TYPE('shortCode'),
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: utility_const_1.STATIC_MESSAGES.REQUIRED('shortCode'),
    }),
    __metadata("design:type", String)
], CreateShortUrlDto.prototype, "shortCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'redirectUrl',
    }),
    (0, class_validator_1.IsString)({
        message: utility_const_1.STATIC_MESSAGES.STRING_TYPE('redirectUrl'),
    }),
    (0, class_validator_1.MaxLength)(1000),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsNotEmpty)({
        message: utility_const_1.STATIC_MESSAGES.REQUIRED('redirectUrl'),
    }),
    __metadata("design:type", String)
], CreateShortUrlDto.prototype, "redirectUrl", void 0);
//# sourceMappingURL=create-short-url.dto.js.map