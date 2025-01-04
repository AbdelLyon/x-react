import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/x-react.es.js";
const Container = forwardRef(
  ({ children, maxWidth = "lg", className }, ref) => {
    const containerClasses = cn(
      "mx-auto px-4",
      {
        "max-w-screen-sm": maxWidth === "sm",
        "max-w-screen-md": maxWidth === "md",
        "max-w-screen-lg": maxWidth === "lg",
        "max-w-screen-xl": maxWidth === "xl",
        "max-w-screen-2xl": maxWidth === "2xl",
        "max-w-full": maxWidth === "full"
      },
      className
    );
    return /* @__PURE__ */ jsx("div", { ref, className: containerClasses, children });
  }
);
Container.displayName = "Container";
export {
  Container
};
//# sourceMappingURL=x-react.es.js.map
