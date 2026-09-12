import { serve } from '@hono/node-server';
import { config } from '@task/config';
import { consola } from 'consola';
import { clickhouse } from './clickhouse.ts';
import { api } from './index.ts';
import { redis } from './redis.ts';

try {
  const [ping] = await Promise.all([clickhouse.ping(), redis.connect()]);
  if (!ping.success) throw ping.error;
} catch (error) {
  consola.error('Could not reach ClickHouse and Redis. Is `docker compose up -d` running?');
  consola.error(error);
  process.exit(1);
}

try {
  const result = await clickhouse.query({ query: 'EXISTS TABLE logs', format: 'JSONEachRow' });
  const [row] = await result.json<{ result: 0 | 1 }>();
  if (row?.result !== 1) consola.warn('No `logs` table yet. Run `pnpm db:migrate`.');
} catch (error) {
  consola.warn('Could not check for the `logs` table:', error);
}

const server = serve({ fetch: api.fetch, port: config.api.port }, ({ port }) => {
  consola.ready(`API listening on http://localhost:${port}`);
});

let shuttingDown = false;

async function shutdown(signal: string): Promise<void> {
  if (shuttingDown) return;
  shuttingDown = true;

  consola.info(`${signal} received, closing connections`);
  server.close();
  await Promise.allSettled([clickhouse.close(), redis.close()]);
  process.exit(0);
}

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, () => void shutdown(signal));
}
