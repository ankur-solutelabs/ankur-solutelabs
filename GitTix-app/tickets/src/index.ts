import mongoose from 'mongoose';

import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  if (!process.env.MONGO_URL) {
    throw new Error('mongo url must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(3030, () => {
    console.log('Listening on port 3030');
  });
};

start();
