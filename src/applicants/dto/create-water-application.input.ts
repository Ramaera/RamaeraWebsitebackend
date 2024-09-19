import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWaterApplicantInput {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  pwID: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  district: string;

  @Field(() => String, { nullable: true })
  state: string;

  @Field(() => String, { nullable: true })
  appliedFor: string;

  @Field(() => String, { nullable: true })
  gst: string;
}
