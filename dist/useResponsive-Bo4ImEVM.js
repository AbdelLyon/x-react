import { useState as d, useRef as f, useCallback as h, useEffect as l } from "react";
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
function c(t, e = {}) {
  const { getInitialValueInEffect: n = !0, initialValue: i } = e, [a, r] = d(
    () => n ? i ?? !1 : w(t, i)
  ), s = f(null), u = h((o) => {
    r(o.matches);
  }, []);
  return l(() => {
    if (!(typeof window > "u" || !("matchMedia" in window)))
      try {
        return s.current = window.matchMedia(t), n && r(s.current.matches), m(s.current, u);
      } catch (o) {
        console.error("Error setting up media query:", o);
        return;
      }
  }, [t, n, u]), a;
}
const M = (t) => {
  const e = c("(min-width: 1024px)"), n = c("(min-width: 768px) and (max-width: 1023px)"), i = !e && !n, a = c(t || "");
  return {
    // Breakpoints
    isDesktop: e,
    isTablet: n,
    isMobile: i,
    // Custom query match if provided
    matches: t ? a : void 0,
    // Helper functions
    getBreakpoint: () => e ? "isDesktop" : n ? "isTablet" : "isMobile",
    isBreakpoint: (r) => {
      switch (r) {
        case "isDesktop":
          return e;
        case "isTablet":
          return n;
        case "isMobile":
          return i;
      }
    }
  };
};
export {
  M as a,
  c as u
};
