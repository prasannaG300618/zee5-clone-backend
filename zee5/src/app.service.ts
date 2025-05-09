import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req): object {
    if (!req.user) {
      return {
        message: 'No user found',
        user: false,
      };
    }
    console.log(req.user['name']['emails'][0].verified);
    return {
      message: 'user info from google',
      user: req.user['name']['emails'][0].verified,
    };
  }
}
