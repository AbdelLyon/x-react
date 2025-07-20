import { heroui } from "@heroui/react";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";


export const xreactui = heroui({
   themes: {
      light: {
         colors: lightTheme,
      },
      dark: {
         colors: darkTheme,
      },
   },
});
