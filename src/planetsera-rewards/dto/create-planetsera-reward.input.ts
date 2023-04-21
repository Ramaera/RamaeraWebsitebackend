import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlanetseraRewardInput {
  @Field(()=>String)
  name:string

  @Field(()=>String)
  email:string

  @Field(()=>String)
  phone:string

  @Field(()=>String)
  password:string

  @Field(()=>String)
  rewardCode:string
}
