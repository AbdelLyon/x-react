import { heroui, ThemeColors } from "@heroui/react";
import { lightTheme } from './src/theme/lightTheme';
import { darkTheme } from './src/theme/darkTheme';

interface Colors extends Partial<ThemeColors> {
  outline: {
    DEFAULT: string;
    foreground: string;
  };
}

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
