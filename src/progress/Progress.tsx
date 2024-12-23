import { forwardRef, ReactNode } from "react";
import {
  Progress as ProgressRoot,
  ProgressProps as ProgressRootProps,
} from "@nextui-org/react";

interface AdditionalProgressProps {
  label?: ReactNode;
  labelPosition?: "top" | "bottom" | "none";
  containerClassName?: string;
  labelClassName?: string;
}

interface ProgressProps extends ProgressRootProps, AdditionalProgressProps {}

const defaultProps = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" } as const,
  showValueLabel: true,
  isIndeterminate: false,
  isStriped: false,
  isDisabled: false,
  disableAnimation: false,
} as const;

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
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
    },
    ref,
  ) => {
    const getValueLabel = (): string => {
      const formattedValue = new Intl.NumberFormat(
        undefined,
        formatOptions,
      ).format(value / maxValue);

      return valueLabel?.toString() || formattedValue;
    };

    const labelComponent =
      labelPosition === "none" ? null : (
        <div
          className={`
     flex items-center justify-between
     text-small font-medium text-default-500
     ${labelClassName}
     ${labelPosition === "top" ? "order-first" : "order-last"}
   `}
        >
          {label && <span>{label}</span>}
          {showValueLabel && <span>{getValueLabel()}</span>}
        </div>
      );

    return (
      <div
        ref={ref}
        className={`flex w-full max-w-md flex-col gap-2 ${containerClassName || ""}`}
      >
        {labelComponent}
        <ProgressRoot
          {...defaultProps}
          {...nextUIProps}
          value={value}
          maxValue={maxValue}
          classNames={{
            ...classNames,
            base: `w-full ${classNames?.base || ""}`,
          }}
        />
      </div>
    );
  },
);

Progress.displayName = "Progress";
