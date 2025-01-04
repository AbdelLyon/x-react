import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { forwardRef } from "react";
import { Card as Card$1, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
const Card = forwardRef(
  ({
    children,
    shadow = "md",
    radius = "lg",
    fullWidth = false,
    isHoverable = false,
    isPressable = false,
    isBlurred = false,
    isFooterBlurred = false,
    isDisabled = false,
    disableAnimation = false,
    disableRipple = false,
    allowTextSelectionOnPress = false,
    classNames,
    header,
    footer,
    footerProps,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card$1,
      {
        ref,
        shadow,
        radius,
        fullWidth,
        isHoverable,
        isPressable,
        isBlurred,
        isFooterBlurred,
        isDisabled,
        disableAnimation,
        disableRipple,
        allowTextSelectionOnPress,
        className: classNames == null ? void 0 : classNames.base,
        ...props,
        children: [
          header !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: classNames == null ? void 0 : classNames.header, children: header }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardBody, { className: classNames == null ? void 0 : classNames.body, children }),
          footer !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: classNames == null ? void 0 : classNames.footer, ...footerProps, children: footer })
        ]
      }
    );
  }
);
Card.displayName = "Card";
export {
  Card
};
//# sourceMappingURL=x-react.es.js.map
