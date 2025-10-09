ARG NODE_VERSION="20"

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --production

COPY ./ ./

RUN ["npx", "prisma", "generate"]

RUN ["npm", "run", "build"]

FROM node:${NODE_VERSION}-alpine as stage

WORKDIR app

COPY --from=base /app/.next/standalone ./

COPY --from=base /app/public ./public

COPY --from=base /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
