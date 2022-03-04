FROM node:17.6.0

WORKDIR /app

ARG PORT=8080
ENV PORT=$PORT
EXPOSE $PORT

COPY . .

RUN npm install

CMD [ "npm", "start" ]