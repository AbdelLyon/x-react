import { jsx as m } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { cn as a } from "../../../utils/utils.es.js";
const c = o(
  ({ children: r, maxWidth: e = "lg", className: s }, n) => {
    const l = a(
      "mx-auto px-4",
      {
        "max-w-screen-sm": e === "sm",
        "max-w-screen-md": e === "md",
        "max-w-screen-lg": e === "lg",
        "max-w-screen-xl": e === "xl",
        "max-w-screen-2xl": e === "2xl",
        "max-w-full": e === "full"
      },
      s
    );
    return /* @__PURE__ */ m("div", { ref: n, className: l, children: r });
  }
);
c.displayName = "Container";
export {
  c as Container
};
