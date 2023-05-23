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
exports.Applicant = void 0;
const openapi = require("@nestjs/swagger");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let Applicant = class Applicant {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, mobileNumber: { required: true, type: () => String }, applicantAddress: { required: true, type: () => String }, applicantType: { required: true, type: () => Object }, firmName: { required: true, type: () => Object }, State: { required: true, type: () => Object }, District: { required: true, type: () => String }, extraInfo: { required: false, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Applicant.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Applicant.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], Applicant.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], Applicant.prototype, "mobileNumber", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], Applicant.prototype, "applicantAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.ApplicantType, {}),
    __metadata("design:type", String)
], Applicant.prototype, "applicantType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], Applicant.prototype, "firmName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], Applicant.prototype, "State", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], Applicant.prototype, "District", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Applicant.prototype, "extraInfo", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'Identifies the date and time when the object was created.' }),
    __metadata("design:type", Date)
], Applicant.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'Identifies the date and time when the object was last updated.' }),
    __metadata("design:type", Date)
], Applicant.prototype, "updatedAt", void 0);
Applicant = __decorate([
    (0, graphql_1.ObjectType)()
], Applicant);
exports.Applicant = Applicant;
(0, graphql_1.registerEnumType)(client_1.ApplicantType, {
    name: 'ApplicantType',
});
(0, graphql_1.registerEnumType)(client_1.STATUS, {
    name: 'STATUS',
});
//# sourceMappingURL=applicant.entity.js.map