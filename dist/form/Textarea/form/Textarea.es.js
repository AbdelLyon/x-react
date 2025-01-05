import { jsx as b } from "react/jsx-runtime";
import { forwardRef as R } from "react";
import { Textarea as S } from "@nextui-org/react";
import { cn as u } from "../../../utils/utils.es.js";
const V = R(
  ({
    variant: d = "bordered",
    color: s = "default",
    size: i = "md",
    radius: l = "md",
    labelPlacement: c = "inside",
    fullWidth: g = !0,
    isRequired: p = !1,
    isReadOnly: m = !1,
    isDisabled: h = !1,
    containerClasses: x,
    width: r,
    height: t,
    style: y,
    customValidation: n,
    validate: a,
    ...j
  }, k) => {
    const w = {
      width: typeof r == "number" ? `${r}px` : r,
      height: typeof t == "number" ? `${t}px` : t,
      ...y
    }, T = (f) => {
      if (n) {
        const o = n(f);
        if (typeof o == "string")
          return o;
        if (o === !1)
          return "Validation failed";
      }
      return (a == null ? void 0 : a(f)) ?? !0;
    }, { classNames: e, ...v } = j, $ = () => {
      switch (d) {
        case "bordered":
          return [
            "border-1",
            "bg-white",
            "dark:bg-background",
            "data-[hover=true]:border-outline",
            "group-data-[focus=true]:border-outline",
            "group-data-[focus=true]:bg-content1",
            "h-12"
          ].join(" ");
        case "flat":
          return [
            "border-none",
            "bg-default-100",
            "dark:bg-default-50",
            "data-[hover=true]:bg-default-200",
            "group-data-[focus=true]:bg-default-100",
            "h-12"
          ].join(" ");
        case "faded":
          return [
            "border-1",
            "border-transparent",
            "bg-default-100",
            "dark:bg-default-50",
            "data-[hover=true]:bg-default-200",
            "group-data-[focus=true]:border-outline",
            "h-12"
          ].join(" ");
        case "underlined":
          return [
            "relative",
            "border-b-1",
            "rounded-none",
            "bg-transparent",
            "border-default",
            // Underline effect
            "after:bg-outline",
            // Hover
            "data-[hover=true]:after:scale-x-100",
            "data-[hover=true]:after:bg-outline",
            // Focus
            "group-data-[focus=true]:after:scale-x-100",
            "group-data-[focus=true]:after:bg-outline"
          ].join(" ");
        default:
          return [
            "border-1",
            "bg-white",
            "dark:bg-background",
            "data-[hover=true]:border-outline",
            "group-data-[focus=true]:border-outline",
            "h-12"
          ].join(" ");
      }
    };
    return /* @__PURE__ */ b("div", { className: u("w-full", x), children: /* @__PURE__ */ b(
      S,
      {
        ref: k,
        variant: d,
        color: s,
        size: i,
        radius: l,
        labelPlacement: c,
        fullWidth: g,
        isRequired: p,
        isReadOnly: m,
        isDisabled: h,
        validate: T,
        style: w,
        classNames: {
          ...e,
          inputWrapper: u($(), e == null ? void 0 : e.inputWrapper),
          input: u("text-base", e == null ? void 0 : e.input)
        },
        ...v
      }
    ) });
  }
);
V.displayName = "Textarea";
export {
  V as Textarea
};
