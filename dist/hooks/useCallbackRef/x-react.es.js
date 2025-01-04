import { useRef, useEffect } from "react";
const useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });
  return (...args) => callbackRef.current?.(...args);
};
export {
  useCallbackRef
};
