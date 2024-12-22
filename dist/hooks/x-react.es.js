export * from "@tanstack/react-query";
import { u } from "../useTheme-ery4R1ul.js";
import { u as f } from "../useMediaQuery-A9Oq9utn.js";
const r = (o = {}) => {
  const { navbar: e, sidebar: a } = o;
  return {
    navbar: e ? {
      className: "fixed top-0 z-40",
      ...e
    } : void 0,
    sidebar: a ? {
      className: "fixed z-30",
      ...a
    } : void 0
  };
};
export {
  r as useLayoutConfig,
  f as useMediaQuery,
  u as useTheme
};
