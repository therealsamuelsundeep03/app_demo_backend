import { UserModel } from "../../infrastructure/db/models/user.model";

export const createUser = async (data: { phone: string }) => {
  return UserModel.create(data);
};

export const findUserByPhone = async (phone: string) => {
  return UserModel.findOne({ phone });
};

export const findUserById = async (id: string) => {
  return UserModel.findById(id);
};

export const updateUserOTP = async (phone: string, otp: number) => {
  return UserModel.updateOne({ phone }, { otp });
};

export const updateLastLogin = async (id: string) => {
  return UserModel.updateOne({ _id: id }, { lastLogin: new Date() });
};

export const blockUser = async (id: string) => {
  return UserModel.updateOne({ _id: id }, { isBlocked: true });
};
