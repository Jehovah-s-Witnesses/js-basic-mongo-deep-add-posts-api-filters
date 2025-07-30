import { describe, it, expect } from 'vitest';
import { server } from './server.js';

describe('Basic test server', () => {
  it.each([
    ['/api/posts', 400, true, 0],
    ['/api/posts?limit=0', 400, true, 0],
    ['/api/posts?offset=0', 400, true, 0],
    ['/api/posts?offset=0&limit=11', 400, true, 0],
    ['/api/posts?offset=0&limit=1', 200, false, 1],
    ['/api/posts?offset=0&limit=10', 200, false, 10],
    ['/api/posts?limit=1&offset=49', 200, false, 0],
  ])(
    `request on url %s should have status code %s with length %s`,
    async (url, statusCode, isError, length) => {
      const response = await server.inject({
        method: 'GET',
        url,
      });
      const parsedBody = JSON.parse(response.body);

      expect(response.statusCode).toStrictEqual(statusCode);
      if (!isError) {
        expect(parsedBody.items.length).toStrictEqual(length);
      }
    },
  );
});
