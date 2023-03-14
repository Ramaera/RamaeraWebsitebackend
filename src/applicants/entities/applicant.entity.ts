import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { ApplicantType, STATUS } from '@prisma/client';

@ObjectType()
export class Applicant {

  @Field(() => String,{nullable:true} )
  name: string

  @Field(() => String  )
  email: string

  @Field(() => String,  )
  mobileNumber : string

  @Field(() => String,  )
  applicantAddress:string


  @Field(() => ApplicantType  )
  applicantType : ApplicantType

  @Field(() => String,  )
  firmName: String

  @Field(() => String,  )
  State:String

  @Field(() => String,  )
  District : string  
}


registerEnumType(ApplicantType,
  {
  name:'ApplicantType',
  }
)

registerEnumType(STATUS,
  {
  name:'STATUS'
  }
)