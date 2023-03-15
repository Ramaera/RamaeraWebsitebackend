import { CreateContactUsRepsonseInput } from './create-contact-us-repsonse.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactUsRepsonseInput extends PartialType(CreateContactUsRepsonseInput) {
  @Field(() => Int)
  id: number;
}
