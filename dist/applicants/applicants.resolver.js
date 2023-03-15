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
exports.ApplicantsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const applicants_service_1 = require("./applicants.service");
const applicant_entity_1 = require("./entities/applicant.entity");
const create_applicant_input_1 = require("./dto/create-applicant.input");
const nestjs_prisma_1 = require("nestjs-prisma");
let ApplicantsResolver = class ApplicantsResolver {
    constructor(applicantsService, prisma) {
        this.applicantsService = applicantsService;
        this.prisma = prisma;
    }
    async createApplication(payload) {
        try {
            const newApplication = this.prisma.applicationForDistributionSystem.create({
                data: Object.assign({}, payload),
            });
            return newApplication;
        }
        catch (err) { }
    }
    async findAll() {
        return this.applicantsService.findAll();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => applicant_entity_1.Applicant),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_applicant_input_1.CreateApplicantInput]),
    __metadata("design:returntype", Promise)
], ApplicantsResolver.prototype, "createApplication", null);
__decorate([
    (0, graphql_1.Query)(() => [applicant_entity_1.Applicant], { name: 'applicants' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApplicantsResolver.prototype, "findAll", null);
ApplicantsResolver = __decorate([
    (0, graphql_1.Resolver)(() => applicant_entity_1.Applicant),
    __metadata("design:paramtypes", [applicants_service_1.ApplicantsService,
        nestjs_prisma_1.PrismaService])
], ApplicantsResolver);
exports.ApplicantsResolver = ApplicantsResolver;
//# sourceMappingURL=applicants.resolver.js.map