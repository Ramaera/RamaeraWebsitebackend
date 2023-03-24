import { InputType, Field } from '@nestjs/graphql';
import { Role } from '@prisma/client';

@InputType()
export class UpdateUserInput {
 @Field()
 name?:string

 @Field(()=>Role)
 role?:Role
 

}
