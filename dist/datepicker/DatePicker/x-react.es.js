import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { DatePicker as DatePicker$1, DateRangePicker as DateRangePicker$1 } from "@nextui-org/react";
import { cn } from "../../utils/x-react.es.js";
const getVariantStyles = (variant = "bordered") => {
  switch (variant) {
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
const DatePicker = forwardRef(
  ({
    variant = "bordered",
    color = "default",
    size = "md",
    radius = "md",
    labelPlacement = "inside",
    fullWidth = true,
    isRequired = false,
    isReadOnly = false,
    isDisabled = false,
    containerClasses,
    ...props
  }, ref) => {
    const { classNames: propClassNames, ...restProps } = props;
    return /* @__PURE__ */ jsx("div", { className: cn("w-full", containerClasses), children: /* @__PURE__ */ jsx(
      DatePicker$1,
      {
        ref,
        variant,
        color,
        size,
        radius,
        labelPlacement,
        fullWidth,
        isRequired,
        isReadOnly,
        isDisabled,
        classNames: {
          ...propClassNames,
          inputWrapper: cn(
            getVariantStyles(variant),
            propClassNames?.inputWrapper
          )
        },
        ...restProps
      }
    ) });
  }
);
const DateRangePicker = forwardRef(
  ({
    variant = "bordered",
    color = "default",
    size = "md",
    radius = "md",
    labelPlacement = "inside",
    fullWidth = true,
    isRequired = false,
    isReadOnly = false,
    isDisabled = false,
    containerClasses,
    ...props
  }, ref) => {
    const { classNames: propClassNames, ...restProps } = props;
    return /* @__PURE__ */ jsx("div", { className: cn("w-full", containerClasses), children: /* @__PURE__ */ jsx(
      DateRangePicker$1,
      {
        ref,
        variant,
        color,
        size,
        radius,
        labelPlacement,
        fullWidth,
        isRequired,
        isReadOnly,
        isDisabled,
        classNames: {
          ...propClassNames,
          base: cn(getVariantStyles(variant), propClassNames?.base)
        },
        ...restProps
      }
    ) });
  }
);
DatePicker.displayName = "DatePicker";
DateRangePicker.displayName = "DateRangePicker";
export {
  DatePicker,
  DateRangePicker
};
