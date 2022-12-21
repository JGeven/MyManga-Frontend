# Stage 1
FROM node:18 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2
FROM nginx:latest
COPY --from=node /app/dist/mymanga-frontend  /usr/share/nginx/html
EXPOSE 4200:80
