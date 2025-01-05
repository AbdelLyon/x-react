import { useRef as c, useEffect as f } from "react";
const o = (e, n, t) => {
  const r = c(null);
  return f(() => {
    if (r.current) {
      r.current.addEventListener(e, n, t);
      const u = r.current;
      return () => u?.removeEventListener(e, n, t);
    }
  }, [n, t, e]), r;
};
export {
  o as useEvent
};
//# sourceMappingURL=index.js.map
