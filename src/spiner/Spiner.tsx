import { forwardRef, ReactNode } from "react";
import {
  Spinner as NextUISpinner,
  SpinnerProps as NextUISpinnerProps,
} from "@nextui-org/react";

type SpinnerColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type SpinnerSize = "sm" | "md" | "lg";
type SpinnerLabelPosition = "left" | "right" | "bottom" | "top";

interface SpinnerProps
  extends Omit<NextUISpinnerProps, "label" | "labelColor"> {
  label?: ReactNode;
  labelPosition?: SpinnerLabelPosition;
  labelColor?: SpinnerColor | "foreground";
  color?: SpinnerColor;
  size?: SpinnerSize;
  containerClassName?: string;
  labelClassName?: string;
  disableAnimation?: boolean;
  strokeWidth?: number;
}
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      // Label configuration
      label,
      labelPosition = "right",
      labelColor = "foreground",
      color = "default",
      size = "md",
      containerClassName,
      labelClassName,
      disableAnimation = false,
      strokeWidth = 4,
      ...props
    },
    ref,
  ) => {
    const getFlexDirection = () => {
      switch (labelPosition) {
        case "top":
          return "flex-col";
        case "bottom":
          return "flex-col-reverse";
        case "left":
          return "flex-row-reverse";
        case "right":
          return "flex-row";
      }
    };

    const getLabelColorClass = () => {
      if (labelColor === "foreground") return "text-foreground";
      return `text-${labelColor}`;
    };

    return (
      <div
        ref={ref}
        className={`
          flex items-center justify-center gap-2
          ${getFlexDirection()}
          ${containerClassName}
        `}
      >
        <NextUISpinner
          color={color}
          size={size}
          disableAnimation={disableAnimation}
          strokeWidth={strokeWidth}
          {...props}
        />

        {label && (
          <span
            className={`
              font-medium text-sm
              ${getLabelColorClass()}
              ${labelClassName}
            `}
          >
            {label}
          </span>
        )}
      </div>
    );
  },
);

Spinner.displayName = "Spinner";
