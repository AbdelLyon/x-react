import { forwardRef, useEffect, useCallback, useState } from "react";
import {
  CircularProgress as CircularProgressRoot,
  CircularProgressProps as CircularProgressRootProps,
} from "@nextui-org/react";

interface AdditionalCircularProgressProps {
  autoIncrement?: boolean;
  incrementInterval?: number;
  incrementStep?: number;
  onValueChange?: (value: number) => void;
}

interface CircularProgressProps
  extends Omit<CircularProgressRootProps, "classNames">,
    AdditionalCircularProgressProps {
  classNames?: CircularProgressRootProps["classNames"];
}

const defaultProps = {
  color: "primary",
  size: "md",
  strokeWidth: 3,
  showValueLabel: false,
  formatOptions: { style: "percent" } as const,
  value: 0,
  minValue: 0,
  maxValue: 100,
  autoIncrement: false,
  incrementInterval: 500,
  incrementStep: 10,
} as const;

export const CircularProgress = forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(
  (
    {
      // Auto-increment props
      autoIncrement = defaultProps.autoIncrement,
      incrementInterval = defaultProps.incrementInterval,
      incrementStep = defaultProps.incrementStep,
      onValueChange,

      // NextUI props
      value = defaultProps.value,
      minValue = defaultProps.minValue,
      maxValue = defaultProps.maxValue,
      formatOptions = defaultProps.formatOptions,
      valueLabel,
      classNames,
      ...nextUIProps
    },
    ref,
  ) => {
    const [currentValue, setCurrentValue] = useState(value);

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

    const getValueLabel = useCallback(() => {
      if (valueLabel) return valueLabel;

      const percentage = (currentValue - minValue) / (maxValue - minValue);
      return new Intl.NumberFormat(undefined, formatOptions).format(percentage);
    }, [currentValue, valueLabel, minValue, maxValue, formatOptions]);

    const progressProps = {
      ...nextUIProps,
      value: currentValue,
      minValue,
      maxValue,
      formatOptions,
      valueLabel: getValueLabel(),
      classNames,
    };

    return (
      <CircularProgressRoot ref={ref} {...defaultProps} {...progressProps} />
    );
  },
);

CircularProgress.displayName = "CircularProgress";
