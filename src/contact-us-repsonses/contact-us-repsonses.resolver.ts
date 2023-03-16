import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactUsRepsonsesService } from './contact-us-repsonses.service';
import { ContactUsRepsonse } from './entities/contact-us-repsonse.entity';
import { CreateContactUsRepsonseInput } from './dto/create-contact-us-repsonse.input';
// import { UpdateContactUsRepsonseInput } from './dto/update-contact-us-repsonse.input';
import { PrismaService } from 'nestjs-prisma';

@Resolver(() => ContactUsRepsonse)
export class ContactUsRepsonsesResolver {
  constructor(
    private readonly contactUsRepsonsesService: ContactUsRepsonsesService,
    private readonly prisma: PrismaService
    ) {}

  @Mutation(() => ContactUsRepsonse)
  async createContactUsResponse(
    @Args('data')
    payload: CreateContactUsRepsonseInput
  ) {
    try {
      const newApplication =
        this.prisma.contactusResponse.create({
          data: {
            ...payload,
          },
        });

      return newApplication;
    } catch (err) {}
  }

  @Query(() => [ContactUsRepsonse], { name: 'contactUsRepsonses' })
  findAll() {
    return this.contactUsRepsonsesService.findAll();
  }

}
