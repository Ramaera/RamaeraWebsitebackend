import { Module } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { ApplicantsResolver } from './applicants.resolver';

@Module({
  providers: [ApplicantsResolver, ApplicantsService]
})
export class ApplicantsModule {}
