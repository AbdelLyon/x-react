import { useRef as n, useEffect as u } from "react";
import { useCallbackRef as a } from "../../useCallbackRef/hooks/useCallbackRef.es.js";
const m = (o, r) => {
  const t = a(o), e = n(0);
  return u(() => () => window.clearTimeout(e.current), []), (...c) => {
    window.clearTimeout(e.current), e.current = window.setTimeout(
      () => t(...c),
      r
    );
  };
};
export {
  m as useDebouncedCallback
};
