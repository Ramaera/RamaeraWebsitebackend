import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
  

  @Field(() => String, { nullable:true })
  id: string;
}
