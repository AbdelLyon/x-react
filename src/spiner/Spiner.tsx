import { forwardRef } from "react";
import {
  Spinner as NextUISpinner,
  SpinnerProps as NextUISpinnerProps,
} from "@nextui-org/react";
import { Color, Size } from "@/types/types";

interface SpinnerProps
  extends Omit<NextUISpinnerProps, "label" | "labelColor"> {
  color?: Color;
  size?: Size;
  disableAnimation?: boolean;
  strokeWidth?: number;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ color = "default", size = "md", strokeWidth = 4, ...props }, ref) => {
    return (
      <NextUISpinner
        ref={ref}
        color={color}
        size={size}
        strokeWidth={strokeWidth}
        {...props}
      />
    );
  },
);

Spinner.displayName = "Spinner";
