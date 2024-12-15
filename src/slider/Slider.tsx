import { forwardRef, useState, ReactNode } from "react";
import { Slider as NextUISlider, SliderProps } from "@nextui-org/react";

interface RangeSliderProps<T extends number[]> {
  sliderProps?: Omit<SliderProps, "value" | "onChange">;

  initialValue?: T;

  formatOptions?: Intl.NumberFormatOptions;

  label?: string;
  labelPosition?: "top" | "bottom" | "none";

  formatValue?: (value: T) => string;
  renderLabel?: (value: T) => ReactNode;

  onChange?: (value: T) => void;

  containerClassName?: string;
  labelClassName?: string;
}

export const RangeSlider = forwardRef<
  HTMLDivElement,
  RangeSliderProps<number[]>
>(
  (
    {
      sliderProps,
      initialValue = [0, 100],
      formatOptions,
      label,
      labelPosition = "bottom",
      formatValue,
      renderLabel,
      onChange,
      containerClassName,
      labelClassName,
    },
    ref,
  ) => {
    const [value, setValue] = useState<number[]>(initialValue);

    const handleChange = (newValue: number | number[]) => {
      const typedValue = Array.isArray(newValue) ? newValue : [newValue];
      setValue(typedValue);
      onChange?.(typedValue);
    };

    const defaultFormatValue = (val: number[]) => {
      return val
        .map((v) =>
          formatOptions
            ? new Intl.NumberFormat(undefined, formatOptions).format(v)
            : v,
        )
        .join(" – ");
    };

    const formattedValue = formatValue
      ? formatValue(value)
      : defaultFormatValue(value);

    const labelContent = renderLabel
      ? renderLabel(value)
      : `${label}: ${formattedValue}`;

    return (
      <div
        ref={ref}
        className={`
          flex flex-col gap-2 w-full h-full max-w-md 
          items-start justify-center
          ${containerClassName}
        `}
      >
        {(labelPosition === "top" || labelPosition === "bottom") && (
          <p
            className={`
              text-default-500 font-medium text-small
              ${labelClassName}
              ${labelPosition === "top" ? "order-first" : "order-last"}
            `}
          >
            {labelContent}
          </p>
        )}

        <NextUISlider
          value={value}
          onChange={handleChange}
          label={label}
          className="max-w-md"
          formatOptions={formatOptions}
          {...sliderProps}
        />
      </div>
    );
  },
);
RangeSlider.displayName = "RangeSlider";
