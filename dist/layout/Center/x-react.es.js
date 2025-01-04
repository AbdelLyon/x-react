import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { forwardRef } from "react";
import { cn } from "../../utils/x-react.es.js";
const Center = forwardRef(
  ({ children, inline = false, className }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          inline ? "inline-flex" : "flex",
          "items-center justify-center",
          className
        ),
        children
      }
    );
  }
);
export {
  Center
};
//# sourceMappingURL=x-react.es.js.map
