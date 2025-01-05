import { forwardRef, useState, useEffect } from 'react';
import { Progress as Progress$1, CircularProgress as CircularProgress$1 } from '@nextui-org/react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/progress/Progress.tsx
var defaultProps = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: true
};
var Progress = forwardRef(
  ({
    label,
    labelPosition = "top",
    containerClassName,
    labelClassName,
    value = 0,
    maxValue = 100,
    formatOptions = defaultProps.formatOptions,
    valueLabel,
    showValueLabel = defaultProps.showValueLabel,
    classNames,
    ...nextUIProps
  }, ref) => {
    const getValueLabel = () => {
      const formattedValue = new Intl.NumberFormat(
        void 0,
        formatOptions
      ).format(value / maxValue);
      if (typeof valueLabel === "string" && valueLabel.trim() !== "") {
        return valueLabel;
      }
      return formattedValue;
    };
    const labelComponent = labelPosition === "none" ? void 0 : /* @__PURE__ */ jsxs(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${labelClassName ?? ""}
      ${labelPosition === "top" ? "order-first" : "order-last"}
    `,
        children: [
          label !== void 0 && /* @__PURE__ */ jsx("span", { children: label }),
          showValueLabel && /* @__PURE__ */ jsx("span", { children: getValueLabel() })
        ]
      }
    );
    const progressProps = {
      value,
      maxValue,
      formatOptions,
      showValueLabel,
      ...nextUIProps,
      classNames: {
        ...classNames,
        base: `w-full ${typeof classNames?.base === "string" && classNames.base}`
      }
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: `flex w-full max-w-md flex-col gap-2 ${containerClassName}`,
        children: [
          labelComponent,
          /* @__PURE__ */ jsx(Progress$1, { ...defaultProps, ...progressProps })
        ]
      }
    );
  }
);
Progress.displayName = "Progress";
var defaultProps2 = {
  color: "primary",
  size: "md",
  strokeWidth: 3,
  showValueLabel: false,
  formatOptions: { style: "percent" },
  value: 0,
  minValue: 0,
  maxValue: 100
};
var defaultIncrementProps = {
  autoIncrement: false,
  incrementInterval: 500,
  incrementStep: 10
};
var CircularProgress = forwardRef(
  ({
    // Auto-increment props
    autoIncrement = defaultIncrementProps.autoIncrement,
    incrementInterval = defaultIncrementProps.incrementInterval,
    incrementStep = defaultIncrementProps.incrementStep,
    onValueChange,
    // NextUI props
    value = defaultProps2.value,
    minValue = defaultProps2.minValue,
    maxValue = defaultProps2.maxValue,
    formatOptions = defaultProps2.formatOptions,
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
      ...defaultProps2,
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

export { CircularProgress, Progress };
//# sourceMappingURL=progress.js.map
//# sourceMappingURL=progress.js.map