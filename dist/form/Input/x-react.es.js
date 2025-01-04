import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { forwardRef, useState } from "react";
import { Input as Input$1 } from "@nextui-org/react";
import { cn } from "../../utils/x-react.es.js";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
const Input = forwardRef(
  ({
    variant = "bordered",
    color = "default",
    size = "md",
    radius = "md",
    labelPlacement = "inside",
    fullWidth = true,
    isClearable = false,
    isRequired = false,
    isReadOnly = false,
    isDisabled = false,
    containerClasses,
    customValidation,
    validate,
    type,
    ...props
  }, ref) => {
    const [inputType, setInputType] = useState(type);
    const combinedValidate = (value) => {
      if (customValidation) {
        const customResult = customValidation(value);
        if (typeof customResult === "string") {
          return customResult;
        }
        if (customResult) {
          return "Validation failed";
        }
      }
      return (validate == null ? void 0 : validate(value)) ?? true;
    };
    const endContent = type === "password" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "opacity-40 focus:outline-none",
        type: "button",
        onClick: () => setInputType(inputType === "password" ? "text" : "password"),
        children: inputType === "password" ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconEye, { className: "pointer-events-none" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconEyeOff, { className: "pointer-events-none" })
      }
    ) : void 0;
    const { classNames: propClassNames, ...restProps } = props;
    const getVariantStyles = () => {
      switch (variant) {
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("w-full", containerClasses), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input$1,
      {
        ref,
        variant,
        color,
        size,
        radius,
        labelPlacement,
        fullWidth,
        isClearable,
        isRequired,
        isReadOnly,
        isDisabled,
        validate: combinedValidate,
        classNames: {
          ...propClassNames,
          inputWrapper: cn(getVariantStyles(), propClassNames == null ? void 0 : propClassNames.inputWrapper)
        },
        endContent,
        type: inputType,
        ...restProps
      }
    ) });
  }
);
Input.displayName = "Input";
export {
  Input
};
//# sourceMappingURL=x-react.es.js.map
