import { Module } from '@nestjs/common';
import { ContactUsRepsonsesService } from './contact-us-repsonses.service';
import { ContactUsRepsonsesResolver } from './contact-us-repsonses.resolver';

@Module({
  providers: [ContactUsRepsonsesResolver, ContactUsRepsonsesService]
})
export class ContactUsRepsonsesModule {}
