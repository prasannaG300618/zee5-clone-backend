import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from './register/register.controller';
import { RegisterModule } from './register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OtpController } from './otp/otp.controller';
import { OtpModule } from './otp/otp.module';
import { OtpTwilioController } from './otp-twilio/otp-twilio.controller';
import { OtpTwilioModule } from './otp-twilio/otp-twilio.module';
import { OtpTwilioService } from './otp-twilio/otp-twilio.service';
import { GoogleAuthStrategy } from './register/register.google.strategy';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/zee5'),
    RegisterModule,
    OtpModule,
    OtpTwilioModule,
    UserModule,
  ],
  controllers: [
    AppController,
    RegisterController,
    OtpController,
    OtpTwilioController,
  ],
  providers: [AppService, OtpTwilioService, GoogleAuthStrategy],
})
export class AppModule {}
