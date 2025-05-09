import { Test, TestingModule } from '@nestjs/testing';
import { OtpTwilioService } from './otp-twilio.service';

describe('OtpTwilioService', () => {
  let service: OtpTwilioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtpTwilioService],
    }).compile();

    service = module.get<OtpTwilioService>(OtpTwilioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
