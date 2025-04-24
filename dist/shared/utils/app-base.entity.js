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
exports.BaseAppEntity = void 0;
const typeorm_1 = require("typeorm");
class BaseAppEntity {
    createdDate;
    updatedDate;
}
exports.BaseAppEntity = BaseAppEntity;
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_date', type: 'timestamp' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], BaseAppEntity.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_date', nullable: true, type: 'timestamp' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], BaseAppEntity.prototype, "updatedDate", void 0);
//# sourceMappingURL=app-base.entity.js.map