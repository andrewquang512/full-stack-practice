FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build



EXPOSE 8080

CMD [ "serve", "-s", "dist" ]