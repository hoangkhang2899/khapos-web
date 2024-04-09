import { colors } from "./src/constants/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#fdf7ef",
          100: "#faebda",
          200: "#f5d4b3",
          300: "#eeb683",
          400: "#e68f51",
          500: "#e06f2b",
          600: "#d25a24",
          700: "#ae4420",
          800: "#8b3721",
          900: "#71301d",
          950: "#3d160d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
