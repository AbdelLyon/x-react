import { useRef as f, useState as d, useEffect as l } from "react";
const m = (t) => t.currentTarget instanceof HTMLElement && t.relatedTarget instanceof HTMLElement ? t.currentTarget.contains(t.relatedTarget) : !1, T = ({
  onBlur: t,
  onFocus: c
} = {}) => {
  const r = f(null), [a, i] = d(!1), s = f(!1), o = (n) => {
    i(n), s.current = n;
  };
  return l(() => {
    const n = (e) => {
      s.current || (o(!0), c?.(e));
    }, u = (e) => {
      s.current && !m(e) && (o(!1), t?.(e));
    };
    if (r.current) {
      const e = r.current;
      return e.addEventListener("focusin", n), e.addEventListener("focusout", u), () => {
        e.removeEventListener("focusin", n), e.removeEventListener("focusout", u);
      };
    }
  }, [c, t]), { ref: r, focused: a };
};
export {
  T as useFocusDetection
};
//# sourceMappingURL=index.js.map
