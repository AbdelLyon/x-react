import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { forwardRef as h } from "react";
import { Progress as P } from "@nextui-org/react";
const o = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: !0
}, $ = h(
  ({
    label: n,
    labelPosition: s = "top",
    containerClassName: p,
    labelClassName: a,
    value: i = 0,
    maxValue: f = 100,
    formatOptions: d = o.formatOptions,
    valueLabel: e,
    showValueLabel: m = o.showValueLabel,
    classNames: r,
    ...u
  }, c) => {
    const g = () => {
      const y = new Intl.NumberFormat(
        void 0,
        d
      ).format(i / f);
      return typeof e == "string" && e.trim() !== "" ? e : y;
    }, x = s === "none" ? void 0 : /* @__PURE__ */ l(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${a ?? ""}
      ${s === "top" ? "order-first" : "order-last"}
    `,
        children: [
          n !== void 0 && /* @__PURE__ */ t("span", { children: n }),
          m && /* @__PURE__ */ t("span", { children: g() })
        ]
      }
    ), w = {
      value: i,
      maxValue: f,
      formatOptions: d,
      showValueLabel: m,
      ...u,
      classNames: {
        ...r,
        base: `w-full ${typeof (r == null ? void 0 : r.base) == "string" && r.base}`
      }
    };
    return /* @__PURE__ */ l(
      "div",
      {
        ref: c,
        className: `flex w-full max-w-md flex-col gap-2 ${p}`,
        children: [
          x,
          /* @__PURE__ */ t(P, { ...o, ...w })
        ]
      }
    );
  }
);
$.displayName = "Progress";
export {
  $ as Progress
};
