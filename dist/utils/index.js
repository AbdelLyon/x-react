import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// src/utils/index.ts
var cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
var capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
var concatenateWithSpace = (...strings) => strings.filter(Boolean).join(" ");
var startsWith = (str, prefix) => str.startsWith(prefix);
var endsWith = (str, suffix) => str.endsWith(suffix);
var toLowerCase = (str) => str.toLowerCase();
var toUpperCase = (str) => str.toUpperCase();
var trim = (str) => str.trim();
var reverse = (str) => str.split("").reverse().join("");
var limitValue = (value, min, max) => {
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

export { capitalizeFirstLetter, cn, concatenateWithSpace, debounce, endsWith, limitValue, reverse, startsWith, toLowerCase, toUpperCase, trim };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map