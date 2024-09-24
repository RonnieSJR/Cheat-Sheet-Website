# Client-Side Documentation (docs/client.md)

## Overview

The client-side of the Frontend Development Cheat Sheet project consists of HTML, CSS, and JavaScript files that create the user interface and handle client-side interactions.

## Key Files

1. `src/client/index.html`

   - Main entry point for the web application
   - Contains the basic structure of the page and links to CSS and JavaScript files

2. `src/client/styles/main.css`

   - Contains all styles for the application
   - Implements a responsive grid layout and dark theme

3. `src/client/scripts/main.js`
   - Handles dynamic loading of cheat sheet content
   - Manages the creation and population of the cheat sheet grid

## Cheat Sheet Pages

Individual cheat sheet pages are located in `src/client/pages/`:

- `html-cheatsheet.html`
- `css-cheatsheet.html`
- `javascript-cheatsheet.html`

These pages contain the specific content for each cheat sheet.

## Adding New Cheat Sheets

To add a new cheat sheet:

1. Create a new HTML file in `src/client/pages/`
2. Add the cheat sheet information to the `cheatsheets` array in `main.js`
3. Create the content for the new cheat sheet page
