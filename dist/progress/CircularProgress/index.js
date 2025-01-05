import { jsx as L } from "react/jsx-runtime";
import { forwardRef as N, useState as S, useEffect as V } from "react";
import { CircularProgress as h } from "@nextui-org/react";
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
}, j = N(
  ({
    // Auto-increment props
    autoIncrement: a = n.autoIncrement,
    incrementInterval: c = n.incrementInterval,
    incrementStep: l = n.incrementStep,
    onValueChange: u,
    // NextUI props
    value: s = e.value,
    minValue: r = e.minValue,
    maxValue: t = e.maxValue,
    formatOptions: i = e.formatOptions,
    valueLabel: f,
    classNames: g,
    showValueLabel: v,
    color: I,
    size: b,
    ...w
  }, C) => {
    const [m, p] = S(s);
    V(() => {
      if (!a) {
        p(s);
        return;
      }
      const o = setInterval(() => {
        p((d) => {
          const P = d >= t ? r : d + l;
          return u?.(P), P;
        });
      }, c);
      return () => clearInterval(o);
    }, [
      a,
      s,
      c,
      l,
      t,
      r,
      u
    ]);
    const y = {
      ...e,
      ...w,
      ref: C,
      value: m,
      minValue: r,
      maxValue: t,
      formatOptions: i,
      valueLabel: (() => {
        if (f !== void 0)
          return f;
        const o = (m - r) / (t - r);
        return new Intl.NumberFormat(void 0, i).format(o);
      })(),
      showValueLabel: v,
      color: I,
      size: b,
      classNames: g
    };
    return /* @__PURE__ */ L(h, { ...y });
  }
);
j.displayName = "CircularProgress";
export {
  j as CircularProgress
};
//# sourceMappingURL=index.js.map
