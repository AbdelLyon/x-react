var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
import { heroui } from "@heroui/react";
import { lightTheme } from "../theme/lightTheme/index.es.js";
import { darkTheme } from "../theme/darkTheme/index.es.js";
var require_index_es = __commonJS({
  "tailwindcss/index.es.js"(exports, module) {
    module.exports = {
      content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}"
      ],
      darkMode: "class",
      plugins: [
        heroui({
          themes: {
            light: {
              colors: lightTheme
            },
            dark: {
              colors: darkTheme
            }
          }
        })
      ]
    };
  }
});
export default require_index_es();
