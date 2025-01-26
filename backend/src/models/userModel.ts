import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  number: string;
}

const UserSchema: Schema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
    minlength: 10,
  },
});

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
