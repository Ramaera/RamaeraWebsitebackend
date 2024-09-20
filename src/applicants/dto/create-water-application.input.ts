import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWaterApplicantInput {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field(() => String, { nullable: true })
  altMobile: string;

  @Field(() => String, { nullable: true })
  dob: string;

  @Field(() => String, { nullable: true })
  aadhaar: string;

  @Field(() => String, { nullable: true })
  state: string;

  @Field(() => String, { nullable: true })
  district: string;

  @Field(() => String, { nullable: true })
  pincode: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  pwID: string;

  @Field(() => String, { nullable: true })
  firmName: string;

  @Field(() => String, { nullable: true })
  firmRegistration: string;

  @Field(() => String, { nullable: true })
  bankName: string;

  @Field(() => String, { nullable: true })
  bankAccount: string;

  @Field(() => String, { nullable: true })
  bankIfsc: string;

  @Field(() => String, { nullable: true })
  gst: string;

  @Field(() => String, { nullable: true })
  appliedFor: string;

  @Field(() => String, { nullable: true })
  distributorArea: string;
}
