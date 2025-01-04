import { jsxs as j, jsx as o } from "react/jsx-runtime";
import { forwardRef as S, useState as w } from "react";
import { Slider as R } from "@nextui-org/react";
const b = (e, r) => e.map(
  (t) => r ? new Intl.NumberFormat(void 0, r).format(t) : t
).join(" – "), h = ({
  position: e,
  content: r,
  className: t
}) => e === "none" ? null : /* @__PURE__ */ o(
  "p",
  {
    className: `text-small font-medium text-default-500 ${t} ${e === "top" ? "order-first" : "order-last"}`,
    children: r
  }
), v = S(
  ({
    sliderProps: e,
    initialValue: r = [0, 100],
    formatOptions: t,
    label: m,
    labelPosition: i = "bottom",
    formatValue: n,
    renderLabel: d,
    onChange: s,
    containerClassName: u,
    labelClassName: f
  }, x) => {
    const [a, p] = w(r), N = (l) => {
      const c = Array.isArray(l) ? l : [l];
      p(c), s == null || s(c);
    }, y = n ? n(a) : b(a, t), $ = d ? d(a) : `${m}: ${y}`;
    return /* @__PURE__ */ j(
      "div",
      {
        ref: x,
        className: `flex h-max w-full max-w-md flex-col items-start justify-center gap-2 ${u}`,
        children: [
          /* @__PURE__ */ o(
            h,
            {
              position: i,
              content: $,
              className: f
            }
          ),
          /* @__PURE__ */ o(
            R,
            {
              value: a,
              onChange: N,
              label: m,
              className: "max-w-md",
              formatOptions: t,
              ...e
            }
          )
        ]
      }
    );
  }
);
v.displayName = "RangeSlider";
export {
  v as RangeSlider
};
