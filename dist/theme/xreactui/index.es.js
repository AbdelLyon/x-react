var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { lightTheme } from "../lightTheme/index.es.js";
import { darkTheme } from "../darkTheme/index.es.js";
const xreactui = function({ addBase, theme }) {
  addBase({
    ":root": __spreadValues({}, Object.entries(lightTheme).reduce((acc, [key, value]) => {
      if (typeof value === "object" && value !== null) {
        Object.entries(value).forEach(([shade, color]) => {
          acc[`--color-${key}-${shade}`] = color;
        });
      } else {
        acc[`--color-${key}`] = value;
      }
      return acc;
    }, {})),
    '[data-theme="dark"]': __spreadValues({}, Object.entries(darkTheme).reduce((acc, [key, value]) => {
      if (typeof value === "object" && value !== null) {
        Object.entries(value).forEach(([shade, color]) => {
          acc[`--color-${key}-${shade}`] = color;
        });
      } else {
        acc[`--color-${key}`] = value;
      }
      return acc;
    }, {}))
  });
};
export {
  xreactui as default
};
