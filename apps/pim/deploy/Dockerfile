# Multi-stage: build con Node (pnpm) → sirve el dist estático con nginx.
# Build context = raíz del monorepo. En Coolify: Base Directory "/" y
# Dockerfile Location "/apps/pim/deploy/Dockerfile".

FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /repo
COPY . .
RUN pnpm install --frozen-lockfile
# Permite inyectar PUBLIC_NOINDEX en build (staging = noindex).
ARG PUBLIC_NOINDEX
ENV PUBLIC_NOINDEX=$PUBLIC_NOINDEX
RUN pnpm --filter pim build

FROM nginx:alpine
COPY apps/pim/deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /repo/apps/pim/dist /usr/share/nginx/html
EXPOSE 80
