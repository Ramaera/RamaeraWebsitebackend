import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSalesEnquiryInput {
  @Field(() => String, { description: 'Name of User' })
  name: string;

  @Field(() => String, { description: 'Email of User' })
  email: string;

  @Field(() => String, { description: 'Mobile Number of User' })
  mobileNumber: string;

  @Field(() => String, { description: 'Products' })
  product: string;

  @Field(() => String, { description: 'Quantity of Product' })
  quantity: string;

  @Field(() => String, { description: 'Remarks from User' })
  remarks: string;
}
