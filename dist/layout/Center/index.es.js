import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/index.es.js";
const Center = forwardRef(
  ({ children, inline = false, className }, ref) => {
    return /* @__PURE__ */ jsx(
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