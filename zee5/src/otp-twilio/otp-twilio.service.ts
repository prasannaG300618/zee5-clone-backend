import { Injectable } from '@nestjs/common';
const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

@Injectable()
export class OtpTwilioService {
  createOtp(number: number): void {
    client.verify.v2
      .services('VA8dd1605a73158b282379cb117729049d')
      .verifications.create({ to: `+91${number}`, channel: 'sms' })
      .then((verification) => {
        console.log(verification);
        return verification.sid;
      });
  }

  validOtp(code: string, number: number): void {
    client.verify.v2
      .services('VA8dd1605a73158b282379cb117729049d')
      .verificationChecks.create({ to: `+91${number}`, code: code })
      .then((verification_check) => console.log(verification_check.status));
  }
}
