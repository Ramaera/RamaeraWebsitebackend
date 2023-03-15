import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ContactUsRepsonse {
  @Field(() => String)
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
