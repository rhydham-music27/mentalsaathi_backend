import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { MailService } from 'src/mail/mail.service';

@Module({
  controllers: [FormsController],
  providers: [FormsService,MailService],
})
export class FormsModule {}
