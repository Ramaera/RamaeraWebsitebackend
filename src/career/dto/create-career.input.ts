import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { JOBSTATUS } from '@prisma/client';

@InputType()
export class CreateCareerInput {
  @Field(() => String, { description: 'Job Title' })
  jobTitle: string;

  @Field(() => String, { description: 'Job Location' })
  jobLocation: string;

  @Field(() => String, { description: 'Job Type' })
  jobType: string;

  @Field(() => String, { description: 'Job Description' })
  jobDescription: string;

  @Field(() => String, { description: 'Job Department' })
  department: string;

  @Field(() => JOBSTATUS)
  jobStatus: JOBSTATUS;

}

registerEnumType(JOBSTATUS,{
  name:'JOBSTATUS',
})