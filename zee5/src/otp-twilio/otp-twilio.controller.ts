import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { OtpTwilioService } from './otp-twilio.service';
import { otp } from 'src/register/dto/otp.dto';
@Controller('otp-twilio')
export class OtpTwilioController {
  constructor(private readonly otpTwilioService: OtpTwilioService) {}
  @Get()
  sendOtp(@Query('number') number: string): any {
    console.log(number);
    return this.otpTwilioService.createOtp(parseInt(number));
  }

  @Post()
  validateOtp(@Body() data: otp): any {
    console.log(data.otp);
    console.log(data.phoneNumber);
    return this.otpTwilioService.validOtp(data['otp'], data['phoneNumber']);
  }
}
