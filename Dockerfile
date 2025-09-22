# Use official Node.js runtime as base image
FROM node:20-slim

# Set working directory in container
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all project files
COPY . .

# Build the React app for production
RUN yarn build

# Install serve to run the production build
RUN yarn global add serve

# Expose port (Azure App Service will map this)
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]