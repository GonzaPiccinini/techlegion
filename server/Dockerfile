FROM node:18-bullseye

WORKDIR /app

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]