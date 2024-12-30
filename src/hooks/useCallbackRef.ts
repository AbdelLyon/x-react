import { useEffect, useRef } from "react";

export const useCallbackRef = <T extends (...args: unknown[]) => unknown>(
  callback: T | undefined,
): T => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return ((...args: Parameters<T>) => callbackRef.current?.(...args)) as T;
};