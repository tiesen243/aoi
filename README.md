# aoi

A monorepo for a small distributed web application built with Bun, TypeScript, React Router, and Effect.js. The repository contains a frontend app, two backend services, and an NGINX proxy layer for local orchestration.

## Overview

This project is structured as a workspace-based monorepo:

- `apps/web` — React + React Router frontend
- `apps/service-a` — backend service A
- `apps/service-b` — backend service B
- `packages/proxy` — NGINX configuration and TLS assets
- `packages/typescript` — shared TypeScript configuration

## Tech Stack

- Bun
- TypeScript
- React 19
- React Router
- Tailwind CSS
- Effect.js
- Docker / Docker Compose
- NGINX

## Prerequisites

- Bun >= 1.4.0
- Node >= 24.0.0

## Getting Started

Install dependencies:

```bash
bun install
```

Run the full workspace in development mode:

```bash
bun run dev
```

This starts the monorepo's recursive development scripts for the workspace apps.

## Useful Scripts

From the repository root:

```bash
bun run build
bun run check
bun run typecheck
```

Individual apps also expose their own scripts:

```bash
cd apps/web && bun run dev
cd apps/service-a && bun run dev
cd apps/service-b && bun run dev
```

## Docker Compose

The repository includes a Docker Compose setup for the app stack:

```bash
docker compose up --build
```

This starts:

- `service-a`
- `service-b`
- `web`
- `nginx`

## Project Structure

```text
.
├── apps/
│   ├── service-a/
│   ├── service-b/
│   └── web/
├── packages/
│   ├── proxy/
│   └── typescript/
├── docker-compose.yml
├── bunfig.toml
├── package.json
├── LICENSE
├── .gitignore
├── .dockerignore
└── README.md
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
