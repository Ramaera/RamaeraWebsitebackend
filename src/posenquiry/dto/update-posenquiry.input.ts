import { CreatePosenquiryInput } from './create-posenquiry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePosenquiryInput extends PartialType(CreatePosenquiryInput) {
  @Field(() => Int)
  id: number;
}
