FROM node:14 AS builder
WORKDIR /frontend
COPY package*.json .
RUN npm install
COPY ./frontend/ .
RUN npm run build



FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /frontend/build .
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf