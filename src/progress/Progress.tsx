import type { ReactNode } from "react";
import { forwardRef } from "react";
import type { ProgressProps as ProgressRootProps } from "@nextui-org/react";
import { Progress as ProgressRoor } from "@nextui-org/react";

interface AdditionalProgressProps {
  label?: ReactNode;
  labelPosition?: "top" | "bottom" | "none";
  containerClassName?: string;
  labelClassName?: string;
}

interface ProgressProps
  extends Omit<ProgressRootProps, "classNames">,
    AdditionalProgressProps {
  classNames?: ProgressRootProps["classNames"];
}

const defaultProps = {
  size: "md",
  color: "primary",
  radius: "full",
  minValue: 0,
  maxValue: 100,
  formatOptions: { style: "percent" } as const,
  showValueLabel: true,
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

      if (typeof valueLabel === "string" && valueLabel.trim() !== "") {
        return valueLabel;
      }
      return formattedValue;
    };

    const labelComponent =
      labelPosition === "none" ? null : (
        <div
          className={`
      flex items-center justify-between
      text-small font-medium text-default-500
      ${labelClassName ?? ""}
      ${labelPosition === "top" ? "order-first" : "order-last"}
    `}
        >
          {label !== null && <span>{label}</span>}
          {showValueLabel && <span>{getValueLabel()}</span>}
        </div>
      );

    const progressProps = {
      value,
      maxValue,
      formatOptions,
      showValueLabel,
      ...nextUIProps,
      classNames: {
        ...classNames,
        base: `w-full ${typeof classNames?.base === "string" && classNames?.base}`,
      },
    };

    return (
      <div
        ref={ref}
        className={`flex w-full max-w-md flex-col gap-2 ${containerClassName}`}
      >
        {labelComponent}
        <ProgressRoor {...defaultProps} {...progressProps} />
      </div>
    );
  },
);

Progress.displayName = "Progress";
