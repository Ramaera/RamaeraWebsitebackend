import { Injectable } from '@nestjs/common';
import { CreatePosenquiryInput } from './dto/create-posenquiry.input';
import { UpdatePosenquiryInput } from './dto/update-posenquiry.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PosenquiryService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePosenquiryInput) {
    return this.prisma.pOSEnquiry.create({
      data: {
        name: data.name,
        email: data.email,
        pwid: data.pwid,
        mobileNumber: data.mobileNumber,
        Number_of_persons_in_POS_City: data.Number_of_persons_in_POS_City,
        CityName: data.CityName,
      },
    });
  }

  findAll() {
    return this.prisma.pOSEnquiry.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} posenquiry`;
  }

  update(id: number, updatePosenquiryInput: UpdatePosenquiryInput) {
    return `This action updates a #${id} posenquiry`;
  }

  remove(id: number) {
    return `This action removes a #${id} posenquiry`;
  }
}
