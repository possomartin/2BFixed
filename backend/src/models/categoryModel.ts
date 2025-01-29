import mongoose, { Model, Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  category_name: String;
}

const CategorySchema: Schema<ICategory> = new Schema<ICategory>({
  category_name: {
    type: String,
    required: true,
  },
});

export const CategoryModel: Model<ICategory> = mongoose.model<ICategory>(
  'Category',
  CategorySchema,
);
