import { CreatePlanetseraRewardInput } from './create-planetsera-reward.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlanetseraRewardInput extends PartialType(CreatePlanetseraRewardInput) {
  @Field(() => Int)
  id: number;
}
