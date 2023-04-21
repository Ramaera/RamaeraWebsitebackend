import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlanetseraRewardsService } from './planetsera-rewards.service';
import { PlanetseraReward } from './entities/planetsera-reward.entity';
import { CreatePlanetseraRewardInput } from './dto/create-planetsera-reward.input';
import { UpdatePlanetseraRewardInput } from './dto/update-planetsera-reward.input';
import { PrismaService } from 'nestjs-prisma';

@Resolver(() => PlanetseraReward)
export class PlanetseraRewardsResolver {
  constructor(private readonly planetseraRewardsService: PlanetseraRewardsService,
    private prisma: PrismaService) {}

  @Mutation(() => PlanetseraReward)
  createPlanetseraReward(@Args('createPlanetseraRewardInput') createPlanetseraRewardInput: CreatePlanetseraRewardInput) {
    return this.planetseraRewardsService.create(createPlanetseraRewardInput);
  }

  @Query(() => [PlanetseraReward], { name: 'planetseraRewards' })
  findAll() {
    return this.planetseraRewardsService.findAll();
  }

  @Query(() => PlanetseraReward, { name: 'planetseraReward' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.planetseraRewardsService.findOne(id);
  }

  @Mutation(() => PlanetseraReward)
  updatePlanetseraReward(@Args('updatePlanetseraRewardInput') updatePlanetseraRewardInput: UpdatePlanetseraRewardInput) {
    return this.planetseraRewardsService.update(updatePlanetseraRewardInput.id, updatePlanetseraRewardInput);
  }

  @Mutation(() => PlanetseraReward)
  removePlanetseraReward(@Args('id', { type: () => Int }) id: number) {
    return this.planetseraRewardsService.remove(id);
  }
}
