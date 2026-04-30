/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require('@repo/tailwind-config'),
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
