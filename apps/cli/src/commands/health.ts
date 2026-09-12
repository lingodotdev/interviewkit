import type { ApiType } from '@task/api';
import { config } from '@task/config';
import { Command } from 'commander';
import { consola } from 'consola';
import { hc } from 'hono/client';

const client = hc<ApiType>(config.api.url);

export default new Command('health')
  .description('Check that the API, ClickHouse and Redis are reachable')
  .action(async () => {
    const response = await client.health.$get().catch(() => {
      consola.error(`No API at ${config.api.url}. Is \`pnpm dev\` running?`);
      process.exit(1);
    });

    const { status, services, timestamp } = await response.json();

    for (const [name, up] of Object.entries(services)) {
      if (up) consola.success(`${name} reachable`);
      else consola.fail(`${name} unreachable`);
    }

    if (status === 'ok') consola.success(`API healthy at ${timestamp}`);
    else consola.warn(`API degraded at ${timestamp}`);

    process.exitCode = status === 'ok' ? 0 : 1;
  });
