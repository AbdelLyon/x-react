/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as C, useState as S, useEffect as h, useCallback as k } from "react";
import { Progress as z, CircularProgress as A } from "@nextui-org/react";
const u = {
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
}, D = C(
  ({
    // Props spécifiques au composant
    label: i,
    labelPosition: n = "top",
    containerClassName: x,
    labelClassName: f,
    // Props NextUI
    value: e = 0,
    maxValue: l = u.maxValue,
    formatOptions: a = u.formatOptions,
    valueLabel: t,
    showValueLabel: s = u.showValueLabel,
    classNames: r,
    ...w
  }, j) => {
    const d = () => {
      const P = new Intl.NumberFormat(
        void 0,
        a
      ).format(e / l);
      return (t == null ? void 0 : t.toString()) || P;
    }, c = n === "none" ? null : /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `
        flex items-center justify-between
        text-small font-medium text-default-500
        ${f}
        ${n === "top" ? "order-first" : "order-last"}
      `,
        children: [
          i && /* @__PURE__ */ o.jsx("span", { children: i }),
          s && /* @__PURE__ */ o.jsx("span", { children: d() })
        ]
      }
    ), p = {
      ...u,
      ...w,
      value: e,
      maxValue: l,
      classNames: {
        ...r,
        base: `w-full ${(r == null ? void 0 : r.base) || ""}`
      }
    };
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: j,
        className: `flex w-full max-w-md flex-col gap-2 ${x || ""}`,
        children: [
          c,
          /* @__PURE__ */ o.jsx(z, { ...p })
        ]
      }
    );
  }
);
D.displayName = "Progress";
const O = C(
  ({
    // Appearance
    color: i = "primary",
    size: n = "md",
    strokeWidth: x = 3,
    // Content
    label: f,
    valueLabel: e,
    showValueLabel: l = !1,
    formatOptions: a = { style: "percent" },
    // Behavior
    value: t = 0,
    minValue: s = 0,
    maxValue: r = 100,
    isIndeterminate: w = !1,
    isStriped: j = !1,
    // Auto-increment
    autoIncrement: d = !1,
    incrementInterval: c = 500,
    incrementStep: p = 10,
    // Styling
    className: P,
    classNames: E,
    // Callback
    onValueChange: m,
    ...F
  }, N) => {
    const [g, b] = S(t);
    h(() => {
      if (!d) {
        b(t);
        return;
      }
      const y = setInterval(() => {
        b(($) => {
          const I = $ >= r ? s : $ + p;
          return m == null || m(I), I;
        });
      }, c);
      return () => clearInterval(y);
    }, [
      d,
      t,
      c,
      p,
      r,
      s,
      m
    ]);
    const R = k(() => {
      if (e) return e;
      const y = (g - s) / (r - s);
      return new Intl.NumberFormat(void 0, a).format(y);
    }, [g, e, s, r, a]);
    return /* @__PURE__ */ o.jsx(
      A,
      {
        ref: N,
        color: i,
        size: n,
        strokeWidth: x,
        "aria-label": f,
        label: f,
        valueLabel: R(),
        showValueLabel: l,
        value: g,
        minValue: s,
        maxValue: r,
        isIndeterminate: w,
        isStriped: j,
        className: P,
        classNames: E,
        ...F
      }
    );
  }
);
O.displayName = "CircularProgress";
export {
  O as CircularProgress,
  D as Progress
};
