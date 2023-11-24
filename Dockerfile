FROM node:20-alpine AS deps

WORKDIR /app

RUN yarn global add pnpm

COPY .npmrc .npmrc

FROM deps as builder

COPY . .

RUN pnpm i --frozen-lockfile

# Prisma migrate
RUN pnpm prisma generate --generator client
RUN pnpm build

FROM deps as runner

COPY --from=builder /app/dist dist
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/pnpm-lock.yaml pnpm-lock.yaml
COPY --from=builder /app/node_modules node_modules

ENV NODE_ENV production

EXPOSE 3000

ENV PORT 3000

CMD ["node", "dist/main"]