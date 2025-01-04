import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Switch as Switch$1 } from "@nextui-org/react";
const Switch = forwardRef(
  ({ width, height, style, ...props }, ref) => {
    const combinedStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style
    };
    return /* @__PURE__ */ jsx(Switch$1, { ref, style: combinedStyle, ...props });
  }
);
Switch.displayName = "Switch";
export {
  Switch
};
//# sourceMappingURL=x-react.es.js.map
