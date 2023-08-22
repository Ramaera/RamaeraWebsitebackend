import { Module } from '@nestjs/common';
import { PosenquiryService } from './posenquiry.service';
import { PosenquiryResolver } from './posenquiry.resolver';

@Module({
  providers: [PosenquiryResolver, PosenquiryService]
})
export class PosenquiryModule {}
