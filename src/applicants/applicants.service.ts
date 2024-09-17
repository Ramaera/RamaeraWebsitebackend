import { Injectable } from '@nestjs/common';
import { CreateApplicantInput } from './dto/create-applicant.input';
import { UpdateApplicantInput } from './dto/update-applicant.input';
import { PrismaService } from 'nestjs-prisma';
import { CreateWaterApplicantInput } from './dto/create-water-application.input';

@Injectable()
export class ApplicantsService {
  constructor(private prisma: PrismaService) {}

  async getAllUser() {
    return this.prisma.user.findMany({});
  }

  async createWaterDistributionApplication(payload: CreateWaterApplicantInput) {
    const applicationData =
      await this.prisma.applicationForWaterDistributionSystem.create({
        data: {
          ...payload,
        },
      });

    return applicationData;
  }
}
