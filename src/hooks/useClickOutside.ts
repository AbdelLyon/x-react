import { useEffect, useRef } from "react";

const DEFAULT_EVENTS = ["mousedown", "touchstart"];

export const useClickOutside = <T extends HTMLElement>(
  handler: () => void,
  events?: string[] | null,
  nodes?: (HTMLElement | null)[],
): React.RefObject<T | null> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: Event): void => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore =
          (target as HTMLElement)?.hasAttribute("data-ignore-outside-clicks") ||
          (!document.body.contains(target as Node) &&
            (target as HTMLElement).tagName !== "HTML");
        const shouldTrigger = nodes.every(
          (node) => !!node && !event.composedPath().includes(node),
        );
        if (shouldTrigger && !shouldIgnore) {
          handler();
        }
      } else if (ref.current && !ref.current.contains(target as Node)) {
        handler();
      }
    };

    (events || DEFAULT_EVENTS).forEach((fn) =>
      document.addEventListener(fn, listener),
    );

    return () => {
      (events || DEFAULT_EVENTS).forEach((fn) =>
        document.removeEventListener(fn, listener),
      );
    };
  }, [ref, handler, nodes]);

  return ref;
};
