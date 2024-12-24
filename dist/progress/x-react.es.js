/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
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
    label: c,
    labelPosition: u = "top",
    containerClassName: f,
    labelClassName: s,
    value: o = 0,
    maxValue: r = 100,
    formatOptions: t = j.formatOptions,
    valueLabel: n,
    showValueLabel: l = j.showValueLabel,
    classNames: e,
    ...p
  }, d) => {
    const x = () => {
      const m = new Intl.NumberFormat(
        void 0,
        t
      ).format(o / r);
      return typeof n == "string" && n.trim() !== "" ? n : m;
    }, P = u === "none" ? null : /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${s ?? ""}
      ${u === "top" ? "order-first" : "order-last"}
    `,
        children: [
          c !== null && /* @__PURE__ */ i.jsx("span", { children: c }),
          l && /* @__PURE__ */ i.jsx("span", { children: x() })
        ]
      }
    ), g = {
      value: o,
      maxValue: r,
      formatOptions: t,
      showValueLabel: l,
      ...p,
      classNames: {
        ...e,
        base: `w-full ${typeof (e == null ? void 0 : e.base) == "string" && e.base}`
      }
    };
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: d,
        className: `flex w-full max-w-md flex-col gap-2 ${f}`,
        children: [
          P,
          /* @__PURE__ */ i.jsx(F, { ...j, ...g })
        ]
      }
    );
  }
);
O.displayName = "Progress";
const a = {
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
    autoIncrement: c = y.autoIncrement,
    incrementInterval: u = y.incrementInterval,
    incrementStep: f = y.incrementStep,
    onValueChange: s,
    // NextUI props
    value: o = a.value,
    minValue: r = a.minValue,
    maxValue: t = a.maxValue,
    formatOptions: n = a.formatOptions,
    valueLabel: l,
    classNames: e,
    showValueLabel: p,
    color: d,
    size: x,
    ...P
  }, g) => {
    const [m, b] = z(o);
    E(() => {
      if (!c) {
        b(o);
        return;
      }
      const w = setInterval(() => {
        b((I) => {
          const $ = I >= t ? r : I + f;
          return s == null || s($), $;
        });
      }, u);
      return () => clearInterval(w);
    }, [
      c,
      o,
      u,
      f,
      t,
      r,
      s
    ]);
    const h = {
      ...a,
      ...P,
      ref: g,
      value: m,
      minValue: r,
      maxValue: t,
      formatOptions: n,
      valueLabel: (() => {
        if (l != null)
          return l;
        const w = (m - r) / (t - r);
        return new Intl.NumberFormat(void 0, n).format(w);
      })(),
      showValueLabel: p,
      color: d,
      size: x,
      classNames: e
    };
    return /* @__PURE__ */ i.jsx(L, { ...h });
  }
);
R.displayName = "CircularProgress";
export {
  R as CircularProgress,
  O as Progress
};
