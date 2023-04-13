
FROM node:16.14-alpine3.14 as build

WORKDIR /app
COPY ./client/package*.json ./
RUN npm install
COPY ./client ./
RUN npm run build

FROM nginx:1.17.1-alpine
COPY ./client/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/application_name/ /usr/share/nginx/html
EXPOSE 3000



# Enviornment File - API URL
# For local keep as localhost:port of webservice
# For production keeps as ""