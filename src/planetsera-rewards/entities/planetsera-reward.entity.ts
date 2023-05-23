import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PlanetseraReward {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  password: string;

  @Field()
  rewardCode: string;

  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt: Date;

  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;
}
