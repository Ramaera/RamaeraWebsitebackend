import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Posenquiry {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  mobileNumber: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  pwid: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  Number_of_persons_in_POS_City: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  CityName: string;
}
