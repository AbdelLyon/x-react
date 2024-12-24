import type { ReactNode } from "react";
import { forwardRef, useEffect, useState } from "react";
import type { CircularProgressProps as CircularProgressRootProps } from "@nextui-org/react";
import { CircularProgress as CircularProgressRoot } from "@nextui-org/react";

type AdditionalCircularProgressProps = {
  autoIncrement?: boolean;
  incrementInterval?: number;
  incrementStep?: number;
  onValueChange?: (value: number) => void;
}

type CircularProgressProps = Omit<CircularProgressRootProps, "classNames"> &
  AdditionalCircularProgressProps & {
    classNames?: CircularProgressRootProps["classNames"];
  };

const defaultProps = {
  color: "primary",
  size: "md",
  strokeWidth: 3,
  showValueLabel: false,
  formatOptions: { style: "percent" } as const,
  value: 0,
  minValue: 0,
  maxValue: 100,
} as const;

const defaultIncrementProps = {
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
      autoIncrement = defaultIncrementProps.autoIncrement,
      incrementInterval = defaultIncrementProps.incrementInterval,
      incrementStep = defaultIncrementProps.incrementStep,
      onValueChange,

      // NextUI props
      value = defaultProps.value,
      minValue = defaultProps.minValue,
      maxValue = defaultProps.maxValue,
      formatOptions = defaultProps.formatOptions,
      valueLabel,
      classNames,
      showValueLabel,
      color,
      size,
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

    const getValueLabel = (): ReactNode => {
      if (valueLabel !== null && valueLabel !== undefined) {
        return valueLabel;
      }

      const percentage = (currentValue - minValue) / (maxValue - minValue);
      return new Intl.NumberFormat(undefined, formatOptions).format(percentage);
    };

    const circularProgressProps = {
      ...defaultProps,
      ...nextUIProps,
      ref,
      value: currentValue,
      minValue,
      maxValue,
      formatOptions,
      valueLabel: getValueLabel(),
      showValueLabel,
      color,
      size,
      classNames,
    };

    return <CircularProgressRoot {...circularProgressProps} />;
  },
);

CircularProgress.displayName = "CircularProgress";
