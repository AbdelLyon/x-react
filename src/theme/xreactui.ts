import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

// Plugin compatible Tailwind 4
const xreactui = function ({ addBase }: any) {
  addBase({
    ':root': {
      // Variables CSS pour le thème light basées sur vos couleurs
      ...Object.entries(lightTheme).reduce((acc, [key, value]) => {
        if (typeof value === 'object' && value !== null) {
          Object.entries(value).forEach(([shade, color]) => {
            acc[`--color-${key}-${shade}`] = color;
          });
        } else {
          acc[`--color-${key}`] = value;
        }
        return acc;
      }, {} as Record<string, any>),
    },
    '[data-theme="dark"]': {
      // Variables CSS pour le thème dark
      ...Object.entries(darkTheme).reduce((acc, [key, value]) => {
        if (typeof value === 'object' && value !== null) {
          Object.entries(value).forEach(([shade, color]) => {
            acc[`--color-${key}-${shade}`] = color;
          });
        } else {
          acc[`--color-${key}`] = value;
        }
        return acc;
      }, {} as Record<string, any>),
    }
  });
};

export default xreactui;


