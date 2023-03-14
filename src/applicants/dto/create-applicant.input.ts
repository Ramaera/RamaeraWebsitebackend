import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { ApplicantType, STATUS } from '@prisma/client';

@InputType()
export class CreateApplicantInput {


  @Field(() => String, { nullable:true })
  name: string

  @Field(() => String, { nullable:true })
  email: string

  @Field(() => String,{ nullable:true })
  mobileNumber : string

  @Field(() => String, { nullable:true })
  applicantAddress:string


  @Field(() => ApplicantType, { nullable:true})
  applicantType : ApplicantType

  @Field(() => String, { nullable:true})
  firmName: string

  @Field(() => String, { nullable:true })
  State:string

  @Field(() => String, { nullable:true })
  District : string  
}


registerEnumType(ApplicantType,
  {
  name:'ApplicantType',
  }
)


