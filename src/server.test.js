import { describe, it, expect } from 'vitest';
import { server } from './server.js';

describe('Basic test server', () => {
  it('should returns correct value', async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const response = await server.inject({
      method: 'GET',
      url: '/api/posts',
    });
    const parsedBody = JSON.parse(response.body);

    expect(response.statusCode).toStrictEqual(200);
    expect(parsedBody.length).toStrictEqual(48);
  });
});
