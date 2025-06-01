import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class FormsService {
    constructor(private readonly mailService: MailService) { }
    async joinWaitlist(@Body() detail: any) {

        if (!detail) throw new BadRequestException({
            success: false,
            message: "email not entered"
        })
        const messageForMe = `Hello Rhydham,
    
    A new user has just joined the Mental Saathi waiting list. 🎉
    
    Here are the details:
    
    - 📧 Email: ${detail.email}
    
    
    You're building something meaningful — and people are already lining up for it!
    
    Keep going,
    Mental Saathi Notification Bot 🤖`
        const subjectForUser = `Confirmation you succesfully joined our waiting list`
        const subjectForMe = `🔔 New user joined the Mental Saathi waiting list`
        const messageForUser = `Hey Dear,
    Thank you for joining the waiting list for Mental Saathi – we’re so glad to have you with us!
    
    Your interest means a lot. You’ve officially reserved your spot, and you'll be among the first to know when we launch. We’re working hard behind the scenes to build a space where mental wellness meets empathy, support, and innovation.
    
    Stay tuned – exciting things are coming your way soon.
    
    Until then, take care of your mind like it takes care of you.
    
    Warm regards,  
    Team Mental Saathi  `
        await this.mailService.sendEmail(detail.email, subjectForUser, messageForUser)
        await this.mailService.sendEmail(process.env.EMAIL_USER, subjectForMe, messageForMe)
        return {
            success: true,
            message: "you joined the waiting list"
        }

    }
    async contactForm(@Body() detail: any) {

        if (!detail) throw new BadRequestException({
            success: false,
            message: "details not entered"
        })
        const messageForMe = `Hello Rhydham,

You have received a new message from the Mental Saathi contact form.

Details:

- Name: ${detail.first_name} ${detail.last_name}
- Email: ${detail.email}
- Phone: ${detail.phone_number}
- Subject: ${detail.subject}
- Message:
${detail.message}

Please respond promptly.

Best regards,  
Mental Saathi Notification System`
        const subjectForMe = `New contact form submission from ${detail.first_name} ${detail.last_name} `
        const subjectForUser = `Thank you for contacting Mental Saathi!`
        const messageForUser = `Hi ${detail.first_name} ,

Thank you for reaching out to Mental Saathi. We’ve received your message regarding “[Subject]” and will get back to you as soon as possible.

Here’s a summary of your message:
---
${detail.message}

If you have any additional questions, feel free to reply to this email.

Take care,  
Team Mental Saathi  
"Andar ki baat, ab Saathi ke saath"
 `
        await this.mailService.sendEmail(detail.email, subjectForUser, messageForUser)
        await this.mailService.sendEmail(process.env.EMAIL_USER, subjectForMe, messageForMe)
        return {
            success: true,
            message: "you joined the waiting list"
        }

    }
    async GetInTouchForm(@Body() detail: any) {

        if (!detail) throw new BadRequestException({
            success: false,
            message: "details not entered"
        })
        const messageForMe = `Hey Rhydham,

You just received a new collaboration application via the MentalSaathi form. Here's the full submission:

👤 Name: ${detail.first_name} ${detail.last_name}  
📧 Email: ${detail.email}
📱 Phone: ${detail.phone_number}
🎓 Role:${detail.role}
🏢 Institution/Organization: ${detail.institution}


---

🧠 Next Steps: Review and reply when ready, or tag for follow-up.

– MentalSaathi Auto-Mailer 🤖`
        const subjectForMe = `New Collaboration Application from ${detail.first_name} ${detail.last_name} `
        const subjectForUser = `Your Collaboration Application Has Been Received!`
        const messageForUser = `Hi ${detail.first_name},

Thank you for applying to collaborate with MentalSaathi. Your submission has been received, and we’re excited to learn more about you!

We’ll be reviewing your application and will get back to you within 3-5 business days.

Warm regards,  
The MentalSaathi Team  
Andar ki baat, ab Saathi ke saath
 `
        await this.mailService.sendEmail(detail.email, subjectForUser, messageForUser)
        await this.mailService.sendEmail(process.env.EMAIL_USER, subjectForMe, messageForMe)
        return {
            success: true,
            message: "you joined the waiting list"
        }

    }
}
