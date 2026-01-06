# Redis & MongoDB Docker Setup

## Start / Stop

```bash
# Start
docker compose up -d

# Stop
docker compose down

# Stop + remove data
docker compose down -v
```

## Cloudflare Worker

```bash
cd apps/web
pnpm install
pnpm dev
```

## Connect from TypeScript

### MongoDB

```typescript
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://admin:password@localhost:27017');
await client.connect();

```

### Redis

```typescript
import { createClient } from 'redis';

const redis = createClient({
  url: 'redis://localhost:6379'
});
await redis.connect();
```
