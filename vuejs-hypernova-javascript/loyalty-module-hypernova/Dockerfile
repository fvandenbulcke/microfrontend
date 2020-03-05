FROM node:11.10.0-alpine

# Create a directory where our app will be placed
RUN mkdir -p /usr/hypernova

# Change directory so that our commands run inside this new directory
WORKDIR /usr/hypernova

# Copy dependency definitions
COPY ./build ./build
COPY ./build.sh ./build.sh

RUN ls -lrt

# Expose the port the app runs in
EXPOSE 3030

# Serve the app
CMD ["node", "dist/server.js"]