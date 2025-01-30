import mongoose from 'mongoose';
import { IOrder, OrderModel } from '@models/orderModel';

/* Service Definition */

export interface IOrderService {
  getOrders: () => Promise<IOrder[] | null>;
  getOrdersByUser: (
    _userdID: mongoose.Schema.Types.ObjectId,
  ) => Promise<IOrder[] | null>;
  getOrdersByDate: (order_date: Date) => Promise<IOrder[] | null>;
  getOrderByID: (id: mongoose.Schema.Types.ObjectId) => Promise<IOrder | null>;

  updateOrder: (
    id: mongoose.Schema.Types.ObjectId,
    order: Partial<IOrder>,
  ) => Promise<IOrder | null>;
  deleteOrder: (id: mongoose.Schema.Types.ObjectId) => Promise<IOrder | null>;
  createOrder: (oder: IOrder) => Promise<IOrder | null>;
}

/* Function Declarations */

const getOrders = async (): Promise<IOrder[] | null> => {
  return OrderModel.find().exec();
};

const getOrdersByUser = async (
  _userID: mongoose.Schema.Types.ObjectId,
): Promise<IOrder[] | null> => {
  return OrderModel.find({ _userID: _userID }).exec();
};

const getOrdersByDate = async (order_date: Date): Promise<IOrder[] | null> => {
  return OrderModel.find({ order_date: order_date }).exec();
};

const getOrderByID = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<IOrder | null> => {
  return OrderModel.findById(id).exec();
};

const updateOrder = async (
  id: mongoose.Schema.Types.ObjectId,
  order: Partial<IOrder>,
): Promise<IOrder | null> => {
  return OrderModel.findByIdAndUpdate(id, order).exec();
};

const deleteOrder = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<IOrder | null> => {
  return OrderModel.findByIdAndDelete(id).exec();
};

const createOrder = async (order: IOrder): Promise<IOrder | null> => {
  return order.save();
};

/* Exporting Service */
export const OrderService: IOrderService = {
  getOrders: getOrders,
  getOrdersByUser: getOrdersByUser,
  getOrdersByDate: getOrdersByDate,
  getOrderByID: getOrderByID,
  updateOrder: updateOrder,
  deleteOrder: deleteOrder,
  createOrder: createOrder,
};
