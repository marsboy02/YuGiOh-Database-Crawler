FROM node:18-alpine as base

WORKDIR /app

COPY ./ ./

RUN npm install

FROM base as production

CMD ["node", "dist/main.js"]
