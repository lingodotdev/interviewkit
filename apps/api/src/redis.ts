import { config } from '@task/config';
import { consola } from 'consola';
import { createClient } from 'redis';

export const redis = createClient({ url: config.db.redis.url });

redis.on('error', (error: unknown) => consola.error('Redis connection error:', error));

export async function createSubscriber() {
  const subscriber = redis.duplicate();
  subscriber.on('error', (error: unknown) => consola.error('Redis subscriber error:', error));
  await subscriber.connect();
  return subscriber;
}
