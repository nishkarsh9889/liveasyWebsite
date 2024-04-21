/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {},
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  plugins: [],
}