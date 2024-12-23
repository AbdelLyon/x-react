/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as E, useState as k, useEffect as z, useCallback as S } from "react";
import { Progress as h, CircularProgress as q } from "@nextui-org/react";
const y = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: !0
}, A = E(
  ({
    // Custom props
    label: f,
    labelPosition: c = "top",
    containerClassName: a,
    labelClassName: i,
    // NextUI props
    value: e = 0,
    maxValue: d = 100,
    formatOptions: n = y.formatOptions,
    valueLabel: s,
    showValueLabel: t = y.showValueLabel,
    classNames: r,
    // Rest of NextUI props
    ...x
  }, j) => {
    const l = () => {
      const w = new Intl.NumberFormat(
        void 0,
        n
      ).format(e / d);
      return (s == null ? void 0 : s.toString()) || w;
    }, p = c === "none" ? null : /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${i}
      ${c === "top" ? "order-first" : "order-last"}
    `,
        children: [
          f && /* @__PURE__ */ o.jsx("span", { children: f }),
          t && /* @__PURE__ */ o.jsx("span", { children: l() })
        ]
      }
    ), u = {
      value: e,
      maxValue: d,
      formatOptions: n,
      showValueLabel: t,
      ...x,
      classNames: {
        ...r,
        base: `w-full ${(r == null ? void 0 : r.base) || ""}`
      }
    };
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: j,
        className: `flex w-full max-w-md flex-col gap-2 ${a || ""}`,
        children: [
          p,
          /* @__PURE__ */ o.jsx(h, { ...y, ...u })
        ]
      }
    );
  }
);
A.displayName = "Progress";
const B = E(
  ({
    // Appearance
    color: f = "primary",
    size: c = "md",
    strokeWidth: a = 3,
    // Content
    label: i,
    valueLabel: e,
    showValueLabel: d = !1,
    formatOptions: n = { style: "percent" },
    // Behavior
    value: s = 0,
    minValue: t = 0,
    maxValue: r = 100,
    isIndeterminate: x = !1,
    isStriped: j = !1,
    // Auto-increment
    autoIncrement: l = !1,
    incrementInterval: p = 500,
    incrementStep: u = 10,
    // Styling
    className: w,
    classNames: F,
    // Callback
    onValueChange: m,
    ...I
  }, N) => {
    const [P, $] = k(s);
    z(() => {
      if (!l) {
        $(s);
        return;
      }
      const g = setInterval(() => {
        $((b) => {
          const C = b >= r ? t : b + u;
          return m == null || m(C), C;
        });
      }, p);
      return () => clearInterval(g);
    }, [
      l,
      s,
      p,
      u,
      r,
      t,
      m
    ]);
    const R = S(() => {
      if (e) return e;
      const g = (P - t) / (r - t);
      return new Intl.NumberFormat(void 0, n).format(g);
    }, [P, e, t, r, n]);
    return /* @__PURE__ */ o.jsx(
      q,
      {
        ref: N,
        color: f,
        size: c,
        strokeWidth: a,
        "aria-label": i,
        label: i,
        valueLabel: R(),
        showValueLabel: d,
        value: P,
        minValue: t,
        maxValue: r,
        isIndeterminate: x,
        isStriped: j,
        className: w,
        classNames: F,
        ...I
      }
    );
  }
);
B.displayName = "CircularProgress";
export {
  B as CircularProgress,
  A as Progress
};
