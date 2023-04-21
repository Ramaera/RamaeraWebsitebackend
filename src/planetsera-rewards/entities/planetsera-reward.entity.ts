import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PlanetseraReward {
  @Field()
  name:string

  @Field()
  email:string

  @Field()
  phone:string

  @Field()
  password:string

  @Field()
  rewardCode:string
}
