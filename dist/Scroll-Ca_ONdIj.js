import { j as l } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as s } from "react";
import { ScrollShadow as f } from "@nextui-org/react";
const n = s(
  ({ width: o = "100%", height: r = "100%", style: e, ...m }, t) => {
    const p = {
      width: typeof o == "number" ? `${o}px` : o,
      height: typeof r == "number" ? `${r}px` : r,
      ...e
    };
    return /* @__PURE__ */ l.jsx(f, { ref: t, style: p, ...m });
  }
);
n.displayName = "Scroll";
export {
  n as S
};
