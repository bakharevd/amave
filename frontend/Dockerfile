FROM node:lts-alpine
WORKDIR /app
COPY app/package*.json ./
RUN npm install
COPY app/ .
CMD ["npm", "run", "serve"]