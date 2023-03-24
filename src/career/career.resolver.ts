import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CareerService } from './career.service';
import { Career } from './entities/career.entity';
import { CreateCareerInput } from './dto/create-career.input';
import { UpdateCareerInput } from './dto/update-career.input';
import { CareerEntity } from 'src/common/decorators/career.decorator';
import { PrismaService } from 'nestjs-prisma';

@Resolver(() => Career)
export class CareerResolver {
  constructor(private readonly careerService: CareerService,
    private readonly prisma: PrismaService) {}

  @Mutation(() => Career)
  createJob( @Args("data") payload: CreateCareerInput) {
    return this.careerService.create(payload);
  }


  @Query(() => [Career], { name: 'AllJobDetails' })
  findAll() {
    return this.prisma.career.findMany({});
  }
  // @Query(() => [Career])
  // findAllJobs() {
    
  //   return this.careerService.findAll();
  // }

  @Query(() => Career, { name: 'career_find_one' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.careerService.findOne(id);
  }

  @Mutation(() => Career)
  updateJob(
    @CareerEntity() career: Career,
    @Args('data') 
    updateCareerInput: UpdateCareerInput) {
    return this.careerService.update(updateCareerInput);
  }

  @Mutation(() => Career)
  removeCareer(@Args('id', { type: () => Int }) id: number) {
    return this.careerService.remove(id);
  }
}
