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
import { forwardRef } from "react";
import { Pagination as Pagination$1 } from "@nextui-org/react";
import { cn } from "../../utils/index.js";
const Pagination = forwardRef(
  (_a, ref) => {
    var _b = _a, { containerClasses, classNames } = _b, props = __objRest(_b, ["containerClasses", "classNames"]);
    return /* @__PURE__ */ jsx("div", { className: cn("w-full flex justify-center", containerClasses), children: /* @__PURE__ */ jsx(
      Pagination$1,
      __spreadValues({
        ref,
        classNames: __spreadProps(__spreadValues({}, classNames), {
          base: cn("gap-2", classNames == null ? void 0 : classNames.base),
          item: cn("data-[hover=true]:bg-default-100", classNames == null ? void 0 : classNames.item),
          prev: cn("data-[hover=true]:bg-default-100", classNames == null ? void 0 : classNames.prev),
          next: cn("data-[hover=true]:bg-default-100", classNames == null ? void 0 : classNames.next)
        })
      }, props)
    ) });
  }
);
Pagination.displayName = "Pagination";
export {
  Pagination
};