import { jsx as e } from "react/jsx-runtime";
import { forwardRef as R, useState as S } from "react";
import { Input as T } from "@nextui-org/react";
import { cn as f } from "../../../utils/utils.es.js";
import { IconEye as V, IconEyeOff as W } from "@tabler/icons-react";
const C = R(
  ({
    variant: n = "bordered",
    color: i = "default",
    size: c = "md",
    radius: l = "md",
    labelPlacement: p = "inside",
    fullWidth: b = !0,
    isClearable: g = !1,
    isRequired: m = !1,
    isReadOnly: h = !1,
    isDisabled: w = !1,
    containerClasses: y,
    customValidation: u,
    validate: t,
    type: d,
    ...k
  }, I) => {
    const [o, j] = S(d), v = (s) => {
      if (u) {
        const a = u(s);
        if (typeof a == "string")
          return a;
        if (a)
          return "Validation failed";
      }
      return (t == null ? void 0 : t(s)) ?? !0;
    }, N = d === "password" ? /* @__PURE__ */ e(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => j(o === "password" ? "text" : "password"),
        children: o === "password" ? /* @__PURE__ */ e(V, { className: "pointer-events-none" }) : /* @__PURE__ */ e(W, { className: "pointer-events-none" })
      }
    ) : void 0, { classNames: r, ...x } = k, E = () => {
      switch (n) {
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
            "h-12",
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
    return /* @__PURE__ */ e("div", { className: f("w-full", y), children: /* @__PURE__ */ e(
      T,
      {
        ref: I,
        variant: n,
        color: i,
        size: c,
        radius: l,
        labelPlacement: p,
        fullWidth: b,
        isClearable: g,
        isRequired: m,
        isReadOnly: h,
        isDisabled: w,
        validate: v,
        classNames: {
          ...r,
          inputWrapper: f(E(), r == null ? void 0 : r.inputWrapper)
        },
        endContent: N,
        type: o,
        ...x
      }
    ) });
  }
);
C.displayName = "Input";
export {
  C as Input
};
