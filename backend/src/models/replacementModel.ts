import mongoose, { Model, Schema, Document } from 'mongoose';

export interface IReplacement extends Document {
  _categoryID: mongoose.Schema.Types.ObjectId;
  replacement_name: string;
  device_model: string;
  price: number;
  _orderID: mongoose.Schema.Types.ObjectId;
}

const ReplacementSchema: Schema<IReplacement> = new Schema<IReplacement>({
  _categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  replacement_name: {
    type: String,
    required: true,
  },
  device_model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const ReplacementModel: Model<IReplacement> = mongoose.model(
  'Replacement',
  ReplacementSchema,
);
