/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as I, useState as h, useEffect as k, useCallback as z } from "react";
import { Progress as A, CircularProgress as C } from "@nextui-org/react";
const i = {
  labelPosition: "top",
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: !0,
  isIndeterminate: !1,
  isStriped: !1,
  isDisabled: !1,
  disableAnimation: !1
}, D = I(
  ({
    label: n,
    labelPosition: l = i.labelPosition,
    containerClassName: x,
    labelClassName: f,
    value: e = 0,
    maxValue: a = i.maxValue,
    formatOptions: d = i.formatOptions,
    valueLabel: s,
    showValueLabel: t = i.showValueLabel,
    classNames: r,
    ...w
  }, P) => {
    const c = () => {
      const u = new Intl.NumberFormat(
        void 0,
        d
      ).format(e / a);
      return (s == null ? void 0 : s.toString()) || u;
    }, p = () => l === "none" ? null : /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `
          flex items-center justify-between
          text-small font-medium text-default-500
          ${f}
          ${l === "top" ? "order-first" : "order-last"}
        `,
        children: [
          n && /* @__PURE__ */ o.jsx("span", { children: n }),
          t && /* @__PURE__ */ o.jsx("span", { children: c() })
        ]
      }
    );
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: P,
        className: `
        flex w-full max-w-md flex-col gap-2
        ${x}
      `,
        children: [
          p(),
          /* @__PURE__ */ o.jsx(
            A,
            {
              ...i,
              ...w,
              value: e,
              maxValue: a,
              classNames: {
                ...r,
                base: `w-full ${(r == null ? void 0 : r.base) || ""}`
              }
            }
          )
        ]
      }
    );
  }
);
D.displayName = "Progress";
const O = I(
  ({
    // Appearance
    color: n = "primary",
    size: l = "md",
    strokeWidth: x = 3,
    // Content
    label: f,
    valueLabel: e,
    showValueLabel: a = !1,
    formatOptions: d = { style: "percent" },
    // Behavior
    value: s = 0,
    minValue: t = 0,
    maxValue: r = 100,
    isIndeterminate: w = !1,
    isStriped: P = !1,
    // Auto-increment
    autoIncrement: c = !1,
    incrementInterval: p = 500,
    incrementStep: u = 10,
    // Styling
    className: E,
    classNames: F,
    // Callback
    onValueChange: m,
    ...N
  }, R) => {
    const [j, g] = h(s);
    k(() => {
      if (!c) {
        g(s);
        return;
      }
      const b = setInterval(() => {
        g((y) => {
          const $ = y >= r ? t : y + u;
          return m == null || m($), $;
        });
      }, p);
      return () => clearInterval(b);
    }, [
      c,
      s,
      p,
      u,
      r,
      t,
      m
    ]);
    const S = z(() => {
      if (e) return e;
      const b = (j - t) / (r - t);
      return new Intl.NumberFormat(void 0, d).format(b);
    }, [j, e, t, r, d]);
    return /* @__PURE__ */ o.jsx(
      C,
      {
        ref: R,
        color: n,
        size: l,
        strokeWidth: x,
        "aria-label": f,
        label: f,
        valueLabel: S(),
        showValueLabel: a,
        value: j,
        minValue: t,
        maxValue: r,
        isIndeterminate: w,
        isStriped: P,
        className: E,
        classNames: F,
        ...N
      }
    );
  }
);
O.displayName = "CircularProgress";
export {
  O as CircularProgress,
  D as Progress
};
