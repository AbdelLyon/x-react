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
    as: l = "p",
    variant: s = "base",
    weight: e,
    align: o,
    color: t,
    truncate: m,
    className: n,
    ...d
  }, i) => {
    const r = p(
      b[s],
      e && c[e],
      o && h[o],
      t != null && `text-${t}`,
      m !== void 0 && t !== null && "truncate",
      n
    );
    return /* @__PURE__ */ a.jsx(l, { ref: i, className: r, ...d, children: x });
  }
);
u.displayName = "Typography";
export {
  u as Typography
};
