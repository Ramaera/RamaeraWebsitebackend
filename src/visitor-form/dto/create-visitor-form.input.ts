import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVisitorFormInput {


  @Field(() => String,{ description: 'Name',nullable:true })
  name: string;

  @Field(() => String, { description: 'Email' })
  email?: string;

  @Field(() => String, { description: 'Mobile Number' })
  mobileNumber?: string;

  @Field(() => String, { description: 'plant Name' })
  plantName?: string;

  @Field(() => String, { description: 'Reason' })
  reason?: string;

  @Field(() => String, { description: 'Date' })
  date?: string;

  @Field(() => String, { nullable:true })
  pwId?: string

  @Field(() => String, { nullable:true })
  numberOfPeople?: string

  @Field(() => String, { description: 'type of Visit' })
  typeOfVisit?: string;

  @Field(() => String, { description: 'Designatation' })
  address?: string;

}
