/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as v, useState as z, useEffect as E } from "react";
import { Progress as F, CircularProgress as L } from "@nextui-org/react";
const j = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: !0
}, O = v(
  ({
    label: u,
    labelPosition: c = "top",
    containerClassName: p,
    labelClassName: o,
    value: s = 0,
    maxValue: t = 100,
    formatOptions: e = j.formatOptions,
    valueLabel: n,
    showValueLabel: i = j.showValueLabel,
    classNames: r,
    ...m
  }, d) => {
    const x = () => {
      const a = new Intl.NumberFormat(
        void 0,
        e
      ).format(s / t);
      return typeof n == "string" && n.trim() !== "" ? n : a;
    }, P = c === "none" ? null : /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${o ?? ""}
      ${c === "top" ? "order-first" : "order-last"}
    `,
        children: [
          u !== null && /* @__PURE__ */ l.jsx("span", { children: u }),
          i && /* @__PURE__ */ l.jsx("span", { children: x() })
        ]
      }
    ), g = {
      value: s,
      maxValue: t,
      formatOptions: e,
      showValueLabel: i,
      ...m,
      classNames: {
        ...r,
        base: `w-full ${typeof (r == null ? void 0 : r.base) == "string" && (r == null ? void 0 : r.base)}`
      }
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: d,
        className: `flex w-full max-w-md flex-col gap-2 ${p}`,
        children: [
          P,
          /* @__PURE__ */ l.jsx(F, { ...j, ...g })
        ]
      }
    );
  }
);
O.displayName = "Progress";
const f = {
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
}, R = v(
  ({
    // Auto-increment props
    autoIncrement: u = y.autoIncrement,
    incrementInterval: c = y.incrementInterval,
    incrementStep: p = y.incrementStep,
    onValueChange: o,
    // NextUI props
    value: s = f.value,
    minValue: t = f.minValue,
    maxValue: e = f.maxValue,
    formatOptions: n = f.formatOptions,
    valueLabel: i,
    classNames: r,
    showValueLabel: m,
    color: d,
    size: x,
    ...P
  }, g) => {
    const [a, b] = z(s);
    E(() => {
      if (!u) {
        b(s);
        return;
      }
      const w = setInterval(() => {
        b((I) => {
          const $ = I >= e ? t : I + p;
          return o == null || o($), $;
        });
      }, c);
      return () => clearInterval(w);
    }, [
      u,
      s,
      c,
      p,
      e,
      t,
      o
    ]);
    const h = {
      ...f,
      ...P,
      ref: g,
      value: a,
      minValue: t,
      maxValue: e,
      formatOptions: n,
      valueLabel: (() => {
        if (i != null)
          return i;
        const w = (a - t) / (e - t);
        return new Intl.NumberFormat(void 0, n).format(w);
      })(),
      showValueLabel: m,
      color: d,
      size: x,
      classNames: r
    };
    return /* @__PURE__ */ l.jsx(L, { ...h });
  }
);
R.displayName = "CircularProgress";
export {
  R as CircularProgress,
  O as Progress
};
