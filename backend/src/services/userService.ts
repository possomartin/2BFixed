import { IUser, User } from '@models/userModel';

/* User interface definition */
export interface IUserService {
  getAllUsers: () => Promise<IUser[]>;
  getUserByEmail: (email: string) => Promise<IUser[]>;
  deleteUserByEmail: (email: string) => Promise<IUser | null>;
}

/* Get All Users */
const getAllUsers = async (): Promise<IUser[]> => {
  return User.find().exec();
};

/* Get User by Email */
const getUserByEmail = async (email: string): Promise<IUser[]> => {
  return User.find({ email: email }).exec();
};

/* Delete User by email */
const deleteUserByEmail = async (email: string): Promise<IUser | null> => {
  return User.findOneAndDelete({ email: email }).exec();
};

export const UserService: IUserService = {
  getAllUsers: getAllUsers,
  getUserByEmail: getUserByEmail,
  deleteUserByEmail: deleteUserByEmail,
};
