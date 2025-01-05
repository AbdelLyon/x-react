var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Card as Card$1, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
const Card = forwardRef(
  (_a, ref) => {
    var _b = _a, {
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
      footerProps
    } = _b, props = __objRest(_b, [
      "children",
      "shadow",
      "radius",
      "fullWidth",
      "isHoverable",
      "isPressable",
      "isBlurred",
      "isFooterBlurred",
      "isDisabled",
      "disableAnimation",
      "disableRipple",
      "allowTextSelectionOnPress",
      "classNames",
      "header",
      "footer",
      "footerProps"
    ]);
    return /* @__PURE__ */ jsxs(
      Card$1,
      __spreadProps(__spreadValues({
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
        className: classNames == null ? void 0 : classNames.base
      }, props), {
        children: [
          header !== void 0 && /* @__PURE__ */ jsx(CardHeader, { className: classNames == null ? void 0 : classNames.header, children: header }),
          /* @__PURE__ */ jsx(CardBody, { className: classNames == null ? void 0 : classNames.body, children }),
          footer !== void 0 && /* @__PURE__ */ jsx(CardFooter, __spreadProps(__spreadValues({ className: classNames == null ? void 0 : classNames.footer }, footerProps), { children: footer }))
        ]
      })
    );
  }
);
Card.displayName = "Card";
export {
  Card
};
