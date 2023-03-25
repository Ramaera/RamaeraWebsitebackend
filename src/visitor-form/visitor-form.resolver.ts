import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VisitorFormService } from './visitor-form.service';
import { VisitorForm } from './entities/visitor-form.entity';
import { CreateVisitorFormInput } from './dto/create-visitor-form.input';
import { UpdateVisitorFormInput } from './dto/update-visitor-form.input';

@Resolver(() => VisitorForm)
export class VisitorFormResolver {
  constructor(private readonly visitorFormService: VisitorFormService) {}

  @Mutation(() => VisitorForm)
  createVisitorForm(@Args('data') data: CreateVisitorFormInput) {
    return this.visitorFormService.create(data);
  }

  @Query(() => [VisitorForm])
  findAllVisitorsList() {
    return this.visitorFormService.findAll();
  }

  // @Query(() => VisitorForm, { name: 'visitorForm' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.visitorFormService.findOne(id);
  // }

  // @Mutation(() => VisitorForm)
  // updateVisitorForm(@Args('updateVisitorFormInput') updateVisitorFormInput: UpdateVisitorFormInput) {
  //   return this.visitorFormService.update(updateVisitorFormInput.id, updateVisitorFormInput);
  // }

  // @Mutation(() => VisitorForm)
  // removeVisitorForm(@Args('id', { type: () => Int }) id: number) {
  //   return this.visitorFormService.remove(id);
  // }
}
