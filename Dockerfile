# Dockerfile for Glama MCP Server Introspection & Deployment
FROM node:20-alpine

WORKDIR /app

# Copy package manifests and install production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source
COPY . .

# Run the MCP server via stdio
ENTRYPOINT ["node", "bin/cli.js"]
