# FROM node:11.10.0-alpine
FROM loyalty-module-hypernova:latest

# Change directory so that our commands run inside this new directory
WORKDIR /usr/hypernova

# Copy dependency definitions
COPY package.json .

# Get all the code needed to run the app
COPY ./src ./src

RUN npm install
# RUN npm install hypernova hypernova-vue postcss-loader vue-server-renderer express webpack webpack-cli

RUN ls
RUN ./build.sh