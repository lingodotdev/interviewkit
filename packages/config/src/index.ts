export const config = {
  api: {
    port: 3001,
    url: 'http://localhost:3001',
  },
  web: {
    port: 3000,
  },
  db: {
    mongodb: {
      uri: 'mongodb://admin:password@localhost:27017',
      dbName: 'localize',
    },
    redis: {
      url: 'redis://localhost:6379',
      port: 6379,
    },
  },
} as const;
