import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/x-react.es.js";
const Section = forwardRef(
  ({ children, spacing = "md", className }, ref) => {
    const sectionClasses = cn(
      {
        "py-4": spacing === "sm",
        "py-8": spacing === "md",
        "py-12": spacing === "lg",
        "py-16": spacing === "xl"
      },
      className
    );
    return /* @__PURE__ */ jsx("section", { ref, className: sectionClasses, children });
  }
);
Section.displayName = "Section";
export {
  Section
};
//# sourceMappingURL=x-react.es.js.map
