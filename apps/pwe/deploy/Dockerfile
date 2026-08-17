# Multi-stage: build con Node (pnpm) → sirve el dist estático con nginx.
# Build context = raíz del monorepo. En Coolify: Base Directory "/" y
# Dockerfile Location "/apps/pwe/deploy/Dockerfile".

FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /repo
COPY . .
RUN pnpm install --frozen-lockfile
# Controla el <meta name="robots"> del sitio. Se inyecta como Build Argument
# desde Coolify, NO desde el repo:
#   PUBLIC_NOINDEX=true  -> noindex, nofollow (staging, o contenido sin validar)
#   sin definir o "false" -> index, follow      (producción)
# Para publicar en Google: borrar el Build Argument en Coolify y redesplegar.
ARG PUBLIC_NOINDEX
ENV PUBLIC_NOINDEX=$PUBLIC_NOINDEX
RUN pnpm --filter pwe build

FROM nginx:alpine
COPY apps/pwe/deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /repo/apps/pwe/dist /usr/share/nginx/html
EXPOSE 80
