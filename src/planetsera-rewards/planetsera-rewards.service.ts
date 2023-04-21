import { Injectable } from '@nestjs/common';
import { CreatePlanetseraRewardInput } from './dto/create-planetsera-reward.input';
import { UpdatePlanetseraRewardInput } from './dto/update-planetsera-reward.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PlanetseraRewardsService {
  constructor(
    private prisma: PrismaService){}


  create(createPlanetseraRewardInput: CreatePlanetseraRewardInput) {
    return this.prisma.planetsEraRewardCode.create({
      data:createPlanetseraRewardInput
    });
  }

  findAll() {
    return `This action returns all planetseraRewards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planetseraReward`;
  }

  update(id: number, updatePlanetseraRewardInput: UpdatePlanetseraRewardInput) {
    return `This action updates a #${id} planetseraReward`;
  }

  remove(id: number) {
    return `This action removes a #${id} planetseraReward`;
  }
}
