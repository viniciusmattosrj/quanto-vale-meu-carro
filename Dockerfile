FROM node:13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV CI=true

COPY package.json /app/package.json
COPY npm.lock /app/package-lock

RUN npm install --silent
RUN npm global add react-scripts@3.4.1 --silent

CMD npm start
