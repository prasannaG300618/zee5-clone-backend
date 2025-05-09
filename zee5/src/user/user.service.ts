import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { registerDto } from 'src/register/dto/register.dto';
@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<registerDto>) {}
  async findUser(credential: string): Promise<boolean> {
    const number = parseInt(credential);
    console.log(number);
    console.log(credential);
    let value: any;
    if (typeof number === 'number') {
      value = await this.userModel.findOne({ phoneNumber: credential }).exec();
    } else if (typeof credential == 'string') {
      value = await this.userModel.findOne({ email: credential }).exec();
    }
    // let value = await this.userModel.findOne({$or:[ { phoneNumber:credential as number },{ email: credential as string}] }).exec()
    console.log(value);
    if (!value) {
      return false;
    } else {
      return true;
    }
  }
}
