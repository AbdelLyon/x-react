import { useEffect, useRef } from "react";

export const useEvent = <
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement,
>(
  type: K,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): React.RefObject<T | null> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(type, listener, options);
      const currentRef = ref.current;
      return () => currentRef?.removeEventListener(type, listener, options);
    }
    return undefined;
  }, [listener, options, type]);

  return ref;
};
