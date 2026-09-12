import { Hono } from 'hono';
import { clickhouse } from '../clickhouse.ts';
import { redis } from '../redis.ts';

async function reachable(ping: () => Promise<unknown>): Promise<boolean> {
  try {
    await ping();
    return true;
  } catch {
    return false;
  }
}

export const health = new Hono().get('/', async (c) => {
  const [clickhouseUp, redisUp] = await Promise.all([
    reachable(() => clickhouse.query({ query: 'SELECT 1' })),
    reachable(() => redis.ping()),
  ]);

  const ok = clickhouseUp && redisUp;

  return c.json(
    {
      status: ok ? 'ok' : 'degraded',
      services: { clickhouse: clickhouseUp, redis: redisUp },
      timestamp: new Date().toISOString(),
    },
    ok ? 200 : 503,
  );
});
