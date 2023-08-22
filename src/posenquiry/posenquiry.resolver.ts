import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PosenquiryService } from './posenquiry.service';
import { Posenquiry } from './entities/posenquiry.entity';
import { CreatePosenquiryInput } from './dto/create-posenquiry.input';
import { UpdatePosenquiryInput } from './dto/update-posenquiry.input';

@Resolver(() => Posenquiry)
export class PosenquiryResolver {
  constructor(private readonly posenquiryService: PosenquiryService) {}

  @Mutation(() => Posenquiry)
  createPosenquiry(
    @Args('createPosenquiryInput') createPosenquiryInput: CreatePosenquiryInput
  ) {
    return this.posenquiryService.create(createPosenquiryInput);
  }

  @Query(() => [Posenquiry], { name: 'posenquiry' })
  findAll() {
    return this.posenquiryService.findAll();
  }

  // @Query(() => Posenquiry, { name: 'posenquiry' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.posenquiryService.findOne(id);
  // }

  // @Mutation(() => Posenquiry)
  // updatePosenquiry(@Args('updatePosenquiryInput') updatePosenquiryInput: UpdatePosenquiryInput) {
  //   return this.posenquiryService.update(updatePosenquiryInput.id, updatePosenquiryInput);
  // }

  // @Mutation(() => Posenquiry)
  // removePosenquiry(@Args('id', { type: () => Int }) id: number) {
  //   return this.posenquiryService.remove(id);
  // }
}
