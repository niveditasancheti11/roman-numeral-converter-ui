# Use Node.js as the base image
FROM node:20

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Set the environment variable for the API
ARG VITE_API_URL=http://localhost:8080
ENV VITE_API_URL=${VITE_API_URL}

# Build the React app
RUN npm run build

# Serve the app using Vite's preview server
EXPOSE 3000
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
