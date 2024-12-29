import { useEffect } from "react";

export const useWindowEvent = <K extends string>(
  type: K,
  listener: K extends keyof WindowEventMap
    ? (this: Window, ev: WindowEventMap[K]) => void
    : (this: Window, ev: CustomEvent) => void,
  options?: boolean | AddEventListenerOptions,
): void => {
  useEffect(() => {
    window.addEventListener(type, listener as EventListener, options);
    return () =>
      window.removeEventListener(type, listener as EventListener, options);
  }, [type, listener]);
};
