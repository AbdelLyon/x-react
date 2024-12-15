/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as $, useState as R } from "react";
import { Slider as S } from "@nextui-org/react";
const w = $(
  ({
    sliderProps: c,
    initialValue: f = [0, 100],
    formatOptions: a,
    label: l,
    labelPosition: m = "bottom",
    formatValue: d,
    renderLabel: u,
    onChange: s,
    containerClassName: i,
    labelClassName: x
  }, p) => {
    const [r, n] = R(f), j = (t) => {
      const e = Array.isArray(t) ? t : [t];
      n(e), s == null || s(e);
    }, y = d ? d(r) : ((t) => t.map(
      (e) => a ? new Intl.NumberFormat(void 0, a).format(e) : e
    ).join(" – "))(r), N = u ? u(r) : `${l}: ${y}`;
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: p,
        className: `
          flex flex-col gap-2 w-full h-full max-w-md 
          items-start justify-center
          ${i}
        `,
        children: [
          (m === "top" || m === "bottom") && /* @__PURE__ */ o.jsx(
            "p",
            {
              className: `
              text-default-500 font-medium text-small
              ${x}
              ${m === "top" ? "order-first" : "order-last"}
            `,
              children: N
            }
          ),
          /* @__PURE__ */ o.jsx(
            S,
            {
              value: r,
              onChange: j,
              label: l,
              className: "max-w-md",
              formatOptions: a,
              ...c
            }
          )
        ]
      }
    );
  }
);
w.displayName = "RangeSlider";
export {
  w as RangeSlider
};
