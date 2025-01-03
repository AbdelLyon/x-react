/* empty css                */
import { j as a } from "../jsx-runtime-Bq5baZvQ.js";
import { forwardRef as m } from "react";
import { DatePicker as k, DateRangePicker as P } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
const h = (r = "bordered") => {
  switch (r) {
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
}, D = m(
  ({
    variant: r = "bordered",
    color: d = "default",
    size: o = "md",
    radius: u = "md",
    labelPlacement: s = "inside",
    fullWidth: n = !0,
    isRequired: l = !1,
    isReadOnly: c = !1,
    isDisabled: i = !1,
    containerClasses: b,
    ...f
  }, g) => {
    const { classNames: e, ...p } = f;
    return /* @__PURE__ */ a.jsx("div", { className: t("w-full", b), children: /* @__PURE__ */ a.jsx(
      k,
      {
        ref: g,
        variant: r,
        color: d,
        size: o,
        radius: u,
        labelPlacement: s,
        fullWidth: n,
        isRequired: l,
        isReadOnly: c,
        isDisabled: i,
        classNames: {
          ...e,
          inputWrapper: t(
            h(r),
            e == null ? void 0 : e.inputWrapper
          )
        },
        ...p
      }
    ) });
  }
), x = m(
  ({
    variant: r = "bordered",
    color: d = "default",
    size: o = "md",
    radius: u = "md",
    labelPlacement: s = "inside",
    fullWidth: n = !0,
    isRequired: l = !1,
    isReadOnly: c = !1,
    isDisabled: i = !1,
    containerClasses: b,
    ...f
  }, g) => {
    const { classNames: e, ...p } = f;
    return /* @__PURE__ */ a.jsx("div", { className: t("w-full", b), children: /* @__PURE__ */ a.jsx(
      P,
      {
        ref: g,
        variant: r,
        color: d,
        size: o,
        radius: u,
        labelPlacement: s,
        fullWidth: n,
        isRequired: l,
        isReadOnly: c,
        isDisabled: i,
        classNames: {
          ...e,
          base: t(h(r), e == null ? void 0 : e.base)
        },
        ...p
      }
    ) });
  }
);
D.displayName = "DatePicker";
x.displayName = "DateRangePicker";
export {
  D as DatePicker,
  x as DateRangePicker
};
