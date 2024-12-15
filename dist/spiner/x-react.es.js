/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as u } from "react";
import { Spinner as d } from "@nextui-org/react";
const g = u(
  ({
    // Label configuration
    label: r,
    labelPosition: s = "right",
    labelColor: t = "foreground",
    color: n = "default",
    size: o = "md",
    containerClassName: i,
    labelClassName: f,
    disableAnimation: a = !1,
    strokeWidth: c = 4,
    ...m
  }, x) => {
    const l = () => {
      switch (s) {
        case "top":
          return "flex-col";
        case "bottom":
          return "flex-col-reverse";
        case "left":
          return "flex-row-reverse";
        case "right":
          return "flex-row";
      }
    }, p = () => t === "foreground" ? "text-foreground" : `text-${t}`;
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: x,
        className: `
          flex items-center justify-center gap-2
          ${l()}
          ${i}
        `,
        children: [
          /* @__PURE__ */ e.jsx(
            d,
            {
              color: n,
              size: o,
              disableAnimation: a,
              strokeWidth: c,
              ...m
            }
          ),
          r && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: `
              font-medium text-sm
              ${p()}
              ${f}
            `,
              children: r
            }
          )
        ]
      }
    );
  }
);
g.displayName = "Spinner";
export {
  g as Spinner
};
