import { InputType, Int, Field } from '@nestjs/graphql';


export class Director {
   directorName: string;
   directorBasicInfo: string;
}

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
   @Field(()=>[String])
   director?:string

  //  @Field()
  //  directorName:string

  //  @Field()
  //  basicInfo:string

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
  projectId:string
   @Field()
   fieldName:string
   @Field()
   fieldValue:string

}
