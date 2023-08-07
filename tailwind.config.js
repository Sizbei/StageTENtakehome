/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f4f4f5",
        black: "#000",
        white: "#fff",
        gray: "rgba(0, 0, 0, 0.2)",
        royalblue: "#0756b8",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "9xl": "28px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
