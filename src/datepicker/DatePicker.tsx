import { forwardRef } from "react";
import type { DatePickerProps as DatePickerRootProps } from "@nextui-org/react";
import { DatePicker as DatePickerRoot } from "@nextui-org/react";
import type { DateValue } from "@internationalized/date";
import type { Color, Radius, Size } from "@/types/types";

interface DatePickerProps extends DatePickerRootProps {
  value?: DateValue;
  defaultValue?: DateValue;
  minValue?: DateValue;
  maxValue?: DateValue;
  isDateUnavailable?: (date: DateValue) => boolean;
  onValueChange?: (value: DateValue | null) => void;
  color?: Color;
  radius?: Radius;
  size?: Size;
}
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ ...props }, ref) => {
    return <DatePickerRoot ref={ref} {...props} />;
  },
);

DatePicker.displayName = "DatePicker";
