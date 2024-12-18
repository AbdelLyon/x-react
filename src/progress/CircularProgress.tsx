import { forwardRef, useEffect, useCallback, useState } from "react";
import {
  CircularProgress as NextUICircularProgress,
  CircularProgressProps as NextUICircularProgressProps,
} from "@nextui-org/react";

type CircularProgressColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type CircularProgressSize = "sm" | "md" | "lg";

interface CircularProgressProps
  extends Omit<NextUICircularProgressProps, "color" | "size"> {
  // Appearance
  color?: CircularProgressColor;
  size?: CircularProgressSize;
  strokeWidth?: number;

  // Content
  label?: string;
  valueLabel?: React.ReactNode;
  showValueLabel?: boolean;
  formatOptions?: Intl.NumberFormatOptions;

  // Behavior
  value?: number;
  minValue?: number;
  maxValue?: number;
  isIndeterminate?: boolean;
  isStriped?: boolean;

  // Auto-increment functionality
  autoIncrement?: boolean;
  incrementInterval?: number;
  incrementStep?: number;

  // Styling
  className?: string;
  classNames?: Partial<
    Record<
      | "base"
      | "svgWrapper"
      | "svg"
      | "track"
      | "indicator"
      | "label"
      | "value"
      | "labelWrapper",
      string
    >
  >;

  // Callback
  onValueChange?: (value: number) => void;
}

export const CircularProgress = forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(
  (
    {
      // Appearance
      color = "primary",
      size = "md",
      strokeWidth = 3,

      // Content
      label,
      valueLabel,
      showValueLabel = false,
      formatOptions = { style: "percent" },

      // Behavior
      value = 0,
      minValue = 0,
      maxValue = 100,
      isIndeterminate = false,
      isStriped = false,

      // Auto-increment
      autoIncrement = false,
      incrementInterval = 500,
      incrementStep = 10,

      // Styling
      className,
      classNames,

      // Callback
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const [currentValue, setCurrentValue] = useState(value);

    // Handle auto-increment
    useEffect(() => {
      if (!autoIncrement) {
        setCurrentValue(value);
        return;
      }

      const interval = setInterval(() => {
        setCurrentValue((v) => {
          const newValue = v >= maxValue ? minValue : v + incrementStep;
          onValueChange?.(newValue);
          return newValue;
        });
      }, incrementInterval);

      return () => clearInterval(interval);
    }, [
      autoIncrement,
      value,
      incrementInterval,
      incrementStep,
      maxValue,
      minValue,
      onValueChange,
    ]);

    // Format value label
    const renderValueLabel = useCallback(() => {
      if (valueLabel) return valueLabel;

      const percentage = (currentValue - minValue) / (maxValue - minValue);
      return new Intl.NumberFormat(undefined, formatOptions).format(percentage);
    }, [currentValue, valueLabel, minValue, maxValue, formatOptions]);

    return (
      <NextUICircularProgress
        ref={ref}
        // Appearance
        color={color}
        size={size}
        strokeWidth={strokeWidth}
        // Content
        aria-label={label}
        label={label}
        valueLabel={renderValueLabel()}
        showValueLabel={showValueLabel}
        // Behavior
        value={currentValue}
        minValue={minValue}
        maxValue={maxValue}
        isIndeterminate={isIndeterminate}
        isStriped={isStriped}
        // Styling
        className={className}
        classNames={classNames}
        {...props}
      />
    );
  },
);

CircularProgress.displayName = "CircularProgress";
