import { limitValue } from "../../utils/x-react.es.js";
import { useState } from "react";
const DEFAULT_OPTIONS = {
  min: -Infinity,
  max: Infinity
};
const useCounter = (initialValue = 0, options) => {
  const { min, max } = { ...DEFAULT_OPTIONS, ...options };
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
