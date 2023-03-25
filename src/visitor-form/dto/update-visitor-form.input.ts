import { CreateVisitorFormInput } from './create-visitor-form.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVisitorFormInput extends PartialType(CreateVisitorFormInput) {
  // @Field(() => Int)
  // id: number;
}
