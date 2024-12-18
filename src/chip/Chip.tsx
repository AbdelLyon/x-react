import { Chip as ChipRoot, type ChipProps } from "@nextui-org/react";
import { forwardRef } from "react";

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      // Content props with defaults
      children,
      avatar,
      startContent,
      endContent,

      // Appearance props with defaults
      variant = "solid",
      color = "default",
      size = "md",
      radius = "full",

      // State props with defaults
      isDisabled = false,

      // Styling props
      className,
      classNames,

      // Event handlers
      onClose,

      ...props
    },
    ref,
  ) => {
    return (
      <ChipRoot
        ref={ref}
        // Content
        avatar={avatar}
        startContent={startContent}
        endContent={endContent}
        // Appearance
        variant={variant}
        color={color}
        size={size}
        radius={radius}
        // State
        isDisabled={isDisabled}
        // Styling
        className={className}
        classNames={classNames}
        // Events
        onClose={onClose}
        {...props}
      >
        {children}
      </ChipRoot>
    );
  },
);

Chip.displayName = "Chip";
