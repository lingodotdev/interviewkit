# InterviewKit

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Monorepo** | [pnpm](https://pnpm.io/) workspaces, [Turborepo](https://turborepo.com/repo) |
| **Backend** | [Hono](https://hono.dev/), [MongoDB](https://www.mongodb.com/docs/drivers/node/current/), [Redis](https://redis.io/docs/) |
| **CLI** | [Commander.js](https://github.com/tj/commander.js), [Consola](https://github.com/unjs/consola), [tsx](https://tsx.is/) |
| **Frontend** | [React](https://react.dev/), [Vite](https://vite.dev/), [TanStack Router](https://tanstack.com/router) & [Query](https://tanstack.com/query), [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) across the board |

## Architecture

```
interviewkit/
├── apps/
│   ├── api/        → Hono backend       (port 3001)
│   ├── cli/        → Commander.js CLI
│   └── web/        → React + Vite app   (port 3000)
├── packages/
│   ├── config/     → Shared configuration (ports, DB URIs)
│   └── plugin/     → File format plugins (JSON, etc.)
├── docker-compose.yml   → MongoDB + Redis
└── turbo.json           → Build orchestration
```

**Turborepo** runs tasks (dev, build, lint) across all apps/packages in parallel, respecting dependency order. `pnpm dev` starts everything at once.

**pnpm workspaces** lets packages reference each other via `workspace:*` — e.g. the CLI imports `@task/config` and `@task/plugin` directly.

## Quick Start

```bash
# 1. Start MongoDB and Redis
docker compose up -d

# 2. Install dependencies
pnpm install

# 3. Start all services (API + Web) with hot reload
pnpm dev

# 4. Run CLI (in a separate terminal)
cd apps/cli
pnpm cli
pnpm cli health
```

`pnpm dev` uses Turbo's terminal UI — switch between process outputs with the interactive interface.

```bash
# Stop services
docker compose down

# Stop and remove data
docker compose down -v
```

## Packages

### `@task/config`

Shared configuration used across all apps:

```typescript
import { config } from '@task/config';

config.api.port    // 3001
config.api.url     // 'http://localhost:3001'
config.web.port    // 3000
config.db.mongodb  // { uri, dbName }
config.db.redis    // { url, port }
```

### `@task/plugin`

Provides the `Plugin` interface and `definePlugin` helper for building file format plugins. Each locale is stored as a separate file with flat key-value pairs:

```
data/
├── en.json    → { "title": "My App", "greeting": "Hello!" }
└── es.json    → { "title": "Mi App", "greeting": "¡Hola!" }
```

```typescript
import { definePlugin, type Plugin } from '@task/plugin';

// Plugin interface:
// {
//   extension: string
//   serialize:   (data: Record<string, string>) => string
//   deserialize: (raw: string) => Record<string, string>
// }
```

## API

The API uses [Hono](https://hono.dev/) with a type-safe RPC client. The CLI already demonstrates this pattern:

```typescript
import { hc } from 'hono/client';
import type { ApiType } from '@task/api';
import { config } from '@task/config';

const client = hc<ApiType>(config.api.url);
const res = await client.health.$get();
const data = await res.json();
```

## Database Connections

### MongoDB

```typescript
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://admin:password@localhost:27017');
await client.connect();
const db = client.db('localize');
```

### Redis

```typescript
import { createClient } from 'redis';

const redis = createClient({ url: 'redis://localhost:6379' });
await redis.connect();
```

## Reference

### Core Tools
- [pnpm Workspaces](https://pnpm.io/workspaces) — monorepo workspace management
- [Turborepo Docs](https://turborepo.com/repo/docs) — build system for monorepos
- [Docker Compose](https://docs.docker.com/compose/) — container orchestration

### Backend
- [Hono](https://hono.dev/) — web framework
- [Hono RPC Client](https://hono.dev/docs/guides/rpc) — type-safe API client
- [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/) — database driver
- [Redis for Node.js](https://github.com/redis/node-redis) — Redis client
  - [Pub/Sub](https://redis.io/docs/latest/develop/interact/pubsub/) — publish/subscribe messaging
  - [Data Types](https://redis.io/docs/latest/develop/data-types/) — strings, lists, sets, hashes

### CLI
- [Commander.js](https://github.com/tj/commander.js) — CLI framework
- [Consola](https://github.com/unjs/consola) — console logger
- [p-limit](https://github.com/sindresorhus/p-limit) — concurrency control

### Frontend
- [Vite](https://vite.dev/) — build tool
- [TanStack Router](https://tanstack.com/router) — file-based routing
- [TanStack Query](https://tanstack.com/query) — async state management
- [shadcn/ui](https://ui.shadcn.com/) — UI components
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS
- [Lucide Icons](https://lucide.dev/) — icon library

### Real-time & Streaming
- [Server-Sent Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) — server-to-client streaming
- [EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) — SSE client
- [WebSockets (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) — full-duplex communication
- [ws Library](https://github.com/websockets/ws) — Node.js WebSocket library

### Development
- [Claude Code](https://github.com/anthropics/claude-code) — AI-powered coding assistant
- [TypeScript](https://www.typescriptlang.org/) — typed JavaScript
- [tsx](https://tsx.is/) — run TypeScript without compilation
