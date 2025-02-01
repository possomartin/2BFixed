import mongoose from 'mongoose';
import { IPayment, PaymentModel } from '@models/paymentModel';

/* Service Definition */
export interface IPaymentService {
  getPayments: () => Promise<IPayment[] | null>;
  getPaymentsByDate: (payment_date: Date) => Promise<IPayment[] | null>;
  getPaymentsByOrder: (
    orderID: mongoose.Schema.Types.ObjectId,
  ) => Promise<IPayment[] | null>;
  getPaymentByID: (
    id: mongoose.Schema.Types.ObjectId,
  ) => Promise<IPayment | null>;
  getPaymentByTransactionID: (
    transaction_id: string,
  ) => Promise<IPayment | null>;

  updatePayment: (
    id: mongoose.Schema.Types.ObjectId,
    payment: Partial<IPayment>,
  ) => Promise<IPayment | null>;
  deletePayment: (
    id: mongoose.Schema.Types.ObjectId,
  ) => Promise<IPayment | null>;
  createPayment: (payment: IPayment) => Promise<IPayment | null>;
}

/* Function Declaration */

const getPayments = async (): Promise<IPayment[] | null> => {
  return PaymentModel.find().exec();
};

const getPaymentsByDate = async (
  payment_date: Date,
): Promise<IPayment[] | null> => {
  return PaymentModel.find({
    payment_date: { $gte: new Date(payment_date), $lte: new Date() },
  }).exec();
};

const getPaymentsByOrder = async (
  orderID: mongoose.Schema.Types.ObjectId,
): Promise<IPayment[] | null> => {
  return PaymentModel.find({ _orderID: orderID }).exec();
};

const getPaymentByID = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<IPayment | null> => {
  return PaymentModel.findById(id).exec();
};

const getPaymentByTransactionID = async (
  transaction_id: string,
): Promise<IPayment | null> => {
  return PaymentModel.findOne({ transaction_id: transaction_id }).exec();
};

const updatePayment = async (
  id: mongoose.Schema.Types.ObjectId,
  payment: Partial<IPayment>,
): Promise<IPayment | null> => {
  return PaymentModel.findByIdAndUpdate(id, payment).exec();
};

const deletePayment = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<IPayment | null> => {
  return PaymentModel.findByIdAndDelete(id).exec();
};

const createPayment = async (payment: IPayment): Promise<IPayment | null> => {
  return payment.save();
};

export const PaymentService: IPaymentService = {
  getPayments,
  getPaymentsByDate,
  getPaymentsByOrder,
  getPaymentByID,
  getPaymentByTransactionID,
  updatePayment,
  deletePayment,
  createPayment,
};
