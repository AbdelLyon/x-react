import { jsx as s } from "react/jsx-runtime";
import { forwardRef as $ } from "react";
import { Textarea as R } from "@nextui-org/react";
import { cn as o } from "../../utils/index.js";
const S = $(
  ({
    variant: u = "bordered",
    color: f = "default",
    size: l = "md",
    radius: b = "md",
    labelPlacement: i = "inside",
    fullWidth: p = !0,
    isRequired: c = !1,
    isReadOnly: g = !1,
    isDisabled: m = !1,
    containerClasses: h,
    width: e,
    height: r,
    style: x,
    customValidation: d,
    validate: v,
    ...y
  }, j) => {
    const k = {
      width: typeof e == "number" ? `${e}px` : e,
      height: typeof r == "number" ? `${r}px` : r,
      ...x
    }, N = (n) => {
      if (d) {
        const a = d(n);
        if (typeof a == "string")
          return a;
        if (a === !1)
          return "Validation failed";
      }
      return v?.(n) ?? !0;
    }, { classNames: t, ...w } = y, T = () => {
      switch (u) {
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
    return /* @__PURE__ */ s("div", { className: o("w-full", h), children: /* @__PURE__ */ s(
      R,
      {
        ref: j,
        variant: u,
        color: f,
        size: l,
        radius: b,
        labelPlacement: i,
        fullWidth: p,
        isRequired: c,
        isReadOnly: g,
        isDisabled: m,
        validate: N,
        style: k,
        classNames: {
          ...t,
          inputWrapper: o(T(), t?.inputWrapper),
          input: o("text-base", t?.input)
        },
        ...w
      }
    ) });
  }
);
S.displayName = "Textarea";
export {
  S as Textarea
};
//# sourceMappingURL=index.js.map
