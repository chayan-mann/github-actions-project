FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/* && npm ci --omit=dev
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
