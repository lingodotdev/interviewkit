import { serve } from '@hono/node-server';
import { config } from '@task/config';
import { api } from './index.js';

serve({
  fetch: api.fetch,
  port: config.api.port,
});

console.log(`🚀 API server running on ${config.api.url}`);
