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

 @Field(()=>[String])yourProjectType    :    string
 @Field(()=>[String]) youAre             :    string
 @Field(()=>[String]) typeOfPartnership   :   string
 @Field(()=>[String]) fundingType          :  string
 @Field(()=>[String])receivingMode  :        string
 @Field(()=>[String]) goal           :         string
 @Field(()=>[String]) targetFor       :        string
 @Field(()=>[String]) perPersonAmount :        string
 @Field(()=>[String]) yourProjectTitle  :      string
 @Field(()=>[String]) brief       :            string
 @Field(()=>[String]) marketProblem   :        string
 @Field(()=>[String]) solution      :          string
 @Field(()=>[String]) yourProduct     :        string
 @Field(()=>[String]) businessModel   :        string
  @Field(()=>[String])sizeOfMarket    :        string
  @Field(()=>[String])currentTransaction  :    string
  @Field(()=>[String])competitiveLandscape :   string
  @Field(()=>[String])financialProjection :    string
  @Field(()=>[String])fundNeed          :      string
  @Field(()=>[String])equityStructure   :      string
  @Field(()=>[String])exitOption       :       string
  @Field(()=>[String])selectFundingType  :     string
  @Field(()=>[String])fundingStage      :      string
  @Field(()=>[String])selectFundingTypeAgain:  string
  @Field(()=>[String])fundingAmount    :       string
  @Field(()=>[String])fundingDate  :           string
  @Field(()=>[String])linkedinProfile  :       string
  @Field(()=>[String])twitterProfile   :       string
  @Field(()=>[String])facebookProfile  :       string
  @Field(()=>[String])instagramProfile  :      string
  @Field(()=>[String])websiteURL     :         string
  @Field(()=>[String])thanksNote     :         string



}

 

