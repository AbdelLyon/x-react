import { forwardRef, ReactNode } from "react";
import {
  Progress as NextUIProgress,
  ProgressProps as NextUIProgressProps,
} from "@nextui-org/react";

interface AdditionalProgressProps {
  label?: ReactNode;
  labelPosition?: "top" | "bottom" | "none";
  containerClassName?: string;
  labelClassName?: string;
}

interface ProgressProps extends NextUIProgressProps, AdditionalProgressProps {}

const defaultProps = {
  labelPosition: "top" as const,
  size: "md" as const,
  color: "primary" as const,
  radius: "full" as const,
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" } as Intl.NumberFormatOptions,
  showValueLabel: true,
  isIndeterminate: false,
  isStriped: false,
  isDisabled: false,
  disableAnimation: false,
};

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      label,
      labelPosition = defaultProps.labelPosition,
      containerClassName,
      labelClassName,
      value = 0,
      maxValue = defaultProps.maxValue,
      formatOptions = defaultProps.formatOptions,
      valueLabel,
      showValueLabel = defaultProps.showValueLabel,
      classNames,
      ...props
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

    const renderLabel = (): ReactNode => {
      if (labelPosition === "none") return null;

      return (
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
    };

    return (
      <div
        ref={ref}
        className={`
        flex w-full max-w-md flex-col gap-2
        ${containerClassName}
      `}
      >
        {renderLabel()}

        <NextUIProgress
          {...defaultProps}
          {...props}
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
