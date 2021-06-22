FROM node:alpine
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm run build:prod