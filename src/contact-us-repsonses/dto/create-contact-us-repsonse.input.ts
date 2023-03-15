import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateContactUsRepsonseInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String)
  email:string

  @Field(() => String)
  company:string

  @Field(() => String)
  Subject:string

  @Field(() => String)
  message: string
}
