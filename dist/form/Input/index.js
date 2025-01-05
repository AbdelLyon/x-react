import { jsx as e } from "react/jsx-runtime";
import { forwardRef as E, useState as R } from "react";
import { Input as S } from "@nextui-org/react";
import { cn as s } from "../../utils/index.js";
import { IconEye as T, IconEyeOff as V } from "@tabler/icons-react";
const W = E(
  ({
    variant: o = "bordered",
    color: i = "default",
    size: l = "md",
    radius: f = "md",
    labelPlacement: p = "inside",
    fullWidth: c = !0,
    isClearable: b = !1,
    isRequired: g = !1,
    isReadOnly: m = !1,
    isDisabled: h = !1,
    containerClasses: v,
    customValidation: a,
    validate: w,
    type: n,
    ...y
  }, N) => {
    const [r, k] = R(n), I = (d) => {
      if (a) {
        const t = a(d);
        if (typeof t == "string")
          return t;
        if (t)
          return "Validation failed";
      }
      return w?.(d) ?? !0;
    }, j = n === "password" ? /* @__PURE__ */ e(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => k(r === "password" ? "text" : "password"),
        children: r === "password" ? /* @__PURE__ */ e(T, { className: "pointer-events-none" }) : /* @__PURE__ */ e(V, { className: "pointer-events-none" })
      }
    ) : void 0, { classNames: u, ...x } = y, C = () => {
      switch (o) {
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
    return /* @__PURE__ */ e("div", { className: s("w-full", v), children: /* @__PURE__ */ e(
      S,
      {
        ref: N,
        variant: o,
        color: i,
        size: l,
        radius: f,
        labelPlacement: p,
        fullWidth: c,
        isClearable: b,
        isRequired: g,
        isReadOnly: m,
        isDisabled: h,
        validate: I,
        classNames: {
          ...u,
          inputWrapper: s(C(), u?.inputWrapper)
        },
        endContent: j,
        type: r,
        ...x
      }
    ) });
  }
);
W.displayName = "Input";
export {
  W as Input
};
//# sourceMappingURL=index.js.map
