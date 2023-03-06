
# Dockerfile
 
FROM node:16-alpine
  
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile
 
COPY . .

EXPOSE 4173

CMD ["npm", "run", "dev"]