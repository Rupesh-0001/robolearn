# Use Node.js LTS Alpine image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the app directory's package.json
COPY my-app/package*.json ./my-app/

# Navigate to the app directory and install dependencies
WORKDIR /usr/src/app/my-app
RUN npm install

# Copy the rest of the app's files
COPY my-app/ .

# Expose the port for the React development server
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]