import { useState as w, useRef as l, useEffect as f } from "react";
const I = (s, c, { autoInvoke: a = !1 } = {}) => {
  const [t, u] = w(!1), e = l(null), o = l(s), r = () => {
    u((v) => (!v && (e.current === null || e.current === -1) && (e.current = window.setInterval(o.current, c)), !0));
  }, n = () => {
    u(!1), window.clearInterval(e.current ?? -1), e.current = -1;
  }, i = () => {
    t ? n() : r();
  };
  return f(() => (o.current = s, t && r(), n), [s, t, c]), f(() => (a && r(), () => n()), []), { start: r, stop: n, toggle: i, active: t };
};
export {
  I as useInterval
};
