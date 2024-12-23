/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as I, useState as b, useEffect as S, useCallback as h } from "react";
import { Progress as k, CircularProgress as v } from "@nextui-org/react";
const j = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: !0
}, z = I(
  ({
    // Custom props
    label: f,
    labelPosition: p = "top",
    containerClassName: u,
    labelClassName: o,
    // NextUI props
    value: n = 0,
    maxValue: r = 100,
    formatOptions: t = j.formatOptions,
    valueLabel: s,
    showValueLabel: c = j.showValueLabel,
    classNames: i,
    // Rest of NextUI props
    ...d
  }, x) => {
    const m = () => {
      const g = new Intl.NumberFormat(
        void 0,
        t
      ).format(n / r);
      return (s == null ? void 0 : s.toString()) || g;
    }, a = p === "none" ? null : /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${o}
      ${p === "top" ? "order-first" : "order-last"}
    `,
        children: [
          f && /* @__PURE__ */ l.jsx("span", { children: f }),
          c && /* @__PURE__ */ l.jsx("span", { children: m() })
        ]
      }
    ), P = {
      value: n,
      maxValue: r,
      formatOptions: t,
      showValueLabel: c,
      ...d,
      classNames: {
        ...i,
        base: `w-full ${(i == null ? void 0 : i.base) || ""}`
      }
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: x,
        className: `flex w-full max-w-md flex-col gap-2 ${u || ""}`,
        children: [
          a,
          /* @__PURE__ */ l.jsx(k, { ...j, ...P })
        ]
      }
    );
  }
);
z.displayName = "Progress";
const e = {
  color: "primary",
  size: "md",
  strokeWidth: 3,
  showValueLabel: !1,
  formatOptions: { style: "percent" },
  value: 0,
  minValue: 0,
  maxValue: 100,
  autoIncrement: !1,
  incrementInterval: 500,
  incrementStep: 10
}, C = I(
  ({
    // Auto-increment props
    autoIncrement: f = e.autoIncrement,
    incrementInterval: p = e.incrementInterval,
    incrementStep: u = e.incrementStep,
    onValueChange: o,
    // NextUI props
    value: n = e.value,
    minValue: r = e.minValue,
    maxValue: t = e.maxValue,
    formatOptions: s = e.formatOptions,
    valueLabel: c,
    classNames: i,
    ...d
  }, x) => {
    const [m, a] = b(n);
    S(() => {
      if (!f) {
        a(n);
        return;
      }
      const w = setInterval(() => {
        a((y) => {
          const $ = y >= t ? r : y + u;
          return o == null || o($), $;
        });
      }, p);
      return () => clearInterval(w);
    }, [
      f,
      n,
      p,
      u,
      t,
      r,
      o
    ]);
    const P = h(() => {
      if (c) return c;
      const w = (m - r) / (t - r);
      return new Intl.NumberFormat(void 0, s).format(w);
    }, [m, c, r, t, s]), g = {
      ...d,
      value: m,
      minValue: r,
      maxValue: t,
      formatOptions: s,
      valueLabel: P(),
      classNames: i
    };
    return /* @__PURE__ */ l.jsx(v, { ref: x, ...e, ...g });
  }
);
C.displayName = "CircularProgress";
export {
  C as CircularProgress,
  z as Progress
};
