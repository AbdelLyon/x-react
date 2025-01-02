/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as m } from "react";
import { DatePicker as k } from "@nextui-org/react";
import { cn as e } from "../utils/x-react.es.js";
const v = m(
  ({
    variant: t = "flat",
    color: d = "default",
    size: o = "md",
    radius: u = "md",
    labelPlacement: n = "inside",
    fullWidth: b = !0,
    isRequired: f = !1,
    isReadOnly: s = !1,
    isDisabled: l = !1,
    containerClasses: i,
    ...c
  }, g) => {
    const { classNames: r, ...p } = c, h = () => {
      switch (t) {
        case "bordered":
          return "bg-white dark:bg-background data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12 group-data-[focus=true]:bg-content1";
        case "flat":
          return "border-none border-1 bg-default-100 dark:bg-default-50 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-12";
        case "faded":
          return "border-transparent bg-default-100 dark:bg-default-50 data-[hover=true]:bg-default-200 group-data-[focus=true]:border-outline h-12";
        case "underlined":
          return "border-b-1 rounded-none bg-transparent border-default-200 dark:border-default-100 data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12";
        default:
          return "bg-white dark:bg-background data-[hover=true]:border-outline group-data-[focus=true]:border-outline h-12";
      }
    };
    return /* @__PURE__ */ a.jsx("div", { className: e("w-full", i), children: /* @__PURE__ */ a.jsx(
      k,
      {
        ref: g,
        variant: t,
        color: d,
        size: o,
        radius: u,
        labelPlacement: n,
        fullWidth: b,
        isRequired: f,
        isReadOnly: s,
        isDisabled: l,
        classNames: {
          ...r,
          base: e("border-1 border-default", r == null ? void 0 : r.base),
          inputWrapper: e(h(), r == null ? void 0 : r.inputWrapper)
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
