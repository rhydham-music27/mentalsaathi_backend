import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) { }
  @Post('send')
  async sendEmail(@Body() body: { userEmail: string; message?: string }) {
    const { userEmail, message } = body;

    // Customize the email content to yourself
    const subject = `New message from Mental Saathi user: ${userEmail}`;
    const text = message;

    await this.mailService.sendEmail(process.env.EMAIL_USER, subject, text);

    return { status: 'Email sent' };
  }
}
