import { heroui } from "@heroui/react";
import { lightTheme } from "../lightTheme/index.es.js";
import { darkTheme } from "../darkTheme/index.es.js";
const xreactuiPreset = heroui({
  themes: {
    light: {
      colors: lightTheme
    },
    dark: {
      colors: darkTheme
    }
  }
});
export {
  xreactuiPreset as default
};
