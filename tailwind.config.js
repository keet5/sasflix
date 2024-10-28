/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",
        red: "#ff3b30",
        text: "#05090E",
      },
    },
  },
  plugins: [],
}
