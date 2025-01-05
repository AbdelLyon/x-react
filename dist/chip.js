import { Chip as Chip$1 } from '@nextui-org/react';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/chip/Chip.tsx
var Chip = forwardRef(
  ({
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
  }, ref) => {
    return /* @__PURE__ */ jsx(
      Chip$1,
      {
        ref,
        avatar,
        startContent,
        endContent,
        variant,
        color,
        size,
        radius,
        isDisabled,
        className,
        classNames,
        onClose,
        ...props,
        children
      }
    );
  }
);
Chip.displayName = "Chip";

export { Chip };
//# sourceMappingURL=chip.js.map
//# sourceMappingURL=chip.js.map