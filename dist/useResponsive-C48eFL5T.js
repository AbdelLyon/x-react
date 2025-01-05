import { useState as f, useRef as h, useCallback as l, useEffect as p } from "react";
function w(e, t) {
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
function u(e, t = {}) {
  const { getInitialValueInEffect: n = !0, initialValue: i } = t, [c, s] = f(
    () => n ? i ?? !1 : m(e, i)
  ), r = h(null), o = l((a) => {
    s(a.matches);
  }, []);
  return p(() => {
    if (!(typeof window > "u" || !("matchMedia" in window)))
      try {
        return r.current = window.matchMedia(e), n && s(r.current.matches), w(r.current, o);
      } catch (a) {
        console.error("Error setting up media query:", a);
        return;
      }
  }, [e, n, o]), c;
}
const d = {
  desktop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)"
}, b = (e) => {
  const t = u(d.desktop), n = u(d.tablet), i = !t && !n, c = u(
    typeof e == "string" && e.length > 0 ? e : ""
  ), s = () => t === !0 ? "isDesktop" : n === !0 ? "isTablet" : "isMobile", r = (a) => ({
    isDesktop: t,
    isTablet: n,
    isMobile: i
  })[a] === !0, o = typeof e == "string" && e.length > 0;
  return {
    isDesktop: t,
    isTablet: n,
    isMobile: i,
    matches: o ? c : void 0,
    getBreakpoint: s,
    isBreakpoint: r
  };
};
export {
  b as a,
  u
};
