import { Test, TestingModule } from '@nestjs/testing';
import { PosenquiryResolver } from './posenquiry.resolver';
import { PosenquiryService } from './posenquiry.service';

describe('PosenquiryResolver', () => {
  let resolver: PosenquiryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosenquiryResolver, PosenquiryService],
    }).compile();

    resolver = module.get<PosenquiryResolver>(PosenquiryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
