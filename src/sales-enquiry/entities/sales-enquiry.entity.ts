import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SalesEnquiry {
  @Field(() => String, { description: 'Name of User' })
  name: string;

  @Field(() => String, { description: 'Email of User' })
  email: string;

  @Field(() => String, { description: 'Mobile Number of User' })
  mobileNumber: string;

  @Field(() => String, { description: 'Products of User' })
  product: string;

  @Field(() => String, { description: 'Remarks from User' })
  remarks: string;
}
