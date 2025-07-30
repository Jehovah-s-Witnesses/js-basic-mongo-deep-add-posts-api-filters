import { beforeAll, afterAll } from 'vitest';

import { connectToMongoose } from '../src/initializers/connectToMongoose.js';
import { MONGO_CONNECTION_STRING } from '../src/constants/db.js';
import mongoose from 'mongoose';

beforeAll(async () => {
  await connectToMongoose(MONGO_CONNECTION_STRING);
  console.log('Test mongo connected');
});

afterAll(async () => {
  await mongoose.disconnect();
  console.log('Test mongo disconnected');
});
