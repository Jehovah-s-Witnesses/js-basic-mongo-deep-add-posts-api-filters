import posts from './posts.json' with { type: 'json' };
import { connectToMongoose } from '../src/initializers/connectToMongoose.js';
import { MONGO_CONNECTION_STRING } from '../src/constants/db.js';
import { Post } from '../src/db/Post.js';
import mongoose from 'mongoose';

connectToMongoose(MONGO_CONNECTION_STRING)
  .then(() => {
    const creationPromises = posts.map((item) => {
      const post = new Post(item);

      return post.save();
    });

    return Promise.all(creationPromises);
  })
  .then(() => {
    console.log('Successful migrated');

    return mongoose.disconnect();
  });
