import { jsx as o } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { cn as c } from "../../utils/x-react.es.js";
const p = a(
  ({ children: r, spacing: s = 4, align: e = "start", justify: t = "start", className: n }, m) => /* @__PURE__ */ o(
    "div",
    {
      ref: m,
      className: c(
        "flex flex-col",
        `gap-${s}`,
        {
          "items-start": e === "start",
          "items-center": e === "center",
          "items-end": e === "end",
          "justify-start": t === "start",
          "justify-center": t === "center",
          "justify-end": t === "end",
          "justify-between": t === "between"
        },
        n
      ),
      children: r
    }
  )
);
export {
  p as Stack
};
