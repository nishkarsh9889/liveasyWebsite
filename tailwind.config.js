/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {},
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  plugins: [],
}