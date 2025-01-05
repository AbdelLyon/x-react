import type { DateValue } from "@internationalized/date";
import { forwardRef } from "react";
import type {
  DatePickerProps as DatePickerRootProps,
  DateRangePickerProps as DateRangePickerRootProps,
} from "@nextui-org/date-picker";
import {
  DatePicker as DatePickerRoot,
  DateRangePicker as DateRangePickerRoot,
} from "@nextui-org/date-picker";
import { cn } from "@/utils";

type BaseProps = {
  containerClasses?: string;
  variant?: "bordered" | "flat" | "faded" | "underlined";
  color?: string;
  size?: string;
  radius?: string;
  labelPlacement?: string;
  fullWidth?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
};

type DatePickerProps = DatePickerRootProps &
  BaseProps & {
    customValidation?: (value: Date | null) => boolean | string;
  };

type DateRangePickerProps = DateRangePickerRootProps & BaseProps;

const getVariantStyles = (variant: string = "bordered"): string => {
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

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
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
    },
    ref,
  ) => {
    const { classNames: propClassNames, ...restProps } = props;

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
            inputWrapper: cn(
              getVariantStyles(variant),
              propClassNames?.inputWrapper,
            ),
          }}
          {...restProps}
        />
      </div>
    );
  },
);

export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
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
    },
    ref,
  ) => {
    const { classNames: propClassNames, ...restProps } = props;

    return (
      <div className={cn("w-full", containerClasses)}>
        <DateRangePickerRoot
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
            base: cn(getVariantStyles(variant), propClassNames?.base),
          }}
          {...restProps}
        />
      </div>
    );
  },
);

export type { DateValue };

DatePicker.displayName = "DatePicker";
DateRangePicker.displayName = "DateRangePicker";
