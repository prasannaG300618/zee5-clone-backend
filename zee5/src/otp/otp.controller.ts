import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { OtpService } from './otp.service';
import { UserService } from 'src/user/user.service';

@Controller('otp')
export class OtpController {
  constructor(
    private readonly otpService: OtpService,
    private readonly userService: UserService,
  ) {}
  @Post()
  log(@Body('email') email) {
    return this.otpService.generateOTP(email);
  }

  @Post('validate')
  async isValid(
    @Body() data: { email: string; code: number },
  ): Promise<string> {
    console.log(data.code);
    return this.otpService.isValidate(data.email, data.code);
  }
}
