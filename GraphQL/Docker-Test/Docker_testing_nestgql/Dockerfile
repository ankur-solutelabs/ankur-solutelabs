FROM node:17-alpine3.12


WORKDIR /ankur/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080 5001 5002

CMD ["node", "dist/main"]
