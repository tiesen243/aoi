FROM oven/bun:alpine AS base

FROM base AS pruner
WORKDIR /temp/pruner
COPY . .
RUN bun run scripts/prune.ts

FROM base AS builder
WORKDIR /temp/builder

COPY --from=pruner /temp/pruner/out .
RUN bun ci

COPY . .
RUN bun run build

FROM base AS runner
WORKDIR /app

COPY --from=pruner /temp/pruner/out .
RUN bun ci --production

COPY --from=builder /temp/builder/apps/service-b/dist ./apps/service-b/dist
CMD ["bun", "run", "apps/service-b/dist/index.mjs"]
