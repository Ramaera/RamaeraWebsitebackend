import { Module } from '@nestjs/common';
import { PlanetseraRewardsService } from './planetsera-rewards.service';
import { PlanetseraRewardsResolver } from './planetsera-rewards.resolver';

@Module({
  providers: [PlanetseraRewardsResolver, PlanetseraRewardsService]
})
export class PlanetseraRewardsModule {}
