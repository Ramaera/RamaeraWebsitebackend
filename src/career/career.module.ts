import { Module } from '@nestjs/common';
import { CareerService } from './career.service';
import { CareerResolver } from './career.resolver';

@Module({
  providers: [CareerResolver, CareerService]
})
export class CareerModule {}
