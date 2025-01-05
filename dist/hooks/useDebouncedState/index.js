import { useState as i, useRef as c, useEffect as d } from "react";
const S = (o, l, s = { leading: !1 }) => {
  const [a, u] = i(o), e = c(null), t = c(!0), n = () => {
    e.current !== null && window.clearTimeout(e.current);
  };
  return d(() => n, []), [a, (r) => {
    n(), t.current && s.leading ? u(r) : e.current = window.setTimeout(() => {
      t.current = !0, u(r);
    }, l), t.current = !1;
  }];
};
export {
  S as useDebouncedState
};
//# sourceMappingURL=index.js.map
