import { Hono } from 'hono';
import { health } from './routes/health.js';
import { cors } from 'hono/cors';

const api = new Hono()
  .use(cors())
  .route('/health', health)

export { api };
export type ApiType = typeof api;
