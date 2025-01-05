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
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Button as Button$1 } from "@nextui-org/react";
import { cn } from "./utils/utils.es.js";
const Button = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      fullWidth = false,
      isLoading = false,
      isDisabled = false,
      startContent,
      endContent,
      className = "",
      LinkComponent,
      variant = "solid",
      classNames = {
        base: "",
        beforeContent: "",
        afterContent: "",
        content: ""
      },
      href,
      children,
      target,
      rel
    } = _b, props = __objRest(_b, [
      "fullWidth",
      "isLoading",
      "isDisabled",
      "startContent",
      "endContent",
      "className",
      "LinkComponent",
      "variant",
      "classNames",
      "href",
      "children",
      "target",
      "rel"
    ]);
    const baseStyles = cn(
      "transition-none font-normal border-1 rounded-md",
      fullWidth && "w-full",
      isLoading && "opacity-50 cursor-not-allowed",
      classNames.base,
      className
    );
    const Content = () => /* @__PURE__ */ jsxs(Fragment, { children: [
      startContent !== void 0 && /* @__PURE__ */ jsx("span", { className: cn("mr-2", classNames.beforeContent), children: startContent }),
      /* @__PURE__ */ jsx("span", { className: classNames.content, children }),
      endContent !== void 0 && /* @__PURE__ */ jsx("span", { className: cn("ml-2", classNames.afterContent), children: endContent })
    ] });
    const hasValidLink = href !== void 0 && href.length > 0 && LinkComponent !== void 0 && LinkComponent !== void 0;
    if (hasValidLink) {
      return /* @__PURE__ */ jsx(
        Button$1,
        __spreadProps(__spreadValues({
          ref
        }, props), {
          as: LinkComponent,
          variant,
          className: baseStyles,
          href,
          rel: target === "_blank" ? "noopener noreferrer" : rel,
          target,
          children: /* @__PURE__ */ jsx(Content, {})
        })
      );
    }
    return /* @__PURE__ */ jsx(
      Button$1,
      __spreadProps(__spreadValues({
        ref
      }, props), {
        variant,
        className: baseStyles,
        isDisabled,
        children: /* @__PURE__ */ jsx(Content, {})
      })
    );
  }
);
Button.displayName = "Button";
export {
  Button as B
};
//# sourceMappingURL=Button-DbRLWMRU.js.map
