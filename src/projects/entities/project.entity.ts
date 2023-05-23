import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  mobileNumber: string;
  @Field()
  dob: string;
  @Field()
  Country: string;

  @Field()
  State: string;
  @Field()
  City: string;

  @Field()
  occupation: string;

  @Field(() => [String])
  director?: string;

  @Field() yourProjectType: string;
  @Field() youAre: string;
  @Field() typeOfPartnership: string;
  @Field() fundingType: string;
  @Field() receivingMode: string;
  @Field() goal: string;
  @Field() targetFor: string;
  @Field() perPersonAmount: string;
  @Field() yourProjectTitle: string;
  @Field() brief: string;
  @Field() marketProblem: string;
  @Field() solution: string;
  @Field() yourProduct: string;
  @Field() businessModel: string;
  @Field() sizeOfMarket: string;
  @Field() currentTransaction: string;
  @Field() competitiveLandscape: string;
  @Field() financialProjection: string;
  @Field() fundNeed: string;
  @Field() equityStructure: string;
  @Field() exitOption: string;
  @Field() selectFundingType: string;
  @Field() fundingStage: string;
  @Field() selectFundingTypeAgain: string;
  @Field() fundingAmount: string;
  @Field() fundingDate: string;
  @Field() linkedinProfile: string;
  @Field() twitterProfile: string;
  @Field() facebookProfile: string;
  @Field() instagramProfile: string;
  @Field() websiteURL: string;
  @Field() thanksNote: string;
  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt: Date;

  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;
}
