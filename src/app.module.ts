import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [MailModule, ConfigModule.forRoot({
    isGlobal: true
  }), FormsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
