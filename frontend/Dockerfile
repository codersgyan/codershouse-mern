FROM node:14 AS frontend
WORKDIR /frontend/
COPY package*.json /frontend/
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "build" ]
