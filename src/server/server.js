/**
 * This is the main server file for the website. It is responsible for serving static files, routing, and starting the server.
 * @file src/server/server.js
 * @module
 * @author [Ronald Spratley](https://github.com/ronaldspratley)
 * @license MIT
 * @see https://github.com/ronaldspratley/cheat-sheet-website
 * @version 0.0.0
 */
import express from 'express';
import path from 'path';

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5987;

// Serve static files from the 'public' directory
app.use(
  express.static(
    path.join(import.meta.dirname, '../../public')
  )
);

// Serve static files from the 'src/client' directory
app.use(
  express.static(
    path.join(import.meta.dirname, '../client')
  )
);

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(
    path.join(import.meta.dirname, '../client/index.html')
  );
});

// Catch-all route for any undefined routes
app.use((req, res) => {
  res
    .status(404)
    .sendFile(
      path.join(
        import.meta.dirname,
        '../client/pages/404.html'
      )
    );
});

app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}`
  );
});
