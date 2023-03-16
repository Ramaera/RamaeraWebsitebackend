import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Project {
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

   @Field(()=>String)
   director?:string

   @Field(()=>String)
   fieldname?:string

   @Field(()=>String)
   fieldValue?:string
   
}
