/* empty css                */
import { j as i } from "../jsx-runtime-BFln9wzo.js";
import { forwardRef as $, useState as h, useEffect as z } from "react";
import { Progress as E, CircularProgress as F } from "@nextui-org/react";
const j = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: !0
}, O = $(
  ({
    label: l,
    labelPosition: a = "top",
    containerClassName: f,
    labelClassName: s,
    value: o = 0,
    maxValue: r = 100,
    formatOptions: e = j.formatOptions,
    valueLabel: n,
    showValueLabel: c = j.showValueLabel,
    classNames: t,
    ...p
  }, d) => {
    const x = () => {
      const m = new Intl.NumberFormat(
        void 0,
        e
      ).format(o / r);
      return typeof n == "string" && n.trim() !== "" ? n : m;
    }, P = a === "none" ? void 0 : /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${s ?? ""}
      ${a === "top" ? "order-first" : "order-last"}
    `,
        children: [
          l !== void 0 && /* @__PURE__ */ i.jsx("span", { children: l }),
          c && /* @__PURE__ */ i.jsx("span", { children: x() })
        ]
      }
    ), g = {
      value: o,
      maxValue: r,
      formatOptions: e,
      showValueLabel: c,
      ...p,
      classNames: {
        ...t,
        base: `w-full ${typeof (t == null ? void 0 : t.base) == "string" && t.base}`
      }
    };
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: d,
        className: `flex w-full max-w-md flex-col gap-2 ${f}`,
        children: [
          P,
          /* @__PURE__ */ i.jsx(E, { ...j, ...g })
        ]
      }
    );
  }
);
O.displayName = "Progress";
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
}, R = $(
  ({
    // Auto-increment props
    autoIncrement: l = y.autoIncrement,
    incrementInterval: a = y.incrementInterval,
    incrementStep: f = y.incrementStep,
    onValueChange: s,
    // NextUI props
    value: o = u.value,
    minValue: r = u.minValue,
    maxValue: e = u.maxValue,
    formatOptions: n = u.formatOptions,
    valueLabel: c,
    classNames: t,
    showValueLabel: p,
    color: d,
    size: x,
    ...P
  }, g) => {
    const [m, b] = h(o);
    z(() => {
      if (!l) {
        b(o);
        return;
      }
      const w = setInterval(() => {
        b((v) => {
          const I = v >= e ? r : v + f;
          return s == null || s(I), I;
        });
      }, a);
      return () => clearInterval(w);
    }, [
      l,
      o,
      a,
      f,
      e,
      r,
      s
    ]);
    const L = {
      ...u,
      ...P,
      ref: g,
      value: m,
      minValue: r,
      maxValue: e,
      formatOptions: n,
      valueLabel: (() => {
        if (c !== void 0)
          return c;
        const w = (m - r) / (e - r);
        return new Intl.NumberFormat(void 0, n).format(w);
      })(),
      showValueLabel: p,
      color: d,
      size: x,
      classNames: t
    };
    return /* @__PURE__ */ i.jsx(F, { ...L });
  }
);
R.displayName = "CircularProgress";
export {
  R as CircularProgress,
  O as Progress
};
