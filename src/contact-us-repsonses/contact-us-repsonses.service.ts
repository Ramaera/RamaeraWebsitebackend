import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateContactUsRepsonseInput } from './dto/create-contact-us-repsonse.input';
import { UpdateContactUsRepsonseInput } from './dto/update-contact-us-repsonse.input';

@Injectable()


export class ContactUsRepsonsesService {

  constructor(    private prisma: PrismaService){}

  
  // async create(
  //   createContactUsRepsonseInput: CreateContactUsRepsonseInput
  //   ) {
  //   const Response = this.prisma.contactusResponse.create({
  //     data:{
  //       createContactUsRepsonseInput
  //     }
  //   })
  //   return Response
  // }

  findAll() {
    return this.prisma.contactusResponse.findMany({})
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} contactUsRepsonse`;
  // }

  // update(id: number, updateContactUsRepsonseInput: UpdateContactUsRepsonseInput) {
  //   return `This action updates a #${id} contactUsRepsonse`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} contactUsRepsonse`;
  // }
}
