FROM node:lts-alpine

ADD . /app

WORKDIR /app

RUN npm install && npm run build

EXPOSE 8080

CMD ["node", "./dist/main.js"]