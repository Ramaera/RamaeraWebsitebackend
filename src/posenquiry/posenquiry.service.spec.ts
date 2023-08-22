import { Test, TestingModule } from '@nestjs/testing';
import { PosenquiryService } from './posenquiry.service';

describe('PosenquiryService', () => {
  let service: PosenquiryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosenquiryService],
    }).compile();

    service = module.get<PosenquiryService>(PosenquiryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
