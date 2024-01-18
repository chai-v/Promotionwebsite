/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = ["./index.html", "./src/**/*.{js,jsx,css}", "./src/public/assets/Events/*.jpg"];
export const mode = "jit";
export const theme = {
  extend: { 
  },
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },

};
export const plugins = [];