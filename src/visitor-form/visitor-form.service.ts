import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { CreateVisitorFormInput } from './dto/create-visitor-form.input';
// import { UpdateVisitorFormInput } from './dto/update-visitor-form.input';

@Injectable()
export class VisitorFormService {

  constructor(    private prisma: PrismaService){}




  async create(payload: CreateVisitorFormInput) {
    return this.prisma.visitorForm.create({
      data:payload
    })
  }

  findAll() {
    return this.prisma.visitorForm.findMany({})
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} visitorForm`;
  // }

  // update(id: number, updateVisitorFormInput: UpdateVisitorFormInput) {
  //   return `This action updates a #${id} visitorForm`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} visitorForm`;
  // }
}
