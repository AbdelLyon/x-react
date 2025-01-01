import { forwardRef } from "react";
import type {
  DatePickerProps as DatePickerRootProps,
  DateValue,
} from "@nextui-org/react";
import { DatePicker as DatePickerRoot } from "@nextui-org/react";

export const DatePicker = forwardRef<HTMLDivElement, DatePickerRootProps>(
  ({ ...props }, ref) => {
    return <DatePickerRoot ref={ref} {...props} />;
  },
);

export type { DateValue };

DatePicker.displayName = "DatePicker";
