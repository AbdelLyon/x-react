/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as E, useState as h, useEffect as k, useCallback as z } from "react";
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
}, D = E(
  ({
    // Props spécifiques au composant
    label: n,
    labelPosition: l = i.labelPosition,
    containerClassName: x,
    labelClassName: f,
    // Props NextUI
    value: e = 0,
    maxValue: a = i.maxValue,
    formatOptions: d = i.formatOptions,
    valueLabel: t,
    showValueLabel: s = i.showValueLabel,
    classNames: r,
    ...P
  }, w) => {
    const c = () => {
      const j = new Intl.NumberFormat(
        void 0,
        d
      ).format(e / a);
      return (t == null ? void 0 : t.toString()) || j;
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
          s && /* @__PURE__ */ o.jsx("span", { children: c() })
        ]
      }
    ), u = {
      ...i,
      ...P,
      value: e,
      maxValue: a,
      classNames: {
        ...r,
        base: `w-full ${(r == null ? void 0 : r.base) || ""}`
      }
    };
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: w,
        className: `flex w-full max-w-md flex-col gap-2 ${x || ""}`,
        children: [
          p(),
          /* @__PURE__ */ o.jsx(A, { ...u })
        ]
      }
    );
  }
);
D.displayName = "Progress";
const O = E(
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
    value: t = 0,
    minValue: s = 0,
    maxValue: r = 100,
    isIndeterminate: P = !1,
    isStriped: w = !1,
    // Auto-increment
    autoIncrement: c = !1,
    incrementInterval: p = 500,
    incrementStep: u = 10,
    // Styling
    className: j,
    classNames: F,
    // Callback
    onValueChange: m,
    ...N
  }, R) => {
    const [b, y] = h(t);
    k(() => {
      if (!c) {
        y(t);
        return;
      }
      const g = setInterval(() => {
        y(($) => {
          const I = $ >= r ? s : $ + u;
          return m == null || m(I), I;
        });
      }, p);
      return () => clearInterval(g);
    }, [
      c,
      t,
      p,
      u,
      r,
      s,
      m
    ]);
    const S = z(() => {
      if (e) return e;
      const g = (b - s) / (r - s);
      return new Intl.NumberFormat(void 0, d).format(g);
    }, [b, e, s, r, d]);
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
        value: b,
        minValue: s,
        maxValue: r,
        isIndeterminate: P,
        isStriped: w,
        className: j,
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
