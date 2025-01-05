import { useState as a, useRef as u, useEffect as f } from "react";
const m = (e, c, o = { leading: !1 }) => {
  const [i, s] = a(e), l = u(!1), t = u(null), n = u(!1), r = () => {
    t.current !== null && window.clearTimeout(t.current);
  };
  return f(() => {
    l.current && (!n.current && o.leading ? (n.current = !0, s(e)) : (r(), t.current = window.setTimeout(() => {
      n.current = !1, s(e);
    }, c)));
  }, [e, o.leading, c]), f(() => (l.current = !0, r), []), [i, r];
};
export {
  m as useDebouncedValue
};
//# sourceMappingURL=index.js.map
