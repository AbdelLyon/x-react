import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Spinner as Spinner$1 } from "@nextui-org/react";
const Spinner = forwardRef(
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
export {
  Spinner
};
//# sourceMappingURL=x-react.es.js.map
