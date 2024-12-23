/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as v, useState as h, useEffect as z } from "react";
import { Progress as E, CircularProgress as F } from "@nextui-org/react";
const j = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: !0
}, N = v(
  ({
    // Custom props
    label: c,
    labelPosition: i = "top",
    containerClassName: m,
    labelClassName: e,
    // NextUI props
    value: s = 0,
    maxValue: r = 100,
    formatOptions: t = j.formatOptions,
    valueLabel: o,
    showValueLabel: a = j.showValueLabel,
    classNames: n,
    // Rest of NextUI props
    ...p
  }, d) => {
    const x = () => {
      const f = new Intl.NumberFormat(
        void 0,
        t
      ).format(s / r);
      return (o == null ? void 0 : o.toString()) || f;
    }, P = i === "none" ? null : /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${e}
      ${i === "top" ? "order-first" : "order-last"}
    `,
        children: [
          c && /* @__PURE__ */ l.jsx("span", { children: c }),
          a && /* @__PURE__ */ l.jsx("span", { children: x() })
        ]
      }
    ), g = {
      value: s,
      maxValue: r,
      formatOptions: t,
      showValueLabel: a,
      ...p,
      classNames: {
        ...n,
        base: `w-full ${(n == null ? void 0 : n.base) || ""}`
      }
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: d,
        className: `flex w-full max-w-md flex-col gap-2 ${m || ""}`,
        children: [
          P,
          /* @__PURE__ */ l.jsx(E, { ...j, ...g })
        ]
      }
    );
  }
);
N.displayName = "Progress";
const u = {
  color: "primary",
  size: "md",
  strokeWidth: 3,
  showValueLabel: !1,
  formatOptions: { style: "percent" },
  value: 0,
  minValue: 0,
  maxValue: 100
}, y = {
  autoIncrement: !1,
  incrementInterval: 500,
  incrementStep: 10
}, O = v(
  ({
    // Auto-increment props
    autoIncrement: c = y.autoIncrement,
    incrementInterval: i = y.incrementInterval,
    incrementStep: m = y.incrementStep,
    onValueChange: e,
    // NextUI props
    value: s = u.value,
    minValue: r = u.minValue,
    maxValue: t = u.maxValue,
    formatOptions: o = u.formatOptions,
    valueLabel: a,
    classNames: n,
    showValueLabel: p,
    color: d,
    size: x,
    ...P
  }, g) => {
    const [f, I] = h(s);
    z(() => {
      if (!c) {
        I(s);
        return;
      }
      const w = setInterval(() => {
        I(($) => {
          const b = $ >= t ? r : $ + m;
          return e == null || e(b), b;
        });
      }, i);
      return () => clearInterval(w);
    }, [
      c,
      s,
      i,
      m,
      t,
      r,
      e
    ]);
    const S = {
      ...u,
      ...P,
      ref: g,
      value: f,
      minValue: r,
      maxValue: t,
      formatOptions: o,
      valueLabel: (() => {
        if (a) return a;
        const w = (f - r) / (t - r);
        return new Intl.NumberFormat(void 0, o).format(w);
      })(),
      showValueLabel: p,
      color: d,
      size: x,
      classNames: n
    };
    return /* @__PURE__ */ l.jsx(F, { ...S });
  }
);
O.displayName = "CircularProgress";
export {
  O as CircularProgress,
  N as Progress
};
