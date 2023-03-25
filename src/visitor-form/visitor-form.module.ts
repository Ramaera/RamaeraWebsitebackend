import { Module } from '@nestjs/common';
import { VisitorFormService } from './visitor-form.service';
import { VisitorFormResolver } from './visitor-form.resolver';

@Module({
  providers: [VisitorFormResolver, VisitorFormService]
})
export class VisitorFormModule {}
