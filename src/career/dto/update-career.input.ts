import { CreateCareerInput } from './create-career.input';
import { InputType, Field, Int, PartialType, registerEnumType } from '@nestjs/graphql';
import { JOBSTATUS } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCareerInput extends PartialType(CreateCareerInput) {

  @Field(() => String, { description: 'Id' })
  id: string;

  @Field(() => String, { description: 'Job Title' })
  jobTitle?: string;

  @Field(() => String, { description: 'Job Location' })
  jobLocation?: string;

  @Field(() => String, { description: 'Job Type' })
  jobType?: string;

  @Field(() => String, { description: 'Job Description' })
  jobDescription?: string;

  @Field(() => String, { description: 'Job Department' })
  department?: string;

  @Field(() => JOBSTATUS)
  @IsNotEmpty()
  jobStatus?: JOBSTATUS;
}

registerEnumType(JOBSTATUS,{
  name:'JOBSTATUS',
})