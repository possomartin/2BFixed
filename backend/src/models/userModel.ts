import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  number: string;
  is_verified: boolean;
  created_at: Date;
  accepted_terms_at: Date;
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
  is_verified: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  accepted_terms_at: {
    type: Date,
  },
});

export const UserModel: Model<IUser> = mongoose.model<IUser>(
  'User',
  UserSchema,
);
