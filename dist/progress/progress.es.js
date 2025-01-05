import "../image/image.es.js";
import { jsxs as j, jsx as m } from "react/jsx-runtime";
import { forwardRef as L, useState as z, useEffect as F } from "react";
import { Progress as O, CircularProgress as S } from "@nextui-org/react";
const b = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: !0
}, V = L(
  ({
    label: i,
    labelPosition: l = "top",
    containerClassName: f,
    labelClassName: o,
    value: s = 0,
    maxValue: r = 100,
    formatOptions: e = b.formatOptions,
    valueLabel: n,
    showValueLabel: c = b.showValueLabel,
    classNames: t,
    ...p
  }, d) => {
    const P = () => {
      const u = new Intl.NumberFormat(
        void 0,
        e
      ).format(s / r);
      return typeof n == "string" && n.trim() !== "" ? n : u;
    }, g = l === "none" ? void 0 : /* @__PURE__ */ j(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${o ?? ""}
      ${l === "top" ? "order-first" : "order-last"}
    `,
        children: [
          i !== void 0 && /* @__PURE__ */ m("span", { children: i }),
          c && /* @__PURE__ */ m("span", { children: P() })
        ]
      }
    ), w = {
      value: s,
      maxValue: r,
      formatOptions: e,
      showValueLabel: c,
      ...p,
      classNames: {
        ...t,
        base: `w-full ${typeof (t == null ? void 0 : t.base) == "string" && t.base}`
      }
    };
    return /* @__PURE__ */ j(
      "div",
      {
        ref: d,
        className: `flex w-full max-w-md flex-col gap-2 ${f}`,
        children: [
          g,
          /* @__PURE__ */ m(O, { ...b, ...w })
        ]
      }
    );
  }
);
V.displayName = "Progress";
const a = {
  color: "primary",
  size: "md",
  strokeWidth: 3,
  showValueLabel: !1,
  formatOptions: { style: "percent" },
  value: 0,
  minValue: 0,
  maxValue: 100
}, v = {
  autoIncrement: !1,
  incrementInterval: 500,
  incrementStep: 10
}, k = L(
  ({
    // Auto-increment props
    autoIncrement: i = v.autoIncrement,
    incrementInterval: l = v.incrementInterval,
    incrementStep: f = v.incrementStep,
    onValueChange: o,
    // NextUI props
    value: s = a.value,
    minValue: r = a.minValue,
    maxValue: e = a.maxValue,
    formatOptions: n = a.formatOptions,
    valueLabel: c,
    classNames: t,
    showValueLabel: p,
    color: d,
    size: P,
    ...g
  }, w) => {
    const [u, x] = z(s);
    F(() => {
      if (!i) {
        x(s);
        return;
      }
      const y = setInterval(() => {
        x((I) => {
          const $ = I >= e ? r : I + f;
          return o == null || o($), $;
        });
      }, l);
      return () => clearInterval(y);
    }, [
      i,
      s,
      l,
      f,
      e,
      r,
      o
    ]);
    const h = {
      ...a,
      ...g,
      ref: w,
      value: u,
      minValue: r,
      maxValue: e,
      formatOptions: n,
      valueLabel: (() => {
        if (c !== void 0)
          return c;
        const y = (u - r) / (e - r);
        return new Intl.NumberFormat(void 0, n).format(y);
      })(),
      showValueLabel: p,
      color: d,
      size: P,
      classNames: t
    };
    return /* @__PURE__ */ m(S, { ...h });
  }
);
k.displayName = "CircularProgress";
export {
  k as CircularProgress,
  V as Progress
};
