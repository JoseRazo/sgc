FROM node:14.20.1-alpine as build-step

# Setup workspace
RUN mkdir -p /home/app
WORKDIR /home/app

# Install Angular CLI
RUN npm install -g @angular/cli@11

# Copy dependency files
COPY package.json /home/app/package.json

# Install dependencies
RUN npm cache clean --force && npm install --legacy-peer-deps

# Expose port
EXPOSE 4200

# Run the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll=2000", "--port", "4200", "--disable-host-check"]
