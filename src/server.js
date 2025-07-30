import { initializeServer } from './initializers/initializeServer.js';
import { Post } from './db/Post.js';

export const server = await initializeServer();

server.route({
  url: '/',
  handler() {
    return 'hello';
  },
  method: 'GET',
});

server.get(
  '/api/posts',
  {
    schema: {
      tags: ['Post'],
      response: {
        200: {
          type: 'array',
          items: {
            $id: 'Post',
            type: 'object',
            properties: {
              _id: {
                type: 'string',
              },
              text: {
                type: 'string',
              },
              author: {
                type: 'string',
              },
              rating: {
                type: 'number',
              },
            },
          },
        },
      },
    },
  },
  async (request, reply) => {
    const posts = await Post.find().lean();

    reply.send(posts);
  },
);
