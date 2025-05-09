import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OtpType = NewUserOtp & Document<Types.ObjectId>;
@Schema({ collection: 'newUserOtp' })
export class NewUserOtp {
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  code: number;
}

export const newUserSchema = SchemaFactory.createForClass(NewUserOtp);
