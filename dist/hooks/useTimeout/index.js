import { useRef as i, useEffect as l } from "react";
const f = (n, e, { autoInvoke: o = !1 } = {}) => {
  const t = i(null), r = (...c) => {
    t.current === void 0 && (t.current = window.setTimeout(() => {
      n(...c), t.current = null;
    }, e));
  }, u = () => {
    t.current !== null && (window.clearTimeout(t.current), t.current = null);
  };
  return l(() => (o && r(), u), [e]), { start: r, clear: u };
};
export {
  f as useTimeout
};
//# sourceMappingURL=index.js.map
