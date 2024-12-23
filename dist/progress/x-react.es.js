/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as b, useState as v, useEffect as S } from "react";
import { Progress as h, CircularProgress as z } from "@nextui-org/react";
const w = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: !0
}, E = b(
  ({
    // Custom props
    label: c,
    labelPosition: i = "top",
    containerClassName: m,
    labelClassName: e,
    // NextUI props
    value: s = 0,
    maxValue: r = 100,
    formatOptions: t = w.formatOptions,
    valueLabel: o,
    showValueLabel: a = w.showValueLabel,
    classNames: n,
    // Rest of NextUI props
    ...d
  }, x) => {
    const f = () => {
      const P = new Intl.NumberFormat(
        void 0,
        t
      ).format(s / r);
      return (o == null ? void 0 : o.toString()) || P;
    }, p = i === "none" ? null : /* @__PURE__ */ l.jsxs(
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
          a && /* @__PURE__ */ l.jsx("span", { children: f() })
        ]
      }
    ), y = {
      value: s,
      maxValue: r,
      formatOptions: t,
      showValueLabel: a,
      ...d,
      classNames: {
        ...n,
        base: `w-full ${(n == null ? void 0 : n.base) || ""}`
      }
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: x,
        className: `flex w-full max-w-md flex-col gap-2 ${m || ""}`,
        children: [
          p,
          /* @__PURE__ */ l.jsx(h, { ...w, ...y })
        ]
      }
    );
  }
);
E.displayName = "Progress";
const u = {
  color: "primary",
  size: "md",
  strokeWidth: 3,
  showValueLabel: !1,
  formatOptions: { style: "percent" },
  value: 0,
  minValue: 0,
  maxValue: 100
}, j = {
  autoIncrement: !1,
  incrementInterval: 500,
  incrementStep: 10
}, F = b(
  ({
    // Auto-increment props
    autoIncrement: c = j.autoIncrement,
    incrementInterval: i = j.incrementInterval,
    incrementStep: m = j.incrementStep,
    onValueChange: e,
    // NextUI props
    value: s = u.value,
    minValue: r = u.minValue,
    maxValue: t = u.maxValue,
    formatOptions: o = u.formatOptions,
    valueLabel: a,
    classNames: n,
    ...d
  }, x) => {
    const [f, p] = v(s);
    S(() => {
      if (!c) {
        p(s);
        return;
      }
      const g = setInterval(() => {
        p((I) => {
          const $ = I >= t ? r : I + m;
          return e == null || e($), $;
        });
      }, i);
      return () => clearInterval(g);
    }, [
      c,
      s,
      i,
      m,
      t,
      r,
      e
    ]);
    const P = {
      ...d,
      ...u,
      ref: x,
      value: f,
      minValue: r,
      maxValue: t,
      formatOptions: o,
      valueLabel: (() => {
        if (a) return a;
        const g = (f - r) / (t - r);
        return new Intl.NumberFormat(void 0, o).format(g);
      })(),
      classNames: n
    };
    return /* @__PURE__ */ l.jsx(z, { ...P });
  }
);
F.displayName = "CircularProgress";
export {
  F as CircularProgress,
  E as Progress
};
