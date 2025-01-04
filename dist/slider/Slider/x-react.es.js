import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { forwardRef, useState } from "react";
import { Slider } from "@nextui-org/react";
const defaultFormatValue = (value, formatOptions) => {
  return value.map(
    (v) => formatOptions ? new Intl.NumberFormat(void 0, formatOptions).format(v) : v
  ).join(" – ");
};
const LabelComponent = ({
  position,
  content,
  className
}) => {
  if (position === "none") {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      className: `text-small font-medium text-default-500 ${className} ${position === "top" ? "order-first" : "order-last"}`,
      children: content
    }
  );
};
const RangeSlider = forwardRef(
  ({
    sliderProps,
    initialValue = [0, 100],
    formatOptions,
    label,
    labelPosition = "bottom",
    formatValue,
    renderLabel,
    onChange,
    containerClassName,
    labelClassName
  }, ref) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (newValue) => {
      const typedValue = Array.isArray(newValue) ? newValue : [newValue];
      setValue(typedValue);
      onChange == null ? void 0 : onChange(typedValue);
    };
    const formattedValue = formatValue ? formatValue(value) : defaultFormatValue(value, formatOptions);
    const labelContent = renderLabel ? renderLabel(value) : `${label}: ${formattedValue}`;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: `flex h-max w-full max-w-md flex-col items-start justify-center gap-2 ${containerClassName}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LabelComponent,
            {
              position: labelPosition,
              content: labelContent,
              className: labelClassName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              value,
              onChange: handleChange,
              label,
              className: "max-w-md",
              formatOptions,
              ...sliderProps
            }
          )
        ]
      }
    );
  }
);
RangeSlider.displayName = "RangeSlider";
export {
  RangeSlider
};
//# sourceMappingURL=x-react.es.js.map
