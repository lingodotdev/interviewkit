# InterviewKit

A modern full-stack monorepo project showcasing best practices in TypeScript development, featuring API services, CLI tools, and web applications.

## Quick Start

### Start Services

```bash
# Start MongoDB and Redis
docker compose up -d

# Stop services
docker compose down

# Stop and remove data
docker compose down -v
```

### Install Dependencies

```bash
pnpm install
```

### Development

```bash
# Start web application
cd apps/web
pnpm dev

# Start API server
cd apps/api
pnpm dev

# Run CLI
cd apps/cli
pnpm start
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

## Materials

### Development Environment & Tools
- **[Claude Code](https://github.com/anthropics/claude-code)** - AI-powered coding assistant
- **[.mcp.json](https://modelcontextprotocol.io/)** - Model Context Protocol configuration
- **[CLAUDE.md](https://github.com/anthropics/claude-code)** - Project-specific Claude instructions

### Infrastructure & Deployment
- **[Docker](https://docs.docker.com/)** - Containerization platform
- **[Docker Compose](https://docs.docker.com/compose/)** - Multi-container orchestration

### Package Management & Build
- **[PNPM](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[PNPM Workspaces](https://pnpm.io/workspaces)** - Monorepo workspace management
- **[Turbo](https://turbo.build/repo)** - High-performance build system for monorepos

### Backend
- **[Hono](https://hono.dev/)** - Ultrafast web framework for the Edge
- **[Nodemon](https://nodemon.io/)** - Hot reload for Node.js development
- **[MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/)** - Official MongoDB driver for Node.js
- **[node-redis](https://github.com/redis/node-redis)** - Redis client for Node.js

### Runtime & Language
- **[TSX](https://tsx.is/)** - TypeScript execute - Run TypeScript & ESM files without compilation
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript superset

### CLI Development
- **[Commander.js](https://github.com/tj/commander.js)** - Complete solution for node.js command-line interfaces
- **[Consola](https://github.com/unjs/consola)** - Elegant console logger for Node.js and Browser

### Utilities
- **[p-limit](https://github.com/sindresorhus/p-limit)** - Run multiple promise-returning & async functions with limited concurrency
- **[P-* Libraries](https://github.com/sindresorhus?tab=repositories&q=p-&type=&language=&sort=stargazers)** - Promise utility collection by Sindre Sorhus

### Frontend
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[TanStack Router](https://tanstack.com/router)** - Modern and scalable routing for React applications
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components built with Radix UI and Tailwind CSS
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Motion](https://motion.dev/)** - Production-ready animation library for React (formerly Framer Motion)

### Async Patterns & Streaming
- **[Async Iterators (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)** - Asynchronous iteration protocol
- **[Async Generators (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)** - Functions that return async iterables
- **[JavaScript Generators (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)** - Generator functions and iteration
- **[Node.js Streams](https://nodejs.org/api/stream.html)** - Official Node.js streaming API documentation
  - **[Stream Consumers](https://nodejs.org/api/webstreams.html#stream-consumers)** - Working with streams
  - **[Pipeline](https://nodejs.org/api/stream.html#streampipelinesource-transforms-destination-callback)** - Piping streams together
- **[Web Streams API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)** - Browser streaming standard
  - **[ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)** - Reading data streams
  - **[WritableStream](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream)** - Writing data streams
  - **[TransformStream](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream)** - Transforming data in streams
- **[Server-Sent Events (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)** - One-way real-time server-to-client communication
  - **[EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)** - Client-side SSE interface
- **[WebSockets (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)** - Full-duplex real-time communication
  - **[WebSocket Client API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)** - Browser WebSocket interface
  - **[ws Library](https://github.com/websockets/ws)** - Node.js WebSocket library

### Books
- **[Head First Design Patterns](https://www.amazon.com/Head-First-Design-Patterns-Object-Oriented/dp/149207800X/)** - Essential guide to software design patterns

### Documentation
- **[MongoDB Documentation](https://www.mongodb.com/docs/)** - Complete MongoDB reference
- **[PostgreSQL Documentation](https://www.postgresql.org/docs/)** - Official PostgreSQL docs
- **[Redis Documentation](https://redis.io/docs/)** - Complete Redis reference and capabilities
  - **[Redis Caching Guide](https://redis.io/docs/latest/develop/use/patterns/caching/)** - Caching patterns and best practices
  - **[Redis Pub/Sub](https://redis.io/docs/latest/develop/interact/pubsub/)** - Publish/Subscribe messaging patterns
  - **[Redis Data Types](https://redis.io/docs/latest/develop/data-types/)** - Strings, Lists, Sets, Hashes, and more
  - **[Redis Commands Reference](https://redis.io/docs/latest/commands/)** - Complete command documentation
- **[DBMate](https://github.com/amacneil/dbmate)** - Database migration tool
- **[Docker Documentation](https://docs.docker.com/)** - Docker guides and reference
- **[Docker Compose Documentation](https://docs.docker.com/compose/)** - Multi-container application guide
