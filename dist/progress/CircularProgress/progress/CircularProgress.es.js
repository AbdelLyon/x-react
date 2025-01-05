import { jsx as N } from "react/jsx-runtime";
import { forwardRef as S, useState as j, useEffect as k } from "react";
import { CircularProgress as x } from "@nextui-org/react";
const e = {
  color: "primary",
  size: "md",
  strokeWidth: 3,
  showValueLabel: !1,
  formatOptions: { style: "percent" },
  value: 0,
  minValue: 0,
  maxValue: 100
}, n = {
  autoIncrement: !1,
  incrementInterval: 500,
  incrementStep: 10
}, z = S(
  ({
    // Auto-increment props
    autoIncrement: a = n.autoIncrement,
    incrementInterval: l = n.incrementInterval,
    incrementStep: i = n.incrementStep,
    onValueChange: t,
    // NextUI props
    value: o = e.value,
    minValue: r = e.minValue,
    maxValue: s = e.maxValue,
    formatOptions: u = e.formatOptions,
    valueLabel: f,
    classNames: v,
    showValueLabel: I,
    color: b,
    size: w,
    ...g
  }, y) => {
    const [m, p] = j(o);
    k(() => {
      if (!a) {
        p(o);
        return;
      }
      const c = setInterval(() => {
        p((d) => {
          const P = d >= s ? r : d + i;
          return t == null || t(P), P;
        });
      }, l);
      return () => clearInterval(c);
    }, [
      a,
      o,
      l,
      i,
      s,
      r,
      t
    ]);
    const L = {
      ...e,
      ...g,
      ref: y,
      value: m,
      minValue: r,
      maxValue: s,
      formatOptions: u,
      valueLabel: (() => {
        if (f !== void 0)
          return f;
        const c = (m - r) / (s - r);
        return new Intl.NumberFormat(void 0, u).format(c);
      })(),
      showValueLabel: I,
      color: b,
      size: w,
      classNames: v
    };
    return /* @__PURE__ */ N(x, { ...L });
  }
);
z.displayName = "CircularProgress";
export {
  z as CircularProgress
};
