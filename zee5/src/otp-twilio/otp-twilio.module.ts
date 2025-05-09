import { Module } from '@nestjs/common';
import { OtpTwilioService } from './otp-twilio.service';

@Module({
  providers: [OtpTwilioService],
})
export class OtpTwilioModule {}
