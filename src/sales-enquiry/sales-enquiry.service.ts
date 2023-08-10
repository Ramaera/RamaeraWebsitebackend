import { Injectable } from '@nestjs/common';
import { CreateSalesEnquiryInput } from './dto/create-sales-enquiry.input';
import { UpdateSalesEnquiryInput } from './dto/update-sales-enquiry.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesEnquiryService {
  constructor(private prisma: PrismaService) {}

  create(createSalesEnquiryInput: CreateSalesEnquiryInput) {
    return this.prisma.salesEnquiry.create({
      data: { ...createSalesEnquiryInput },
    });
  }

  findAll() {
    return this.prisma.salesEnquiry.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} salesEnquiry`;
  }

  update(id: number, updateSalesEnquiryInput: UpdateSalesEnquiryInput) {
    return `This action updates a #${id} salesEnquiry`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesEnquiry`;
  }
}
