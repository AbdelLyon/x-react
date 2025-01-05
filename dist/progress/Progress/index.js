import { jsxs as f, jsx as t } from "react/jsx-runtime";
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
    label: s,
    labelPosition: n = "top",
    containerClassName: d,
    labelClassName: p,
    value: i = 0,
    maxValue: m = 100,
    formatOptions: a = o.formatOptions,
    valueLabel: r,
    showValueLabel: l = o.showValueLabel,
    classNames: e,
    ...c
  }, u) => {
    const g = () => {
      const y = new Intl.NumberFormat(
        void 0,
        a
      ).format(i / m);
      return typeof r == "string" && r.trim() !== "" ? r : y;
    }, x = n === "none" ? void 0 : /* @__PURE__ */ f(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${p ?? ""}
      ${n === "top" ? "order-first" : "order-last"}
    `,
        children: [
          s !== void 0 && /* @__PURE__ */ t("span", { children: s }),
          l && /* @__PURE__ */ t("span", { children: g() })
        ]
      }
    ), w = {
      value: i,
      maxValue: m,
      formatOptions: a,
      showValueLabel: l,
      ...c,
      classNames: {
        ...e,
        base: `w-full ${typeof e?.base == "string" && e.base}`
      }
    };
    return /* @__PURE__ */ f(
      "div",
      {
        ref: u,
        className: `flex w-full max-w-md flex-col gap-2 ${d}`,
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
//# sourceMappingURL=index.js.map
