# Stage 1: Build the Angular application
FROM node:20-bookworm as build
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force
RUN npm install --force
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:bookworm
COPY --from=build /app/dist/HNSFRONTEND/browser /usr/share/nginx/html
EXPOSE 80