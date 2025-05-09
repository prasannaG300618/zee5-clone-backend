import { Injectable } from '@nestjs/common';
import { registerDto } from './dto/register.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RegisterService {
  constructor(@InjectModel('user') private userModel: Model<registerDto>) {}
  async register(data: registerDto) {
    return await this.userModel.create(data);
  }
}
