import userModal from '../models/user.js';

export const addUser = (userName: string) => {
  return userModal.insertMany({ name: userName });
};

export const getUser = () => {
  return userModal.find();
};

export const testFun = () => {
  return true;
};
