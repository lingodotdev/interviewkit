import { Command } from 'commander';
import { hc } from 'hono/client';
import type { ApiType } from '@task/api';
import { config } from '@task/config';

export default new Command('health')
  .description('Check API health status')
  .action(async () => {
    try {
      const client = hc<ApiType>(config.api.url);
      const response = await client.health.$get();

      if (!response.ok) {
        console.error('❌ API is not responding correctly');
        console.error(`Status: ${response.status}`);
        process.exit(1);
      }

      const data = await response.json();
      console.log('✅ API is live!');
      console.log(`Status: ${data.status}`);
      console.log(`Timestamp: ${data.timestamp}`);
    } catch (error) {
      console.error('❌ Failed to connect to API');
      console.error(error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });
