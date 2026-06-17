# LABS Server

Express + Prisma backend for LABS.

## Prerequisites

- Node.js >= 22
- Neon DB

## Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Run database migrations
npm run migrate:dev

# Generate Prisma client
npm run generate

# Start dev server (with nodemon)
npm run dev
```

## Scripts

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| `npm run dev`            | Start dev server with hot reload |
| `npm run start`          | Start production server          |
| `npm run lint`           | Run ESLint                       |
| `npm run migrate:dev`    | Apply migrations (dev)           |
| `npm run migrate:deploy` | Apply migrations (production)    |
| `npm run migrate:create` | Create a new migration           |
| `npm run studio`         | Open Prisma Studio (DB GUI)      |
| `npm run generate`       | Regenerate Prisma client         |

## API

- `GET /api/health` — Health check with DB connectivity test
