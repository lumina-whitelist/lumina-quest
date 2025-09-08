/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: "#FFD700",
          400: "#FFEA70"
        }
      }
    }
  },
  plugins: []
};
