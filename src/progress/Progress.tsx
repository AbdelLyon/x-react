import { forwardRef, ReactNode } from "react";
import {
  Progress as NextUIProgress,
  ProgressProps as NextUIProgressProps,
} from "@nextui-org/react";

type ProgressSize = "sm" | "md" | "lg";
type ProgressColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type ProgressRadius = "none" | "sm" | "md" | "lg" | "full";

interface ProgressProps extends NextUIProgressProps {
  // Label configuration
  label?: ReactNode;
  labelPosition?: "top" | "bottom" | "none";

  // Size and appearance
  size?: ProgressSize;
  color?: ProgressColor;
  radius?: ProgressRadius;

  // Value and formatting
  value?: number;
  minValue?: number;
  maxValue?: number;
  formatOptions?: Intl.NumberFormatOptions;
  valueLabel?: ReactNode;
  showValueLabel?: boolean;

  isIndeterminate?: boolean;
  isStriped?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;

  containerClassName?: string;
  labelClassName?: string;
  classNames?: Partial<
    Record<
      "base" | "labelWrapper" | "label" | "track" | "value" | "indicator",
      string
    >
  >;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      label,
      labelPosition = "top",
      size = "md",
      color = "primary",
      radius = "full",
      value = 0,
      minValue = 0,
      maxValue = 100,
      formatOptions = { style: "percent" },
      valueLabel,
      showValueLabel = true,
      isIndeterminate = false,
      isStriped = false,
      isDisabled = false,
      disableAnimation = false,
      containerClassName,
      labelClassName,
      classNames,
      ...props
    },
    ref,
  ) => {
    const defaultValueLabel = () => {
      const formattedValue = new Intl.NumberFormat(
        undefined,
        formatOptions,
      ).format(value / maxValue);

      return valueLabel || formattedValue;
    };

    return (
      <div
        ref={ref}
        className={`
          flex flex-col gap-2 w-full max-w-md
          ${containerClassName}
        `}
      >
        {(labelPosition === "top" || labelPosition === "bottom") && (
          <div
            className={`
              text-default-500 font-medium text-small
              flex justify-between items-center
              ${labelClassName}
              ${labelPosition === "top" ? "order-first" : "order-last"}
            `}
          >
            {label && <span>{label}</span>}
            {showValueLabel && <span>{defaultValueLabel()}</span>}
          </div>
        )}

        <NextUIProgress
          value={value}
          minValue={minValue}
          maxValue={maxValue}
          size={size}
          color={color}
          radius={radius}
          isIndeterminate={isIndeterminate}
          isStriped={isStriped}
          isDisabled={isDisabled}
          disableAnimation={disableAnimation}
          classNames={{
            ...classNames,
            base: `w-full ${classNames?.base || ""}`,
          }}
          {...props}
        />
      </div>
    );
  },
);

Progress.displayName = "Progress";
