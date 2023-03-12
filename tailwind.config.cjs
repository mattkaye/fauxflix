/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-red": "#db202c",
        "brand-black": "#141414",
      },
    },
    fluidTypography: {
      remSize: 12,
      minScreenSize: 600,
      maxScreenSize: 1280,
      minTypeScale: 1.1,
      maxTypeScale: 1.25,
      lineHeight: 1.2,
    },
  },
  plugins: [
    require("@tailwindcss/nesting"),
    require("tailwind-fluid-typography"),
  ],
};
