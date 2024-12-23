/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as I, useState as R, useEffect as k, useCallback as C } from "react";
import { Progress as L, CircularProgress as q } from "@nextui-org/react";
const z = I(
  ({
    label: d,
    labelPosition: f = "top",
    size: j = "md",
    color: i = "primary",
    radius: l = "full",
    value: p = 0,
    minValue: a = 0,
    maxValue: s = 100,
    formatOptions: t = { style: "percent" },
    valueLabel: e,
    showValueLabel: w = !0,
    isIndeterminate: y = !1,
    isStriped: n = !1,
    isDisabled: u = !1,
    disableAnimation: m = !1,
    containerClassName: P,
    labelClassName: $,
    classNames: r,
    ...b
  }, g) => {
    const c = () => {
      const x = new Intl.NumberFormat(
        void 0,
        t
      ).format(p / s);
      return e || x;
    };
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: g,
        className: `
          flex flex-col gap-2 w-full max-w-md
          ${P}
        `,
        children: [
          (f === "top" || f === "bottom") && /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: `
              text-default-500 font-medium text-small
              flex justify-between items-center
              ${$}
              ${f === "top" ? "order-first" : "order-last"}
            `,
              children: [
                d && /* @__PURE__ */ o.jsx("span", { children: d }),
                w && /* @__PURE__ */ o.jsx("span", { children: c() })
              ]
            }
          ),
          /* @__PURE__ */ o.jsx(
            L,
            {
              value: p,
              minValue: a,
              maxValue: s,
              size: j,
              color: i,
              radius: l,
              isIndeterminate: y,
              isStriped: n,
              isDisabled: u,
              disableAnimation: m,
              classNames: {
                ...r,
                base: `w-full ${(r == null ? void 0 : r.base) || ""}`
              },
              ...b
            }
          )
        ]
      }
    );
  }
);
z.displayName = "Progress";
const A = I(
  ({
    // Appearance
    color: d = "primary",
    size: f = "md",
    strokeWidth: j = 3,
    // Content
    label: i,
    valueLabel: l,
    showValueLabel: p = !1,
    formatOptions: a = { style: "percent" },
    // Behavior
    value: s = 0,
    minValue: t = 0,
    maxValue: e = 100,
    isIndeterminate: w = !1,
    isStriped: y = !1,
    // Auto-increment
    autoIncrement: n = !1,
    incrementInterval: u = 500,
    incrementStep: m = 10,
    // Styling
    className: P,
    classNames: $,
    // Callback
    onValueChange: r,
    ...b
  }, g) => {
    const [c, x] = R(s);
    k(() => {
      if (!n) {
        x(s);
        return;
      }
      const v = setInterval(() => {
        x((E) => {
          const F = E >= e ? t : E + m;
          return r == null || r(F), F;
        });
      }, u);
      return () => clearInterval(v);
    }, [
      n,
      s,
      u,
      m,
      e,
      t,
      r
    ]);
    const N = C(() => {
      if (l) return l;
      const v = (c - t) / (e - t);
      return new Intl.NumberFormat(void 0, a).format(v);
    }, [c, l, t, e, a]);
    return /* @__PURE__ */ o.jsx(
      q,
      {
        ref: g,
        color: d,
        size: f,
        strokeWidth: j,
        "aria-label": i,
        label: i,
        valueLabel: N(),
        showValueLabel: p,
        value: c,
        minValue: t,
        maxValue: e,
        isIndeterminate: w,
        isStriped: y,
        className: P,
        classNames: $,
        ...b
      }
    );
  }
);
A.displayName = "CircularProgress";
export {
  A as CircularProgress,
  z as Progress
};
