import { useState as f, useRef as h, useCallback as l, useEffect as p } from "react";
function m(t, e) {
  return t.addEventListener("change", e), () => t.removeEventListener("change", e);
}
function w(t, e) {
  if (typeof e == "boolean")
    return e;
  if (typeof window < "u" && "matchMedia" in window)
    try {
      return window.matchMedia(t).matches;
    } catch (n) {
      return console.warn("Error while matching media query:", n), !1;
    }
  return !1;
}
function u(t, e = {}) {
  const { getInitialValueInEffect: n = !0, initialValue: i } = e, [s, c] = f(
    () => n ? i ?? !1 : w(t, i)
  ), r = h(null), a = l((o) => {
    c(o.matches);
  }, []);
  return p(() => {
    if (!(typeof window > "u" || !("matchMedia" in window)))
      try {
        return r.current = window.matchMedia(t), n && c(r.current.matches), m(r.current, a);
      } catch (o) {
        console.error("Error setting up media query:", o);
        return;
      }
  }, [t, n, a]), s;
}
const d = {
  desktop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)"
}, k = (t) => {
  const e = u(d.desktop), n = u(d.tablet), i = !e && !n, s = u(t || "");
  return {
    isDesktop: e,
    isTablet: n,
    isMobile: i,
    matches: t ? s : void 0,
    getBreakpoint: () => e ? "isDesktop" : n ? "isTablet" : "isMobile",
    isBreakpoint: (a) => ({
      isDesktop: e,
      isTablet: n,
      isMobile: i
    })[a]
  };
};
export {
  k as a,
  u
};
