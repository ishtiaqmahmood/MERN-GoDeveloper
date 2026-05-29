/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#17a2b8",
        dark: "#343a40",
        light: "#f4f4f4",
        danger: "#dc3545",
        success: "#28a745",
      },
    },
  },
  plugins: [],
}
