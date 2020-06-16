FROM node:12-alpine

RUN apk add yarn

COPY client/build/ ./dist/

COPY server/build/ ./
COPY server/package.json ./
COPY server/yarn.lock ./

RUN yarn --silent

EXPOSE 8080

CMD ["node", "index.js"]
