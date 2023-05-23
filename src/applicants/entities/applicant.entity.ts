import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { ApplicantType, STATUS } from '@prisma/client';

@ObjectType()
export class Applicant {
  @Field(() => String, { nullable: true })
  id: string;
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  mobileNumber: string;

  @Field(() => String)
  applicantAddress: string;

  @Field(() => ApplicantType)
  applicantType: ApplicantType;

  @Field(() => String)
  firmName: String;

  @Field(() => String)
  State: String;

  @Field(() => String)
  District: string;

  @Field(() => String)
  extraInfo?: string;

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

registerEnumType(ApplicantType, {
  name: 'ApplicantType',
});

registerEnumType(STATUS, {
  name: 'STATUS',
});
