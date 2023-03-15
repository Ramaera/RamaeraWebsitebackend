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
exports.ApplicantsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let ApplicantsService = class ApplicantsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createApplicantInput) {
        return 'This action adds a new applicant';
    }
    async getAllUser() {
        return this.prisma.user.findMany({});
    }
    findAll() {
        return `This action returns all applicants`;
    }
    findOne(id) {
        return `This action returns a #${id} applicant`;
    }
    update(id, updateApplicantInput) {
        return `This action updates a #${id} applicant`;
    }
    remove(id) {
        return `This action removes a #${id} applicant`;
    }
};
ApplicantsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], ApplicantsService);
exports.ApplicantsService = ApplicantsService;
//# sourceMappingURL=applicants.service.js.map