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
  disableAnimation?: boolean; // Utilisée pour des contrôles locaux
  strokeWidth?: number;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      label,
      labelPosition = "right",
      labelColor = "foreground",
      color = "default",
      size = "md",
      containerClassName = "",
      labelClassName = "",
      disableAnimation,
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
        default:
          return "flex-row";
      }
    };

    const getLabelColorClass = () => {
      return labelColor === "foreground"
        ? "text-foreground"
        : `text-${labelColor}`;
    };

    return (
      <div
        ref={ref}
        className={`flex items-center justify-center gap-2 ${getFlexDirection()} ${containerClassName}`}
      >
        <NextUISpinner
          color={color}
          size={size}
          strokeWidth={strokeWidth}
          disableAnimation={disableAnimation}
          {...props}
        />
        {label && (
          <span
            className={`font-medium text-sm ${getLabelColorClass()} ${labelClassName}`}
          >
            {label}
          </span>
        )}
      </div>
    );
  },
);

Spinner.displayName = "Spinner";
