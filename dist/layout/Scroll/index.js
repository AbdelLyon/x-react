import { jsx as t } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { ScrollShadow as c } from "@nextui-org/react";
const n = f(
  ({ width: o = "100%", height: r = "100%", style: e, ...m }, l) => {
    const p = {
      width: typeof o == "number" ? `${o}px` : o,
      height: typeof r == "number" ? `${r}px` : r,
      ...e
    };
    return /* @__PURE__ */ t(c, { ref: l, style: p, ...m });
  }
);
n.displayName = "Scroll";
export {
  n as Scroll
};
//# sourceMappingURL=index.js.map
