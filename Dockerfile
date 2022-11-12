FROM node:18-alpine

ARG APP_PORT
EXPOSE ${APP_PORT}

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@9.1.1

RUN npm install

COPY . .

CMD ["node", "dist/main.js"]
