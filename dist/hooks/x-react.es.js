export * from "@tanstack/react-query";
import { u } from "../useTheme-ery4R1ul.js";
import { u as n, a as f } from "../useResponsive-C97V3nlv.js";
const o = (a = {}) => {
  const { navbar: e, sidebar: s } = a;
  return {
    navbar: e ? {
      className: "fixed top-0 z-40",
      ...e
    } : void 0,
    sidebar: s ? {
      className: "fixed z-30",
      ...s
    } : void 0
  };
};
export {
  o as useLayoutConfig,
  n as useMediaQuery,
  f as useResponsive,
  u as useTheme
};
