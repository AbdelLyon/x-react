import { jsx as a } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { DatePicker as k, DateRangePicker as N } from "@nextui-org/react";
import { cn as t } from "../../utils/index.js";
const h = (e = "bordered") => {
  switch (e) {
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
}, P = m(
  ({
    variant: e = "bordered",
    color: d = "default",
    size: o = "md",
    radius: s = "md",
    labelPlacement: u = "inside",
    fullWidth: l = !0,
    isRequired: n = !1,
    isReadOnly: c = !1,
    isDisabled: b = !1,
    containerClasses: f,
    ...i
  }, p) => {
    const { classNames: r, ...g } = i;
    return /* @__PURE__ */ a("div", { className: t("w-full", f), children: /* @__PURE__ */ a(
      k,
      {
        ref: p,
        variant: e,
        color: d,
        size: o,
        radius: s,
        labelPlacement: u,
        fullWidth: l,
        isRequired: n,
        isReadOnly: c,
        isDisabled: b,
        classNames: {
          ...r,
          inputWrapper: t(
            h(e),
            r?.inputWrapper
          )
        },
        ...g
      }
    ) });
  }
), D = m(
  ({
    variant: e = "bordered",
    color: d = "default",
    size: o = "md",
    radius: s = "md",
    labelPlacement: u = "inside",
    fullWidth: l = !0,
    isRequired: n = !1,
    isReadOnly: c = !1,
    isDisabled: b = !1,
    containerClasses: f,
    ...i
  }, p) => {
    const { classNames: r, ...g } = i;
    return /* @__PURE__ */ a("div", { className: t("w-full", f), children: /* @__PURE__ */ a(
      N,
      {
        ref: p,
        variant: e,
        color: d,
        size: o,
        radius: s,
        labelPlacement: u,
        fullWidth: l,
        isRequired: n,
        isReadOnly: c,
        isDisabled: b,
        classNames: {
          ...r,
          base: t(h(e), r?.base)
        },
        ...g
      }
    ) });
  }
);
P.displayName = "DatePicker";
D.displayName = "DateRangePicker";
export {
  P as DatePicker,
  D as DateRangePicker
};
//# sourceMappingURL=index.js.map
