import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { forwardRef } from "react";
import { ScrollShadow } from "@nextui-org/react";
const Scroll = forwardRef(
  ({ width = "100%", height = "100%", style, ...props }, ref) => {
    const combinedStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollShadow, { ref, style: combinedStyle, ...props });
  }
);
Scroll.displayName = "Scroll";
export {
  Scroll
};
//# sourceMappingURL=x-react.es.js.map
