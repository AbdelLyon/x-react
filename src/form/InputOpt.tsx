import { forwardRef } from "react";
import type { InputOtpProps } from "@nextui-org/react";
import { InputOtp as NextUIInputOtp } from "@nextui-org/react";
import { cn } from "@/utils";

interface InputOtpWrapperProps extends Omit<InputOtpProps, "length"> {
  length?: number;
  label?: string;
  labelClasses?: string;
  containerClasses?: string;
}

export const InputOtp = forwardRef<HTMLDivElement, InputOtpWrapperProps>(
  (
    {
      length = 6,
      label = `${length} digits OTP`,
      labelClasses,
      containerClasses,
      ...props
    },
    ref,
  ) => {
    const defaultLabelClasses = "text-default-500 text-small mb-2";
    const defaultContainerClasses = "flex flex-col";

    return (
      <div ref={ref} className={cn(defaultContainerClasses, containerClasses)}>
        {label && (
          <p className={cn(defaultLabelClasses, labelClasses)}>{label}</p>
        )}
        <NextUIInputOtp length={length} {...props} />
      </div>
    );
  },
);

InputOtp.displayName = "InputOtp";
