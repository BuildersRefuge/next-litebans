FROM node:20-alpine

RUN apk add --no-cache libc6-compat openssl

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

WORKDIR /app
RUN chown nextjs:nodejs /app

USER nextjs

COPY --chown=nextjs:nodejs package.json package-lock.json ./
RUN npm ci

COPY --chown=nextjs:nodejs . .

EXPOSE 3000

ENTRYPOINT ["sh", "entrypoint.sh"]
