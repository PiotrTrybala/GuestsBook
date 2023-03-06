/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        100: "24rem"
      },
      width: {
        100: "44rem",
        90: "34rem"
      }
    },
  },
  plugins: [],
}
