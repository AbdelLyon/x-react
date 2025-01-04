/* empty css                */
import { j as a } from "../jsx-runtime-BFln9wzo.js";
import { forwardRef as $, useState as R } from "react";
import { Slider as S } from "@nextui-org/react";
const w = (e, r) => e.map(
  (t) => r ? new Intl.NumberFormat(void 0, r).format(t) : t
).join(" – "), b = ({
  position: e,
  content: r,
  className: t
}) => e === "none" ? null : /* @__PURE__ */ a.jsx(
  "p",
  {
    className: `text-small font-medium text-default-500 ${t} ${e === "top" ? "order-first" : "order-last"}`,
    children: r
  }
), h = $(
  ({
    sliderProps: e,
    initialValue: r = [0, 100],
    formatOptions: t,
    label: l,
    labelPosition: c = "bottom",
    formatValue: n,
    renderLabel: d,
    onChange: o,
    containerClassName: u,
    labelClassName: x
  }, f) => {
    const [s, p] = R(r), j = (m) => {
      const i = Array.isArray(m) ? m : [m];
      p(i), o == null || o(i);
    }, N = n ? n(s) : w(s, t), y = d ? d(s) : `${l}: ${N}`;
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: f,
        className: `flex h-max w-full max-w-md flex-col items-start justify-center gap-2 ${u}`,
        children: [
          /* @__PURE__ */ a.jsx(
            b,
            {
              position: c,
              content: y,
              className: x
            }
          ),
          /* @__PURE__ */ a.jsx(
            S,
            {
              value: s,
              onChange: j,
              label: l,
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
h.displayName = "RangeSlider";
export {
  h as RangeSlider
};
