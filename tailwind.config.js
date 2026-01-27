/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p5: {
          red: "#D00000",
          black: "#111111",
          gray: "#222222",
          white: "#F5F5F5",
          yellow: "#FFE600",
        },
      },
      fontFamily: {
        heading: ['var(--font-anton)'],
        body: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};