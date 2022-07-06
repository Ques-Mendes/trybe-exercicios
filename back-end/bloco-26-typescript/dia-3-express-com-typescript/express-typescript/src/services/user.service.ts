import IUser from "../interfaces/user.iterface";
import userModel from "../models/user.model";

const getUsers = (): Promise<IUser[]> => {
  return userModel.getAll();
}

export default {
  getUsers,
};