import { jsxs, jsx } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs(
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
        className: classNames?.base,
        ...props,
        children: [
          header !== void 0 && /* @__PURE__ */ jsx(CardHeader, { className: classNames?.header, children: header }),
          /* @__PURE__ */ jsx(CardBody, { className: classNames?.body, children }),
          footer !== void 0 && /* @__PURE__ */ jsx(CardFooter, { className: classNames?.footer, ...footerProps, children: footer })
        ]
      }
    );
  }
);
Card.displayName = "Card";
export {
  Card
};
