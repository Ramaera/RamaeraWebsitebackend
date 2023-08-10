import { Module } from '@nestjs/common';
import { SalesEnquiryService } from './sales-enquiry.service';
import { SalesEnquiryResolver } from './sales-enquiry.resolver';

@Module({
  providers: [SalesEnquiryResolver, SalesEnquiryService]
})
export class SalesEnquiryModule {}
