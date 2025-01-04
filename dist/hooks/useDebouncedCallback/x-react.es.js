import { useRef, useEffect } from "react";
import { useCallbackRef } from "../useCallbackRef/x-react.es.js";
const useDebouncedCallback = (callback, delay) => {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);
  useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return (...args) => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(
      () => handleCallback(...args),
      delay
    );
  };
};
export {
  useDebouncedCallback
};
//# sourceMappingURL=x-react.es.js.map
