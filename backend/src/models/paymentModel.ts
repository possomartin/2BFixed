import mongoose, { Model, Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  payment_date: Date;
  payment_amount: number;
  payment_type: string;
  transaction_id: string;
  _orderID: mongoose.Schema.Types.ObjectId;
}

const PaymentSchema: Schema<IPayment> = new Schema<IPayment>({
  payment_date: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  payment_amount: {
    type: Number,
    required: true,
  },
  payment_type: {
    type: String,
    required: true,
  },
  transaction_id: {
    type: String,
    required: true,
  },
  _orderID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export const PaymentModel: Model<IPayment> = mongoose.model<IPayment>(
  'Payment',
  PaymentSchema,
);
