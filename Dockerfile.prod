FROM node:16 as build
WORKDIR /frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ ./
RUN npm run build


FROM ubuntu:18.04
RUN apt update -y \
    && apt install nginx curl vim -y \
    && apt-get install software-properties-common -y \
    && add-apt-repository ppa:certbot/certbot -y \
    && apt-get update -y \
    && apt-get install python-certbot-nginx -y \
    && apt-get clean

EXPOSE 80
STOPSIGNAL SIGTERM

COPY --from=build /frontend/build /var/www/html

CMD ["nginx", "-g", "daemon off;"]
