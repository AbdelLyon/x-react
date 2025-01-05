import { useState as s, useRef as d, useCallback as f, useEffect as h } from "react";
function l(e, t) {
  return e.addEventListener("change", t), () => e.removeEventListener("change", t);
}
function m(e, t) {
  if (typeof t == "boolean")
    return t;
  if (typeof window < "u" && "matchMedia" in window)
    try {
      return window.matchMedia(e).matches;
    } catch (n) {
      return console.warn("Error while matching media query:", n), !1;
    }
  return !1;
}
function g(e, t = {}) {
  const { getInitialValueInEffect: n = !0, initialValue: a } = t, [u, o] = s(
    () => n ? a ?? !1 : m(e, a)
  ), r = d(null), c = f((i) => {
    o(i.matches);
  }, []);
  return h(() => {
    if (!(typeof window > "u" || !("matchMedia" in window)))
      try {
        return r.current = window.matchMedia(e), n && o(r.current.matches), l(r.current, c);
      } catch (i) {
        console.error("Error setting up media query:", i);
        return;
      }
  }, [e, n, c]), u;
}
export {
  g as useMediaQuery
};
