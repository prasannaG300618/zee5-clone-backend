import { Module } from '@nestjs/common';
import { OtpService } from './otp.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/schema/user.schema';
import { UserModule } from 'src/user/user.module';
import { newUserSchema } from './schema/otp.schema';

@Module({
  providers: [OtpService],
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: userSchema }]),
    MongooseModule.forFeature([{ name: 'NewUserOtp', schema: newUserSchema }]),
    UserModule,
  ],
  exports: [OtpService],
})
export class OtpModule {}
