import { heroui } from "@heroui/react";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

const xreactuiPreset = heroui({
  themes: {
    light: {
      colors: lightTheme,
    },
    dark: {
      colors: darkTheme,
    },
  },
});

export default xreactuiPreset;