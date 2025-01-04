import { jsx } from "react/jsx-runtime";
import { forwardRef, useState, useEffect } from "react";
import { CircularProgress as CircularProgress$1 } from "@nextui-org/react";
const defaultProps = {
  color: "primary",
  size: "md",
  strokeWidth: 3,
  showValueLabel: false,
  formatOptions: { style: "percent" },
  value: 0,
  minValue: 0,
  maxValue: 100
};
const defaultIncrementProps = {
  autoIncrement: false,
  incrementInterval: 500,
  incrementStep: 10
};
const CircularProgress = forwardRef(
  ({
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
  }, ref) => {
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
      onValueChange
    ]);
    const getValueLabel = () => {
      if (valueLabel !== void 0) {
        return valueLabel;
      }
      const percentage = (currentValue - minValue) / (maxValue - minValue);
      return new Intl.NumberFormat(void 0, formatOptions).format(percentage);
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
      classNames
    };
    return /* @__PURE__ */ jsx(CircularProgress$1, { ...circularProgressProps });
  }
);
CircularProgress.displayName = "CircularProgress";
export {
  CircularProgress
};
