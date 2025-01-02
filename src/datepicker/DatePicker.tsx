import { forwardRef } from "react";
import type {
  DatePickerProps as DatePickerRootProps,
  DateValue,
} from "@nextui-org/react";
import { DatePicker as DatePickerRoot } from "@nextui-org/react";
import { cn } from "@/utils";

type DatePickerProps = DatePickerRootProps & {
  containerClasses?: string;
  customValidation?: (value: Date | null) => boolean | string;
};

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      variant = "flat",
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
    },
    ref,
  ) => {
    const { classNames: propClassNames, ...restProps } = props;

    const getVariantStyles = (): string => {
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

    return (
      <div className={cn("w-full", containerClasses)}>
        <DatePickerRoot
          ref={ref}
          variant={variant}
          color={color}
          size={size}
          radius={radius}
          labelPlacement={labelPlacement}
          fullWidth={fullWidth}
          isRequired={isRequired}
          isReadOnly={isReadOnly}
          isDisabled={isDisabled}
          classNames={{
            ...propClassNames,
            base: cn("border-1 border-default", propClassNames?.base),
            inputWrapper: cn(getVariantStyles(), propClassNames?.inputWrapper),
          }}
          {...restProps}
        />
      </div>
    );
  },
);

export type { DateValue };

DatePicker.displayName = "DatePicker";
