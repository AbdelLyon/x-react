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
import { limitValue } from "../../utils/index.js";
import { useState } from "react";
const DEFAULT_OPTIONS = {
  min: -Infinity,
  max: Infinity
};
const useCounter = (initialValue = 0, options) => {
  const { min, max } = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS), options);
  const [count, setCount] = useState(
    limitValue(initialValue, min, max)
  );
  const increment = () => setCount((current) => limitValue(current + 1, min, max));
  const decrement = () => setCount((current) => limitValue(current - 1, min, max));
  const set = (value) => setCount(limitValue(value, min, max));
  const reset = () => setCount(limitValue(initialValue, min, max));
  return [count, { increment, decrement, set, reset }];
};
export {
  useCounter
};
