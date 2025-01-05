import { forwardRef } from 'react';
import { Spinner as Spinner$1 } from '@nextui-org/react';
import { jsx } from 'react/jsx-runtime';

// src/spiner/Spiner.tsx
var Spinner = forwardRef(
  ({ color = "default", size = "md", strokeWidth = 4, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      Spinner$1,
      {
        ref,
        color,
        size,
        strokeWidth,
        ...props
      }
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner };
//# sourceMappingURL=spiner.js.map
//# sourceMappingURL=spiner.js.map