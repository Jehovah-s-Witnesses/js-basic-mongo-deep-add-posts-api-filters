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
      querystring: {
        type: 'object',
        properties: {
          limit: {
            type: 'integer',
            minimum: 1,
            maximum: 10,
          },
          offset: {
            type: 'integer',
            minimum: 0,
          },
        },
        required: ['limit', 'offset'],
      },
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
    const { limit, offset } = request.query;

    const posts = await Post.find().skip(offset).limit(limit).lean();

    reply.send(posts);
  },
);
