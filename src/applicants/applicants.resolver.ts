import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ApplicantsService } from './applicants.service';
import { Applicant } from './entities/applicant.entity';
import { CreateApplicantInput } from './dto/create-applicant.input';
import { UpdateApplicantInput } from './dto/update-applicant.input';
import { PrismaService } from 'nestjs-prisma';

@Resolver(() => Applicant)
export class ApplicantsResolver {
  constructor(private readonly applicantsService: ApplicantsService,
                private readonly prisma: PrismaService) {}
  



  @Mutation(() => Applicant)
  async createApplication(
    @Args('data')
    payload: CreateApplicantInput
  ) {
    try{
      
    const newApplication = this.prisma.applicationForDistributionSystem.create({
      data:{
        ...payload 
      }
    });
    
    return newApplication;


  }catch(err)
{

}
  
  }


  

  @Mutation(() => Applicant)
  createApplicant(@Args('data') createApplicantInput: CreateApplicantInput) {
    return this.applicantsService.create(createApplicantInput);
  }

  @Query(() => [Applicant], { name: 'applicants' })
  findAll() {
    return this.applicantsService.findAll();
  }

  @Query(() => Applicant, { name: 'applicant' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.applicantsService.findOne(id);
  }

  @Mutation(() => Applicant)
  updateApplicant(@Args('updateApplicantInput') updateApplicantInput: UpdateApplicantInput) {
    return this.applicantsService.update(updateApplicantInput.id, updateApplicantInput);
  }

  @Mutation(() => Applicant)
  removeApplicant(@Args('id', { type: () => Int }) id: number) {
    return this.applicantsService.remove(id);
  }
}
