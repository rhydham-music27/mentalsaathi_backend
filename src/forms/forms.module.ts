import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { MailService } from 'src/mail/mail.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [FormsController],
  providers: [FormsService,MailService,DatabaseService],
})
export class FormsModule {}
