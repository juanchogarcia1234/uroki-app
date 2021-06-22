FROM node:alpine
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 9000
CMD npm run start