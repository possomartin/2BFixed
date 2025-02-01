import mongoose from 'mongoose';
import { IReplacement, ReplacementModel } from '@models/replacementModel';

/* Functcion declaratrions */
export interface IReplacementService {
  getReplacements: () => Promise<IReplacement[] | null>;
  getReplacementsByCategory: (
    _categoryID: mongoose.Schema.Types.ObjectId,
  ) => Promise<IReplacement[] | null>;
  getReplacementByID: (
    id: mongoose.Schema.Types.ObjectId,
  ) => Promise<IReplacement | null>;
  updateReplacement: (
    id: mongoose.Schema.Types.ObjectId,
    replacement: Partial<IReplacement>,
  ) => Promise<IReplacement | null>;
  deleteReplacement: (
    id: mongoose.Schema.Types.ObjectId,
  ) => Promise<IReplacement | null>;
  createReplacement: (
    replacement: IReplacement,
  ) => Promise<IReplacement | null>;
}

const getReplacements = async (): Promise<IReplacement[] | null> => {
  return ReplacementModel.find().exec();
};

const getReplacementsByCategory = async (
  categoryID: mongoose.Schema.Types.ObjectId,
): Promise<IReplacement[] | null> => {
  return ReplacementModel.find({ _categoryID: categoryID }).exec();
};

const getReplacementByID = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<IReplacement | null> => {
  return ReplacementModel.findById(id).exec();
};

const updateReplacement = async (
  id: mongoose.Schema.Types.ObjectId,
  replacement: Partial<IReplacement>,
): Promise<IReplacement | null> => {
  return ReplacementModel.findByIdAndUpdate(id, replacement).exec();
};

const deleteReplacement = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<IReplacement | null> => {
  return ReplacementModel.findByIdAndDelete(id).exec();
};

const createReplacement = async (
  replacement: IReplacement,
): Promise<IReplacement | null> => {
  return replacement.save();
};

export const ReplacementService: IReplacementService = {
  getReplacements,
  getReplacementsByCategory,
  getReplacementByID,
  updateReplacement,
  deleteReplacement,
  createReplacement,
};
