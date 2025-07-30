import { model, Types } from 'mongoose';

export const Post = model('Post', {
  _id: {
    type: Types.ObjectId,
    default: () => {
      return new Types.ObjectId();
    },
  },
  text: {
    type: String,
  },
  rating: {
    type: Number,
  },
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
});
