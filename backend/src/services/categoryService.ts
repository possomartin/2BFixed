import mongoose from 'mongoose';
import { ICategory, CategoryModel } from '@models/categoryModel';

/* Category Service Definiton */

export interface ICategoryService {
  getCategories: () => Promise<ICategory[] | null>;
  getCategoryByName: (name: string) => Promise<ICategory | null>;
  getCategoryByID: (
    id: mongoose.Schema.Types.ObjectId,
  ) => Promise<ICategory | null>;
  updateCategory: (
    id: mongoose.Schema.Types.ObjectId,
    category: Partial<ICategory>,
  ) => Promise<ICategory | null>;
  deleteCategory: (
    id: mongoose.Schema.Types.ObjectId,
  ) => Promise<ICategory | null>;
  createCategory: (category: ICategory) => Promise<ICategory | null>;
}

/* Function Declarations */

const getCategories = async (): Promise<ICategory[] | null> => {
  return CategoryModel.find().exec();
};

const getCategoryByName = async (name: string): Promise<ICategory | null> => {
  return CategoryModel.findOne({ category_name: name }).exec();
};

const getCategoryByID = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<ICategory | null> => {
  return CategoryModel.findById(id).exec();
};

const updateCategory = async (
  id: mongoose.Schema.Types.ObjectId,
  category: Partial<ICategory>,
): Promise<ICategory | null> => {
  return CategoryModel.findByIdAndUpdate(id, category).exec();
};

const deleteCategory = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<ICategory | null> => {
  return CategoryModel.findByIdAndDelete(id).exec();
};

const createCategory = async (
  category: ICategory,
): Promise<ICategory | null> => {
  return category.save();
};

export const CategoryService: ICategoryService = {
  getCategories: getCategories,
  getCategoryByID: getCategoryByID,
  getCategoryByName: getCategoryByName,
  updateCategory: updateCategory,
  deleteCategory: deleteCategory,
  createCategory: createCategory,
};
