/** @type {import('tailwindcss').Config} */
module.exports = {
  // Correctly configure 'content' to scan typical React file types
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all files in the src folder with these extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
