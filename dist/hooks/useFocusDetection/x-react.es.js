import { useRef as u, useState as d, useEffect as l } from "react";
const m = (e) => e.currentTarget instanceof HTMLElement && e.relatedTarget instanceof HTMLElement ? e.currentTarget.contains(e.relatedTarget) : !1, T = ({
  onBlur: e,
  onFocus: s
} = {}) => {
  const n = u(null), [o, i] = d(!1), c = u(!1), f = (r) => {
    i(r), c.current = r;
  };
  return l(() => {
    const r = (t) => {
      c.current || (f(!0), s == null || s(t));
    }, a = (t) => {
      c.current && !m(t) && (f(!1), e == null || e(t));
    };
    if (n.current) {
      const t = n.current;
      return t.addEventListener("focusin", r), t.addEventListener("focusout", a), () => {
        t.removeEventListener("focusin", r), t.removeEventListener("focusout", a);
      };
    }
  }, [s, e]), { ref: n, focused: o };
};
export {
  T as useFocusDetection
};
