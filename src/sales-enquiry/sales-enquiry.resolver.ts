import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SalesEnquiryService } from './sales-enquiry.service';
import { SalesEnquiry } from './entities/sales-enquiry.entity';
import { CreateSalesEnquiryInput } from './dto/create-sales-enquiry.input';
import { UpdateSalesEnquiryInput } from './dto/update-sales-enquiry.input';

@Resolver(() => SalesEnquiry)
export class SalesEnquiryResolver {
  constructor(private readonly salesEnquiryService: SalesEnquiryService) {}

  @Mutation(() => SalesEnquiry)
  createSalesEnquiry(
    @Args('data') createSalesEnquiryInput: CreateSalesEnquiryInput
  ) {
    return this.salesEnquiryService.create(createSalesEnquiryInput);
  }

  @Query(() => [SalesEnquiry], { name: 'salesEnquiry' })
  findAll() {
    return this.salesEnquiryService.findAll();
  }

  // @Query(() => SalesEnquiry, { name: 'salesEnquiry' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.salesEnquiryService.findOne(id);
  // }

  // @Mutation(() => SalesEnquiry)
  // updateSalesEnquiry(
  //   @Args('updateSalesEnquiryInput')
  //   updateSalesEnquiryInput: UpdateSalesEnquiryInput
  // ) {
  //   return this.salesEnquiryService.update(
  //     updateSalesEnquiryInput.id,
  //     updateSalesEnquiryInput
  //   );
  // }

  @Mutation(() => SalesEnquiry)
  removeSalesEnquiry(@Args('id', { type: () => Int }) id: number) {
    return this.salesEnquiryService.remove(id);
  }
}
