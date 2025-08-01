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
import { jsx } from "react/jsx-runtime";
import { Button as Button$1, Spinner } from "@heroui/react";
import { forwardRef } from "react";
import { mergeTailwindClasses } from "../../utils/index.es.js";
const Button = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      variant = "solid",
      color = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      className,
      onClick
    } = _b, props = __objRest(_b, [
      "variant",
      "color",
      "size",
      "loading",
      "leftIcon",
      "rightIcon",
      "fullWidth",
      "children",
      "disabled",
      "className",
      "onClick"
    ]);
    const isDisabled = disabled || loading;
    const handlePress = (e) => {
      e.continuePropagation();
      onClick == null ? void 0 : onClick(e);
    };
    return /* @__PURE__ */ jsx(
      Button$1,
      __spreadProps(__spreadValues({
        ref,
        variant,
        onPress: handlePress,
        color,
        size,
        isDisabled,
        startContent: loading ? /* @__PURE__ */ jsx(Spinner, { size: "sm", color: "current" }) : leftIcon,
        endContent: !loading ? rightIcon : void 0,
        className: mergeTailwindClasses(
          fullWidth && "w-full",
          loading && "cursor-wait",
          className
        )
      }, props), {
        children
      })
    );
  }
);
Button.displayName = "Button";
export {
  Button
};
