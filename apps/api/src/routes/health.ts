import { Hono } from 'hono';

export const health = new Hono()
  .get('/', (c) => {
    return c.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
    });
  });
