import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
   name:string
   @Field()
   email:string
   @Field()
   mobileNumber:string
   @Field()
   dob:string
   @Field()
   Country:string
   @Field()
   State:string
    @Field()
   City:string
   @Field()
   occupation:string

}

@InputType()
export class CreateDirectorInput {
 
   @Field()
   directorName:string
   @Field()
   basicIntro:string
}
@InputType()
export class CreateProjectDataFieldInput {
 
   @Field()
   fieldName:string
   @Field()
   fieldValue:string

}
