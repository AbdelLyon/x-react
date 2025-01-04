import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/x-react.es.js";
const Stack = forwardRef(
  ({ children, spacing = 4, align = "start", justify = "start", className }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex flex-col",
          `gap-${spacing}`,
          {
            "items-start": align === "start",
            "items-center": align === "center",
            "items-end": align === "end",
            "justify-start": justify === "start",
            "justify-center": justify === "center",
            "justify-end": justify === "end",
            "justify-between": justify === "between"
          },
          className
        ),
        children
      }
    );
  }
);
export {
  Stack
};
//# sourceMappingURL=x-react.es.js.map
