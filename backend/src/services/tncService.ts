import mongoose from 'mongoose';
import { ITnC, TncModel } from '@models/tncModel';

/* TnC Interface definition */
export interface ITncService {
  getTnCs: () => Promise<ITnC[] | null>;
  getTncByID: (id: mongoose.Schema.Types.ObjectId) => Promise<ITnC | null>;
  updateTncByID: (
    id: mongoose.Schema.Types.ObjectId,
    tnc: Partial<ITnC>,
  ) => Promise<ITnC | null>;
  deleteTncByID: (id: mongoose.Schema.Types.ObjectId) => Promise<ITnC | null>;
  createTnC: (tnc: ITnC) => Promise<ITnC | null>;
}

/* Function Declarations */
const getTnCs = async (): Promise<ITnC[] | null> => {
  return await TncModel.find().exec();
};

const getTncByID = async (
  id: mongoose.Schema.Types.ObjectId,
): Promise<ITnC | null> => {
  return TncModel.findById(id).exec();
};

const updateTncByID = (
  id: mongoose.Schema.Types.ObjectId,
  tnc: Partial<ITnC>,
): Promise<ITnC | null> => {
  return TncModel.findByIdAndUpdate(id, tnc).exec();
};

const deleteTncByID = (
  id: mongoose.Schema.Types.ObjectId,
): Promise<ITnC | null> => {
  return TncModel.findByIdAndDelete(id).exec();
};

const createTnC = (tnc: ITnC): Promise<ITnC | null> => {
  return tnc.save();
};

/* Exporting Service */

export const TncService: ITncService = {
  getTnCs: getTnCs,
  getTncByID: getTncByID,
  updateTncByID: updateTncByID,
  deleteTncByID: deleteTncByID,
  createTnC: createTnC,
};
