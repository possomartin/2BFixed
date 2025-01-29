import mongoose from 'mongoose';
import { DiscountModel, IDiscount } from '@models/discountModel';

/* Discount Service Definition */

export interface IDiscountService {
  getDiscounts: () => Promise<IDiscount[] | null>;
  getDiscountByID: (
    id: mongoose.Schema.Types.ObjectId,
  ) => Promise<IDiscount | null>;
  getDiscountByName: (name: string) => Promise<IDiscount | null>;
  deleteDiscount: (
    id: mongoose.Schema.Types.ObjectId,
  ) => Promise<IDiscount | null>;
  updateDiscount: (
    id: mongoose.Schema.Types.ObjectId,
    discount: Partial<IDiscount>,
  ) => Promise<IDiscount | null>;
  createDiscount: (discount: IDiscount) => Promise<IDiscount | null>;
}

/* Function Declarations */

const getDiscounts = async (): Promise<IDiscount[] | null> => {
  return DiscountModel.find().exec();
};

const getDiscountByID = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<IDiscount | null> => {
  return DiscountModel.findById(id).exec();
};

const getDiscountByName = async (name: string): Promise<IDiscount | null> => {
  return DiscountModel.findOne({ discount_name: name }).exec();
};

const deleteDiscount = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<IDiscount | null> => {
  return DiscountModel.findByIdAndDelete(id).exec();
};

const updateDiscount = async (
  id: mongoose.Schema.Types.ObjectId,
  discount: Partial<IDiscount>,
) => {
  return DiscountModel.findByIdAndUpdate(id, discount).exec();
};

const createDiscount = async (
  discount: IDiscount,
): Promise<IDiscount | null> => {
  return discount.save();
};

export const DiscountServce: IDiscountService = {
  getDiscounts: getDiscounts,
  getDiscountByID: getDiscountByID,
  getDiscountByName: getDiscountByName,
  updateDiscount: updateDiscount,
  deleteDiscount: deleteDiscount,
  createDiscount: createDiscount,
};
