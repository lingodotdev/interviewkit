export const config = {
  api: {
    port: 3001,
    url: 'http://localhost:3001',
  },
  web: {
    port: 3000,
    url: 'http://localhost:3000',
  },
  db: {
    clickhouse: {
      url: 'http://localhost:8123',
      database: 'localize',
      username: 'task',
      password: 'password',
    },
    redis: {
      url: 'redis://localhost:6379',
    },
  },
} as const;
