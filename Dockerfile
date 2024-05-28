FROM node:20

WORKDIR /app/my-portfolio

COPY . .

WORKDIR /app/my-portfolio/frontend

RUN npm install

CMD ["npm", "run", "dev"]
