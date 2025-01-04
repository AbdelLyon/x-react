import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { forwardRef } from "react";
import { ButtonGroup } from "@nextui-org/react";
import { Button } from "../Button/x-react.es.js";
const Buttons = forwardRef(
  ({ buttons, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonGroup, { ref, ...props, children: buttons.map(({ key, label, buttonProps }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { ...buttonProps, children: label }, key)) });
  }
);
Buttons.displayName = "Buttons";
export {
  Buttons
};
//# sourceMappingURL=x-react.es.js.map
