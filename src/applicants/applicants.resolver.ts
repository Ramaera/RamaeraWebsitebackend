import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ApplicantsService } from './applicants.service';
import { Applicant } from './entities/applicant.entity';
import { CreateApplicantInput } from './dto/create-applicant.input';
import { UpdateApplicantInput } from './dto/update-applicant.input';
import { PrismaService } from 'nestjs-prisma';

@Resolver(() => Applicant)
export class ApplicantsResolver {
  constructor(
    private readonly applicantsService: ApplicantsService,
    private readonly prisma: PrismaService
  ) {}

  @Mutation(() => Applicant)
  async createApplication(
    @Args('data')
    payload: CreateApplicantInput
  ) {
    try {
      const newApplication =
        this.prisma.applicationForDistributionSystem.create({
          data: {
            ...payload,
          },
        });

      return newApplication;
    } catch (err) {}
  }




  @Query(() => [Applicant], { name: 'applicants' })
  async findAll() {
    return this.prisma.applicationForDistributionSystem.findMany({})
    // return this.applicantsService.getAllUser();
  }


}
