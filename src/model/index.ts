import mongoose from 'mongoose';
import configs from '../config.js';

const { MONGODB } = configs;

export const initModel = () => {
  const db = mongoose.connection;

  mongoose.connect(`mongodb://${MONGODB.host}:${MONGODB.port}/${MONGODB.database}`);
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('mongodb open!');
  });
};
