# Stage 1: Build the Angular application
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force
RUN npm install --force
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:1.27-alpine
COPY --from=build /app/dist/HNSFRONTEND/browser /usr/share/nginx/html
EXPOSE 80