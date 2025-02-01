import mongoose, { Model, Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  _userID: mongoose.Schema.Types.ObjectId;
  order_date: Date;
  service_fee: number;
  _discountID: mongoose.Schema.Types.ObjectId;
  _replacementID: mongoose.Schema.Types.ObjectId;
  tip: number;
  total: number;
}

const OrderSchema: Schema<IOrder> = new Schema<IOrder>({
  _userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  order_date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  service_fee: {
    type: Number,
    required: true,
  },
  _replacementID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  _discountID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  tip: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
});

export const OrderModel: Model<IOrder> = mongoose.model<IOrder>(
  'Order',
  OrderSchema,
);
