import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WaterApplicant {
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
  State: string;

  @Field(() => String, { nullable: true })
  appliedFor: string;
}
