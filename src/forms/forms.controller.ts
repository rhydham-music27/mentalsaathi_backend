import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { FormsService } from './forms.service';
import { MailService } from 'src/mail/mail.service';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService, private readonly mailService: MailService) { }
  @Post('join-waitlist')
  async joinWaitlist(@Body() detail: any) {
    return this.formsService.joinWaitlist(detail)

  }
  @Post('contact')
  async contactForm(@Body() detail: any) {
    if (!detail.first_name || !detail.last_name || !detail.email || !detail.phone_number || !detail.message) throw new BadRequestException({
      message: "enter all the details ",
      success: false
    })
    await this.formsService.contactForm(detail)
    return {
      message: "query sent to the team",
      success: true
    }
  }
  @Post('getintouch')
  async getintouchform(@Body() detail: any) {
    if (!detail.first_name || !detail.last_name || !detail.email || !detail.phone_number ) throw new BadRequestException({
      message: "enter all the details ",
      success: false
    })
    await this.formsService.GetInTouchForm(detail)
    return {
      message: "form sent for review",
      success: true
    }
  }
}
