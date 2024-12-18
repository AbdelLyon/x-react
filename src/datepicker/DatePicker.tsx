import { forwardRef, ReactNode } from "react";
import {
  DatePicker as DatePickerRoot,
  DatePickerProps as DatePickerRootProps,
} from "@nextui-org/react";
import { DateValue } from "@internationalized/date";

type LabelPlacement = "inside" | "outside" | "outside-left";
type ColorVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type Size = "sm" | "md" | "lg";
type Radius = "none" | "sm" | "md" | "lg" | "full";

interface DatePickerProps extends Omit<DatePickerRootProps, "children"> {
  // Values
  value?: DateValue;
  defaultValue?: DateValue;
  minValue?: DateValue;
  maxValue?: DateValue;
  placeholder?: string;

  // Labels
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  labelPlacement?: LabelPlacement;

  // Appearance
  variant?: "flat" | "bordered" | "faded";
  color?: ColorVariant;
  size?: Size;
  radius?: Radius;

  // States
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  autoFocus?: boolean;

  // Calendar
  isDateUnavailable?: (date: DateValue) => boolean;
  shouldCloseOnSelect?: boolean;

  // Events
  onValueChange?: (value: DateValue | null) => void;
  onOpenChange?: (isOpen: boolean) => void;
  onFocus?: () => void;
  onBlur?: () => void;

  // Styling
  className?: string;
  classNames?: {
    base?: string;
    label?: string;
    input?: string;
    innerWrapper?: string;
    description?: string;
    errorMessage?: string;
    calendar?: string;
  };
}

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      // Values
      value,
      defaultValue,
      minValue,
      maxValue,

      // Labels
      label,
      description,
      errorMessage,
      labelPlacement = "inside",

      // Appearance
      variant = "flat",
      color = "default",
      size = "md",
      radius = "md",

      // States
      isDisabled = false,
      isReadOnly = false,
      isInvalid = false,
      isRequired = false,
      autoFocus = false,

      // Calendar
      isDateUnavailable,

      // Events
      onOpenChange,
      onFocus,
      onBlur,

      // Styling
      className,
      classNames,

      ...props
    },
    ref,
  ) => {
    return (
      <DatePickerRoot
        ref={ref}
        // Values
        value={value}
        defaultValue={defaultValue}
        minValue={minValue}
        maxValue={maxValue}
        // Labels
        label={label}
        description={description}
        errorMessage={errorMessage}
        labelPlacement={labelPlacement}
        // Appearance
        variant={variant}
        color={color}
        size={size}
        radius={radius}
        // States
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isInvalid={isInvalid}
        isRequired={isRequired}
        autoFocus={autoFocus}
        // Calendar
        isDateUnavailable={isDateUnavailable}
        // Events
        onOpenChange={onOpenChange}
        onFocus={onFocus}
        onBlur={onBlur}
        // Styling
        className={className}
        classNames={classNames}
        {...props}
      />
    );
  },
);

DatePicker.displayName = "DatePicker";
