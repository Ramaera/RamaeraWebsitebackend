import { CreateSalesEnquiryInput } from './create-sales-enquiry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSalesEnquiryInput extends PartialType(
  CreateSalesEnquiryInput
) {
  @Field(() => Number, { description: 'id of  User' })
  id: number;

  @Field(() => String, { description: 'Name of User' })
  name: string;

  @Field(() => String, { description: 'Email of User' })
  email: string;

  @Field(() => String, { description: 'Mobile Number of User' })
  mobileNumber: string;

  @Field(() => String, { description: 'Products of User' })
  products: string;

  @Field(() => String, { description: 'Remarks from User' })
  remarks: string;
}
