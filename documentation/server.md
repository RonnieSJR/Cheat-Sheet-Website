# Server-Side Documentation (docs/server.md)

## Overview

The server-side of the Frontend Development Cheat Sheet project uses Express.js to serve static files and handle routing.

## Key Files

1. `src/server/server.js`
   - Main server file
   - Sets up Express.js server
   - Configures static file serving
   - Defines routes

## Server Configuration

- The server uses environment variables for configuration, loaded from a `.env` file
- Default port is 5987, but can be changed via the `PORT` environment variable

## Routes

- `/`: Serves the main `index.html` file
- Static files: Served from `src/client` directory
- 404 route: Catches all undefined routes and serves a custom 404 page

## Starting the Server

To start the server:

1. Ensure all dependencies are installed (`npm install`)
2. Run `npm start` for production or `npm run dev` for development with hot-reloading

## Environment Variables

- `NODE_ENV`: Set to `development` or `production`
- `PORT`: The port on which the server will listen (default: 5987)
