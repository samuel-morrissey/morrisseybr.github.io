FROM node:lts-slim

WORKDIR /app
COPY package.json package-lock.json .
RUN npm ci
COPY . .
RUN npm run db:generate
EXPOSE 3000
USER node
CMD ["sh", "-c", "npm run db:migrate && node ./server.js"]