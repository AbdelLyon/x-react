import { forwardRef } from 'react';
import { DatePicker as DatePicker$1, DateRangePicker as DateRangePicker$1 } from '@nextui-org/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx } from 'react/jsx-runtime';

// src/datepicker/DatePicker.tsx
var cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
var getVariantStyles = (variant = "bordered") => {
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
var DatePicker = forwardRef(
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
var DateRangePicker = forwardRef(
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

export { DatePicker, DateRangePicker };
//# sourceMappingURL=datepicker.js.map
//# sourceMappingURL=datepicker.js.map