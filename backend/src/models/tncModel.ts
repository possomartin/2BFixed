import mongoose, { Document, Schema, Model } from 'mongoose';

/* Schema definition */

export interface ITnC extends Document {
  _userID: mongoose.Schema.Types.ObjectId;
  creation_date: Date;
  expiration_date: Date;
  accepted: Boolean;
}

const TncSchema: Schema = new Schema({
  _userID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  creation_date: {
    type: Date,
    required: true,
  },
  expiration_date: {
    type: Date,
    required: true,
  },
  accepted: {
    type: Boolean,
    required: true,
  },
});

export const TncModel: Model<ITnC> = mongoose.model<ITnC>('TnC', TncSchema);
