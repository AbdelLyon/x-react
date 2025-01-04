import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { forwardRef } from "react";
import { Progress as Progress$1 } from "@nextui-org/react";
const defaultProps = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" },
  showValueLabel: true
};
const Progress = forwardRef(
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
    const labelComponent = labelPosition === "none" ? void 0 : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `
      flex items-center justify-between
      text-small font-medium text-default-500
      ${labelClassName ?? ""}
      ${labelPosition === "top" ? "order-first" : "order-last"}
    `,
        children: [
          label !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
          showValueLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getValueLabel() })
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
        base: `w-full ${typeof (classNames == null ? void 0 : classNames.base) === "string" && classNames.base}`
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: `flex w-full max-w-md flex-col gap-2 ${containerClassName}`,
        children: [
          labelComponent,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress$1, { ...defaultProps, ...progressProps })
        ]
      }
    );
  }
);
Progress.displayName = "Progress";
export {
  Progress
};
//# sourceMappingURL=x-react.es.js.map
