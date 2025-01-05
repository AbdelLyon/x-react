import { useMediaQuery as i } from "../useMediaQuery/x-react.es.js";
const o = {
  desktop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)"
}, h = (t) => {
  const e = i(o.desktop), s = i(o.tablet), n = !e && !s, r = i(
    typeof t == "string" && t.length > 0 ? t : ""
  ), p = () => e === !0 ? "isDesktop" : s === !0 ? "isTablet" : "isMobile", a = (d) => ({
    isDesktop: e,
    isTablet: s,
    isMobile: n
  })[d] === !0, c = typeof t == "string" && t.length > 0;
  return {
    isDesktop: e,
    isTablet: s,
    isMobile: n,
    matches: c ? r : void 0,
    getBreakpoint: p,
    isBreakpoint: a
  };
};
export {
  h as useResponsive
};
