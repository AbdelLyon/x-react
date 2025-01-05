import { forwardRef } from "react";
import type { SpinnerProps as SpinnerRootProps } from "@nextui-org/spinner";
import { Spinner as SpinnerRoot } from "@nextui-org/spinner";
import type { Color, Size } from "@/types/types";

interface SpinnerProps extends Omit<SpinnerRootProps, "label" | "labelColor"> {
  color?: Color;
  size?: Size;
  disableAnimation?: boolean;
  strokeWidth?: number;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ color = "default", size = "md", strokeWidth = 4, ...props }, ref) => {
    return (
      <SpinnerRoot
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
