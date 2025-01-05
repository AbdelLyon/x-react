import { forwardRef } from "react";
import type { InputOtpProps } from "@nextui-org/input-otp";
import { InputOtp as NextUIInputOtp } from "@nextui-org/input-otp";
import { cn } from "@/utils";

type InputOtpWrapperProps = {
  length?: number;
  label?: string;
  labelClasses?: string;
  containerClasses?: string;
} & Omit<InputOtpProps, "length">;

export const InputOtp = forwardRef<HTMLDivElement, InputOtpWrapperProps>(
  ({ length = 6, label, labelClasses, containerClasses, ...props }, ref) => {
    const defaultLabelClasses = "text-default-500 text-small mb-2";
    const defaultContainerClasses = "flex flex-col";

    return (
      <div ref={ref} className={cn(defaultContainerClasses, containerClasses)}>
        {label !== undefined && (
          <p className={cn(defaultLabelClasses, labelClasses)}>{label}</p>
        )}
        <NextUIInputOtp length={length} {...props} />
      </div>
    );
  },
);

InputOtp.displayName = "InputOtp";
