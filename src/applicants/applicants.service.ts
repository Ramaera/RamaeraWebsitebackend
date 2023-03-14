import { Injectable } from '@nestjs/common';
import { CreateApplicantInput } from './dto/create-applicant.input';
import { UpdateApplicantInput } from './dto/update-applicant.input';

@Injectable()
export class ApplicantsService {
  create(createApplicantInput: CreateApplicantInput) {
    return 'This action adds a new applicant';
  }

  findAll() {
    return `This action returns all applicants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} applicant`;
  }

  update(id: number, updateApplicantInput: UpdateApplicantInput) {
    return `This action updates a #${id} applicant`;
  }

  remove(id: number) {
    return `This action removes a #${id} applicant`;
  }
}
