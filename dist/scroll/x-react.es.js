/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as s } from "react";
import { ScrollShadow as f } from "@nextui-org/react";
const n = s(
  ({ width: o = "100%", height: r = "100%", style: m, ...t }, e) => {
    const p = {
      width: typeof o == "number" ? `${o}px` : o,
      height: typeof r == "number" ? `${r}px` : r,
      ...m
    };
    return /* @__PURE__ */ l.jsx(f, { ref: e, style: p, ...t });
  }
);
n.displayName = "Scroll";
export {
  n as Scroll
};
