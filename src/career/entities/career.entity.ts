import { ObjectType, Field, Int } from '@nestjs/graphql';
import { JOBSTATUS } from '@prisma/client';

@ObjectType()
export class Career {
  @Field(() => String, { description: 'id' })
  id: string;

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

  @Field()
  jobStatus: string;

  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt: Date;

  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;
}
