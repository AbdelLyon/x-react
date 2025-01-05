import { jsxs as y, jsx as n } from "react/jsx-runtime";
import { forwardRef as $, useState as j } from "react";
import { Slider as C } from "@nextui-org/react";
const S = (e, r) => e.map(
  (t) => r ? new Intl.NumberFormat(void 0, r).format(t) : t
).join(" – "), w = ({
  position: e,
  content: r,
  className: t
}) => e === "none" ? null : /* @__PURE__ */ n(
  "p",
  {
    className: `text-small font-medium text-default-500 ${t} ${e === "top" ? "order-first" : "order-last"}`,
    children: r
  }
), R = $(
  ({
    sliderProps: e,
    initialValue: r = [0, 100],
    formatOptions: t,
    label: s,
    labelPosition: c = "bottom",
    formatValue: l,
    renderLabel: m,
    onChange: i,
    containerClassName: u,
    labelClassName: f
  }, x) => {
    const [a, p] = j(r), h = (o) => {
      const d = Array.isArray(o) ? o : [o];
      p(d), i?.(d);
    }, N = l ? l(a) : S(a, t), g = m ? m(a) : `${s}: ${N}`;
    return /* @__PURE__ */ y(
      "div",
      {
        ref: x,
        className: `flex h-max w-full max-w-md flex-col items-start justify-center gap-2 ${u}`,
        children: [
          /* @__PURE__ */ n(
            w,
            {
              position: c,
              content: g,
              className: f
            }
          ),
          /* @__PURE__ */ n(
            C,
            {
              value: a,
              onChange: h,
              label: s,
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
R.displayName = "RangeSlider";
export {
  R as RangeSlider
};
//# sourceMappingURL=index.js.map
