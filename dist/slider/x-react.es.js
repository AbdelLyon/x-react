import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as $, useState as R } from "react";
import { Slider as S } from "@nextui-org/react";
const w = $(
  ({
    sliderProps: u,
    initialValue: f = [0, 100],
    formatOptions: a,
    label: l,
    labelPosition: m = "bottom",
    formatValue: d,
    renderLabel: c,
    onChange: s,
    containerClassName: x,
    labelClassName: i
  }, n) => {
    const [r, p] = R(f), j = (t) => {
      const e = Array.isArray(t) ? t : [t];
      p(e), s == null || s(e);
    }, y = d ? d(r) : ((t) => t.map(
      (e) => a ? new Intl.NumberFormat(void 0, a).format(e) : e
    ).join(" – "))(r), N = c ? c(r) : `${l}: ${y}`;
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: n,
        className: `
          flex flex-col gap-2 w-full h-max max-w-md 
          items-start justify-center
          ${x}
        `,
        children: [
          (m === "top" || m === "bottom") && /* @__PURE__ */ o.jsx(
            "p",
            {
              className: `
              text-default-500 font-medium text-small
              ${i}
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
              ...u
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
