/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as f } from "react";
import { cn as p } from "../utils/x-react.es.js";
const b = {
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
}, u = f(
  ({
    children: x,
    as: s = "p",
    variant: l = "base",
    weight: t,
    align: e,
    color: o,
    truncate: m,
    className: n,
    ...r
  }, d) => {
    const i = p(
      b[l],
      t && c[t],
      e && h[e],
      o !== void 0 && `text-${o}`,
      m !== void 0 && "truncate",
      n
    );
    return /* @__PURE__ */ a.jsx(s, { ref: d, className: i, ...r, children: x });
  }
);
u.displayName = "Typography";
export {
  u as Typography
};
