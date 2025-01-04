import { clsx } from "clsx";
import { twMerge } from "../node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs/x-react.es.js";
const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const concatenateWithSpace = (...strings) => strings.filter(Boolean).join(" ");
const startsWith = (str, prefix) => str.startsWith(prefix);
const endsWith = (str, suffix) => str.endsWith(suffix);
const toLowerCase = (str) => str.toLowerCase();
const toUpperCase = (str) => str.toUpperCase();
const trim = (str) => str.trim();
const reverse = (str) => str.split("").reverse().join("");
const limitValue = (value, min, max) => {
  if (min === void 0 && max === void 0) {
    return value;
  }
  if (min !== void 0 && max === void 0) {
    return Math.max(value, min);
  }
  if (min === void 0 && max !== void 0) {
    return Math.min(value, max);
  }
  if (min !== void 0 && max !== void 0) {
    return Math.min(Math.max(value, min), max);
  }
  return value;
};
function debounce(callback, delay = 0) {
  let timeoutId;
  let latestArgs;
  function debouncedFn(...args) {
    latestArgs = args;
    if (timeoutId !== void 0) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      if (latestArgs) {
        callback.apply(this, latestArgs);
      }
      timeoutId = void 0;
      latestArgs = void 0;
    }, delay);
  }
  debouncedFn.cancel = function cancel() {
    if (timeoutId !== void 0) {
      clearTimeout(timeoutId);
      timeoutId = void 0;
      latestArgs = void 0;
    }
  };
  return debouncedFn;
}
export {
  capitalizeFirstLetter,
  cn,
  concatenateWithSpace,
  debounce,
  endsWith,
  limitValue,
  reverse,
  startsWith,
  toLowerCase,
  toUpperCase,
  trim
};
