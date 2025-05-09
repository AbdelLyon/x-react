// tailwind.export.js
/**
 * @fileoverview Ce fichier sera copié dans le package distribué.
 * Les imports ci-dessous seront transformés automatiquement lors de la copie.
 */
import { heroui } from "@heroui/react";
import { lightTheme } from "./src/theme/lightTheme"; // Ces imports seront transformés
import { darkTheme } from "./src/theme/darkTheme"; // Ces imports seront transformés

export default {
  darkMode: "class",
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
