# Use Node.js LTS Alpine image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app/my-app

# Copy package.json and package-lock.json for dependency installation
COPY my-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's files
COPY my-app/ .

# Expose the port for the React development server
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]