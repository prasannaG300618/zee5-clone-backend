import { Test, TestingModule } from '@nestjs/testing';
import { OtpTwilioController } from './otp-twilio.controller';

describe('OtpTwilioController', () => {
  let controller: OtpTwilioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtpTwilioController],
    }).compile();

    controller = module.get<OtpTwilioController>(OtpTwilioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
