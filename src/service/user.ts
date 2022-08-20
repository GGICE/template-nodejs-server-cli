import mongoose from 'mongoose';
import kittySchema from '@/model/user';

const Kitten = mongoose.model('Kitten', kittySchema);

export const addUser = (userName: string) => {
  const silence = new Kitten({ name: userName });
  return silence.save();
};

export const getUser = () => {
  return Kitten.find();
};
