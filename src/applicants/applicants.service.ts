import { Injectable } from '@nestjs/common';
import { CreateApplicantInput } from './dto/create-applicant.input';
import { UpdateApplicantInput } from './dto/update-applicant.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ApplicantsService {


  constructor(    private prisma: PrismaService){}


  

  async getAllUser(){
    return this.prisma.user.findMany({})
    
  }


}
