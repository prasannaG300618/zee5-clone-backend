import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type user = userSchema & Document<Types.ObjectId>;
@Schema()
export class userSchema {
  @Prop()
  age: number;
  @Prop({ required: false })
  phoneNumber: number;
  @Prop({ required: false })
  gender: string;
  @Prop({ default: 'Email not given' })
  email: string;
  @Prop({ required: false })
  otp: number;
  @Prop({ required: false })
  verified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(userSchema);
