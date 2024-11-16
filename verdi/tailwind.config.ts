import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        creme: "#ffeedc",
      },
      fontFamily: {
        kanit: ["kanit", "sans-serif"],
        k2d: ["k2d", "sans-serif"],
        ubuntu: ["ubuntu", "sans-serif"],
      },
      backgroundImage: {
        'back-image' : "url('/background.jpg')"
      }
    },
  },
  plugins: [],
};
export default config;