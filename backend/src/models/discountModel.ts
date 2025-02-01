import mongoose, { Model, Schema, Document } from 'mongoose';

export interface IDiscount extends Document {
  discount_name: string;
  discount_amount: number;
  discount_expires: Date;
}

const DiscountSchema: Schema<IDiscount> = new Schema({
  discount_name: {
    type: String,
    required: true,
  },
  discount_amount: {
    type: Number,
    required: true,
  },
  discount_expires: {
    type: Date,
  },
});

export const DiscountModel: Model<IDiscount> = mongoose.model<IDiscount>(
  'Discount',
  DiscountSchema,
);
