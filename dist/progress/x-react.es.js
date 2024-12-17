/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as v } from "react";
import { Progress as P } from "@nextui-org/react";
const R = v(
  ({
    label: s,
    labelPosition: t = "top",
    size: l = "md",
    color: m = "primary",
    radius: d = "full",
    value: o = 0,
    minValue: a = 0,
    maxValue: f = 100,
    formatOptions: n = { style: "percent" },
    valueLabel: p,
    showValueLabel: i = !0,
    isIndeterminate: x = !1,
    isStriped: u = !1,
    isDisabled: c = !1,
    disableAnimation: j = !1,
    containerClassName: w,
    labelClassName: g,
    classNames: e,
    ...$
  }, h) => {
    const y = () => {
      const b = new Intl.NumberFormat(
        void 0,
        n
      ).format(o / f);
      return p || b;
    };
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: h,
        className: `
          flex flex-col gap-2 w-full max-w-md
          ${w}
        `,
        children: [
          (t === "top" || t === "bottom") && /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: `
              text-default-500 font-medium text-small
              flex justify-between items-center
              ${g}
              ${t === "top" ? "order-first" : "order-last"}
            `,
              children: [
                s && /* @__PURE__ */ r.jsx("span", { children: s }),
                i && /* @__PURE__ */ r.jsx("span", { children: y() })
              ]
            }
          ),
          /* @__PURE__ */ r.jsx(
            P,
            {
              value: o,
              minValue: a,
              maxValue: f,
              size: l,
              color: m,
              radius: d,
              isIndeterminate: x,
              isStriped: u,
              isDisabled: c,
              disableAnimation: j,
              classNames: {
                ...e,
                base: `w-full ${(e == null ? void 0 : e.base) || ""}`
              },
              ...$
            }
          )
        ]
      }
    );
  }
);
R.displayName = "Progress";
export {
  R as Progress
};
