import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any{
    return {
      email:{
        user:process.env.EMAIL_USER,
        password:process.env.EMAIL_PASSWORD
      }
    }
  }
}
