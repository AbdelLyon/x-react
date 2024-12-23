/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as I, useState as S, useEffect as h, useCallback as k } from "react";
import { Progress as z, CircularProgress as A } from "@nextui-org/react";
const g = {
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
    label: i,
    labelPosition: f = "top",
    containerClassName: u,
    labelClassName: n,
    value: e = 0,
    maxValue: l = 100,
    formatOptions: d = g.formatOptions,
    valueLabel: t,
    showValueLabel: s = g.showValueLabel,
    classNames: r,
    ...x
  }, w) => {
    const a = () => {
      const p = new Intl.NumberFormat(
        void 0,
        d
      ).format(e / l);
      return (t == null ? void 0 : t.toString()) || p;
    }, c = f === "none" ? null : /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `
     flex items-center justify-between
     text-small font-medium text-default-500
     ${n}
     ${f === "top" ? "order-first" : "order-last"}
   `,
        children: [
          i && /* @__PURE__ */ o.jsx("span", { children: i }),
          s && /* @__PURE__ */ o.jsx("span", { children: a() })
        ]
      }
    );
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: w,
        className: `flex w-full max-w-md flex-col gap-2 ${u || ""}`,
        children: [
          c,
          /* @__PURE__ */ o.jsx(
            z,
            {
              ...g,
              ...x,
              value: e,
              maxValue: l,
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
    color: i = "primary",
    size: f = "md",
    strokeWidth: u = 3,
    // Content
    label: n,
    valueLabel: e,
    showValueLabel: l = !1,
    formatOptions: d = { style: "percent" },
    // Behavior
    value: t = 0,
    minValue: s = 0,
    maxValue: r = 100,
    isIndeterminate: x = !1,
    isStriped: w = !1,
    // Auto-increment
    autoIncrement: a = !1,
    incrementInterval: c = 500,
    incrementStep: p = 10,
    // Styling
    className: C,
    classNames: E,
    // Callback
    onValueChange: m,
    ...F
  }, N) => {
    const [j, y] = S(t);
    h(() => {
      if (!a) {
        y(t);
        return;
      }
      const P = setInterval(() => {
        y((b) => {
          const $ = b >= r ? s : b + p;
          return m == null || m($), $;
        });
      }, c);
      return () => clearInterval(P);
    }, [
      a,
      t,
      c,
      p,
      r,
      s,
      m
    ]);
    const R = k(() => {
      if (e) return e;
      const P = (j - s) / (r - s);
      return new Intl.NumberFormat(void 0, d).format(P);
    }, [j, e, s, r, d]);
    return /* @__PURE__ */ o.jsx(
      A,
      {
        ref: N,
        color: i,
        size: f,
        strokeWidth: u,
        "aria-label": n,
        label: n,
        valueLabel: R(),
        showValueLabel: l,
        value: j,
        minValue: s,
        maxValue: r,
        isIndeterminate: x,
        isStriped: w,
        className: C,
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
