import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./**/*.{jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        "lg-diffuse": "0 0 15px 10px rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
