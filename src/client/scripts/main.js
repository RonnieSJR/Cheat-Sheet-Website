/**
 * Cheatsheet Loader
 *
 * This module is responsible for loading cheatsheets and adding them to the grid.
 * It defines the available cheatsheets and creates clickable elements for each one.
 *
 * @module CheatsheetLoader
 * @author Ronald Spratley <https://github.com/RonnieSJR>
 * @license MIT
 * @version 0.1.0
 */

/**
 * Array of cheatsheet objects, each containing a name and URL.
 * @type {Array<{name: string, url: string}>}
 */
const cheatsheets = [
  { name: 'HTML', url: 'pages/html-cheatsheet.html' },
  { name: 'CSS', url: 'pages/css-cheatsheet.html' },
  {
    name: 'JavaScript',
    url: 'pages/javascript-cheatsheet.html',
  },
  //   { name: 'Python', url: 'pages/python-cheatsheet.html' },
  //   { name: 'Git', url: 'pages/git-cheatsheet.html' },
  //   { name: 'Docker', url: 'pages/docker-cheatsheet.html' },
  //   { name: 'NPM', url: 'pages/npm-cheatsheet.html' },
  //   { name: 'React', url: 'pages/react-cheatsheet.html' },
  //   { name: 'Vue', url: 'pages/vue-cheatsheet.html' },
  //   { name: 'Angular', url: 'pages/angular-cheatsheet.html' },
  //   { name: 'SolidJS', url: 'pages/solidjs-cheatsheet.html' },
  //   { name: 'Svelte', url: 'pages/svelte-cheatsheet.html' },
  //   { name: 'Qwik', url: 'pages/qwik-cheatsheet.html' },
  //   {
  //     name: 'Tailwind',
  //     url: 'pages/tailwind-cheatsheet.html',
  //   },
  //   { name: 'SASS', url: 'pages/sass-cheatsheet.html' },
  //   { name: 'PostCSS', url: 'pages/postcss-cheatsheet.html' },
  //   { name: 'ESLint', url: 'pages/eslint-cheatsheet.html' },
  //   {
  //     name: 'Prettier',
  //     url: 'pages/prettier-cheatsheet.html',
  //   },
  //   { name: 'Jest', url: 'pages/jest-cheatsheet.html' },
  //   {
  //     name: 'playwright',
  //     url: 'pages/playwright-cheatsheet.html',
  //   },
  //   { name: 'Cypress', url: 'pages/cypress-cheatsheet.html' },
  //   { name: 'Next.js', url: 'pages/nextjs-cheatsheet.html' },
  //   { name: 'GitHub', url: 'pages/github-cheatsheet.html' },
  //   { name: 'Node.js', url: 'pages/nodejs-cheatsheet.html' },

  // Add more cheatsheets here as you create them
];

/**
 * The container element for the cheatsheet grid.
 * @type {HTMLElement}
 */
const cheatsheetGrid = document.getElementById(
  'cheatsheetGrid'
);

/**
 * Creates and adds cheatsheet items to the grid.
 *
 * This function iterates over the cheatsheets array, creating a clickable
 * div element for each cheatsheet and appending it to the cheatsheet grid.
 *
 * @function
 * @name populateCheatsheetGrid
 */
function populateCheatsheetGrid() {
  cheatsheets.forEach((sheet) => {
    const item = document.createElement('div');
    item.className = 'cheatsheet-item';
    item.textContent = sheet.name;
    item.addEventListener('click', () => {
      window.location.href = sheet.url;
    });
    cheatsheetGrid.appendChild(item);
  });
}

// Initialize the cheatsheet grid
populateCheatsheetGrid();

/**
 * @todo Add more cheatsheets to the `cheatsheets` array as they are created.
 * @todo Implement a search functionality for cheatsheets.
 * @todo Add a categorization system for cheatsheets.
 */
