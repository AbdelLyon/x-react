/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as h } from "react";
import { DatePicker as k } from "@nextui-org/react";
import { cn as a } from "../utils/x-react.es.js";
const v = h(
  ({
    variant: e = "bordered",
    color: o = "default",
    size: d = "md",
    radius: u = "md",
    labelPlacement: n = "inside",
    fullWidth: s = !0,
    isRequired: b = !1,
    isReadOnly: l = !1,
    isDisabled: f = !1,
    containerClasses: i,
    ...c
  }, g) => {
    const { classNames: r, ...p } = c, m = () => {
      switch (e) {
        case "bordered":
          return "border-1 bg-white dark:bg-background data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1";
        case "flat":
          return "border-none bg-default-100 dark:bg-default-50 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-12";
        case "faded":
          return "border-1 border-transparent bg-default-100 dark:bg-default-50 data-[hover=true]:bg-default-200 group-data-[focus=true]:border-outline h-12";
        case "underlined":
          return "border-b-1 rounded-none bg-transparent border-default-200 dark:border-default-100 data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12";
        default:
          return "border-1 bg-white dark:bg-background data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12";
      }
    };
    return /* @__PURE__ */ t.jsx("div", { className: a("w-full", i), children: /* @__PURE__ */ t.jsx(
      k,
      {
        ref: g,
        variant: e,
        color: o,
        size: d,
        radius: u,
        labelPlacement: n,
        fullWidth: s,
        isRequired: b,
        isReadOnly: l,
        isDisabled: f,
        classNames: {
          ...r,
          inputWrapper: a(m(), r == null ? void 0 : r.inputWrapper)
        },
        ...p
      }
    ) });
  }
);
v.displayName = "DatePicker";
export {
  v as DatePicker
};
