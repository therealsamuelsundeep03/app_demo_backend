"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearUserOTP = exports.findUserByPhoneWithOTP = exports.blockUser = exports.updateLastLogin = exports.updateUserOTP = exports.findUserById = exports.findUserByPhone = exports.createUser = void 0;
const user_model_1 = require("../../db/models/user.model");
const createUser = async (data) => {
    return user_model_1.UserModel.create(data);
};
exports.createUser = createUser;
const findUserByPhone = async (phone) => {
    return user_model_1.UserModel.findOne({ phone });
};
exports.findUserByPhone = findUserByPhone;
const findUserById = async (id) => {
    return user_model_1.UserModel.findById(id);
};
exports.findUserById = findUserById;
const updateUserOTP = async (phone, otp) => {
    return user_model_1.UserModel.updateOne({ phone }, { otp });
};
exports.updateUserOTP = updateUserOTP;
const updateLastLogin = async (id) => {
    return user_model_1.UserModel.updateOne({ _id: id }, { lastLogin: new Date() });
};
exports.updateLastLogin = updateLastLogin;
const blockUser = async (id) => {
    return user_model_1.UserModel.updateOne({ _id: id }, { isBlocked: true });
};
exports.blockUser = blockUser;
const findUserByPhoneWithOTP = async (phone) => {
    return user_model_1.UserModel.findOne({ phone }).select("+otp");
};
exports.findUserByPhoneWithOTP = findUserByPhoneWithOTP;
const clearUserOTP = async (id) => {
    return user_model_1.UserModel.updateOne({ _id: id }, { $unset: { otp: "" } });
};
exports.clearUserOTP = clearUserOTP;
