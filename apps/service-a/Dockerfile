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

COPY --from=builder /temp/builder/apps/service-a/dist ./apps/service-a/dist
CMD ["bun", "run", "apps/service-a/dist/index.mjs"]
