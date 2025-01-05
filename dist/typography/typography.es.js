import "../image/image.es.js";
import { jsx as f } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { cn as b } from "../utils/utils.es.js";
const p = {
  h1: "text-4xl md:text-5xl font-bold",
  h2: "text-3xl md:text-4xl font-bold",
  h3: "text-2xl md:text-3xl font-bold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg md:text-xl font-semibold",
  h6: "text-base md:text-lg font-semibold",
  base: "text-base",
  small: "text-sm",
  caption: "text-xs",
  overline: "text-xs uppercase tracking-wider"
}, c = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
}, h = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify"
}, g = a(
  ({
    children: x,
    as: l = "p",
    variant: s = "base",
    weight: t,
    align: e,
    color: o,
    truncate: m,
    className: n,
    ...r
  }, d) => {
    const i = b(
      p[s],
      t && c[t],
      e && h[e],
      o !== void 0 && `text-${o}`,
      m !== void 0 && "truncate",
      n
    );
    return /* @__PURE__ */ f(l, { ref: d, className: i, ...r, children: x });
  }
);
g.displayName = "Typography";
export {
  g as Typography
};
