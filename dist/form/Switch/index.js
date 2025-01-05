import { jsx as c } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { Switch as i } from "@nextui-org/react";
const n = f(
  ({ width: o, height: r, style: t, ...e }, m) => {
    const p = {
      width: typeof o == "number" ? `${o}px` : o,
      height: typeof r == "number" ? `${r}px` : r,
      ...t
    };
    return /* @__PURE__ */ c(i, { ref: m, style: p, ...e });
  }
);
n.displayName = "Switch";
export {
  n as Switch
};
//# sourceMappingURL=index.js.map
