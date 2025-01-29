import { IUser, UserModel } from '@models/userModel';
import mongoose from 'mongoose';

/* User interface definition */
export interface IUserService {
  getAllUsers: () => Promise<IUser[]>;
  getUserByEmail: (email: string) => Promise<IUser | null>;
  deleteUserByEmail: (email: string) => Promise<IUser | null>;
  createUser: (user: IUser) => Promise<IUser>;
  updateUser: (
    _userID: mongoose.Types.ObjectId,
    content: Partial<IUser>,
  ) => Promise<IUser | null>;
}

/* Get All Users */
const getAllUsers = async (): Promise<IUser[]> => {
  return UserModel.find().exec();
};

/* Get User by Email */
const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return UserModel.findOne({ email: email }).exec();
};

/* Delete User by email */
const deleteUserByEmail = async (email: string): Promise<IUser | null> => {
  return UserModel.findOneAndDelete({ email: email }).exec();
};

const createUser = async (user: IUser) => {
  return user.save();
};

/* Update user by ID */
const updateUser = async (
  _userID: mongoose.Types.ObjectId,
  content: Partial<IUser>,
): Promise<IUser | null> => {
  return UserModel.findByIdAndUpdate(_userID, content).exec();
};

export const UserService: IUserService = {
  getAllUsers: getAllUsers,
  getUserByEmail: getUserByEmail,
  deleteUserByEmail: deleteUserByEmail,
  createUser: createUser,
  updateUser: updateUser,
};
