import { jsx as s } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { cn as c } from "../../../utils/utils.es.js";
const f = p(
  ({ children: m, spacing: o = "md", className: r }, t) => {
    const e = c(
      {
        "py-4": o === "sm",
        "py-8": o === "md",
        "py-12": o === "lg",
        "py-16": o === "xl"
      },
      r
    );
    return /* @__PURE__ */ s("section", { ref: t, className: e, children: m });
  }
);
f.displayName = "Section";
export {
  f as Section
};
