import { config } from '@task/config';
import { consola } from 'consola';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { health } from './routes/health.ts';

const api = new Hono()
  .use(logger((message, ...rest) => consola.log(message, ...rest)))
  .use(cors({ origin: config.web.url }))
  .notFound((c) => c.json({ error: 'Not Found' }, 404))
  .onError((error, c) => {
    consola.error(error);
    return c.json({ error: 'Internal Server Error' }, 500);
  })
  .route('/health', health);

export { api };
export type ApiType = typeof api;
