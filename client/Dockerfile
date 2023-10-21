# Using node:16-alpine base image
FROM node:16-alpine as build
 
# Set /app as the default work directory
WORKDIR /app
 
# copy package.json to the working directory for packages installation
COPY package*.json /app
 
# Install npm dependencies
RUN npm install
 
# Copy all the project files to the working directory
COPY . .

RUN npm run build

# Use Nginx to serve the React application and handle client-side routing
FROM nginx:alpine

# Copy the build files from the build stage to the Nginx web root directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration to route all requests to index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]