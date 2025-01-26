import { IUser, UserModel } from '@models/userModel';

/* User interface definition */
export interface IUserService {
  getAllUsers: () => Promise<IUser[]>;
  getUserByEmail: (email: string) => Promise<IUser | null>;
  deleteUserByEmail: (email: string) => Promise<IUser | null>;
  createUser: (user: IUser) => Promise<IUser>;
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

export const UserService: IUserService = {
  getAllUsers: getAllUsers,
  getUserByEmail: getUserByEmail,
  deleteUserByEmail: deleteUserByEmail,
  createUser: createUser,
};
