import { heroui } from "@heroui/react";
import { lightTheme } from "./theme/lightTheme/index.es.js";
import { darkTheme } from "./theme/darkTheme/index.es.js";

export default {
  darkMode: "class",
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    heroui({
      themes: {
        light: {
          colors: lightTheme,
        },
        dark: {
          colors: darkTheme,
        },
      },
    }),
  ],
};
