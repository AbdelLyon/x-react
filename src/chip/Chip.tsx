import { Chip as ChipRoot, type ChipProps } from "@nextui-org/react";
import { forwardRef } from "react";

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      children,
      avatar,
      startContent,
      endContent,
      variant = "solid",
      color = "default",
      size = "md",
      radius = "full",
      isDisabled = false,
      className,
      classNames,
      onClose,
      ...props
    },
    ref,
  ) => {
    return (
      <ChipRoot
        ref={ref}
        avatar={avatar}
        startContent={startContent}
        endContent={endContent}
        variant={variant}
        color={color}
        size={size}
        radius={radius}
        isDisabled={isDisabled}
        className={className}
        classNames={classNames}
        onClose={onClose}
        {...props}
      >
        {children}
      </ChipRoot>
    );
  },
);

Chip.displayName = "Chip";
