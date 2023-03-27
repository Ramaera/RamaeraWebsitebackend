import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class VisitorForm {
  @Field(() => String, { description: 'Id' })
  id: string;

  @Field(() => String, { description: 'Id' })
  name?: string;
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
  @Field(() => String, { description: 'pwId' })
  pwId?: string
  @Field(() => String, { description: 'number of People' })
  numberOfPeople?: string
  @Field(() => String, { description: 'type of visit' })
  typeOfVisit?: string;
  @Field(() => String, { description: 'Address' })
  address?: string;
}
