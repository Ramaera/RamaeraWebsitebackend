import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { CreateCareerInput } from './dto/create-career.input';
import { UpdateCareerInput } from './dto/update-career.input';

@Injectable()
export class CareerService {

  constructor( private prisma: PrismaService){}


  create(
    @Args('data')
    createCareerInput: CreateCareerInput
    ) {

    try {
const createJob=this.prisma.career.create({
  data:createCareerInput
})
  return createJob
    }catch(error){
      console.log("error messages ",error.message)

    }
    
  }

  // findAll() {
  //   return this.prisma.career.findMany({});
  // }

  findOne(id: number) {
    return `This action returns a #${id} career`;
  }

  update(updateCareerInput: UpdateCareerInput) {
    const updatedJob=this.prisma.career.update({
      where:{
        id:updateCareerInput.id
      },
      data:updateCareerInput

    })
    return updatedJob
  }

  remove(id: number) {
    return `This action removes a #${id} career`;
  }
}
