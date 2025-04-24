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
exports.ShortUrl = void 0;
const app_base_entity_1 = require("../../../shared/utils/app-base.entity");
const typeorm_1 = require("typeorm");
let ShortUrl = class ShortUrl extends app_base_entity_1.BaseAppEntity {
    id;
    shortCode;
    redirectUrl;
};
exports.ShortUrl = ShortUrl;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], ShortUrl.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, name: 'shortCode' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ShortUrl.prototype, "shortCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'redirectUrl', type: 'varchar', length: 1000 }),
    __metadata("design:type", String)
], ShortUrl.prototype, "redirectUrl", void 0);
exports.ShortUrl = ShortUrl = __decorate([
    (0, typeorm_1.Entity)()
], ShortUrl);
//# sourceMappingURL=short-url.entity.js.map