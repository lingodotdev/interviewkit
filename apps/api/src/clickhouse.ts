import { createClient } from '@clickhouse/client';
import { config } from '@task/config';

export const clickhouse = createClient({
  url: config.db.clickhouse.url,
  database: config.db.clickhouse.database,
  username: config.db.clickhouse.username,
  password: config.db.clickhouse.password,
});
