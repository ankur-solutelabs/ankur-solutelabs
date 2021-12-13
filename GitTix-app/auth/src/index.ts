import mongoose from 'mongoose';

import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  try {
    await mongoose.connect('mongodb+srv://ankur:ankur123@cluster0.7aqsk.mongodb.net/auth?retryWrites=true&w=majority')
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(3030, () => {
    console.log('Listening on port 3030');
  });
};

start();
