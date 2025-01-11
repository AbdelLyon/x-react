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
import { Tabs as Tabs$1, Tab } from "@nextui-org/tabs";
import { mergeTailwindClasses } from "../../utils/index.es.js";
const Tabs = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      items,
      defaultActiveTab,
      onTabChange,
      renderTabContent,
      variant = "solid",
      color = "primary",
      size = "md",
      radius = "md",
      fullWidth = false,
      placement = "top",
      isVertical = false,
      disableAnimation = false,
      disableCursorAnimation = false,
      destroyInactiveTabPanel = true
    } = _b, props = __objRest(_b, [
      "items",
      "defaultActiveTab",
      "onTabChange",
      "renderTabContent",
      "variant",
      "color",
      "size",
      "radius",
      "fullWidth",
      "placement",
      "isVertical",
      "disableAnimation",
      "disableCursorAnimation",
      "destroyInactiveTabPanel"
    ]);
    var _a2;
    const handleSelectionChange = (key) => {
      onTabChange == null ? void 0 : onTabChange(key.toString());
    };
    const defaultContent = (item) => item.content;
    const contentRenderer = renderTabContent != null ? renderTabContent : defaultContent;
    const getVariantStyles = () => {
      if (variant === "bordered") {
        return "border-1 border-default";
      }
      return "";
    };
    return /* @__PURE__ */ jsx(
      Tabs$1,
      __spreadProps(__spreadValues({
        ref,
        variant,
        color,
        size,
        radius,
        fullWidth,
        placement,
        isVertical,
        disableAnimation,
        disableCursorAnimation,
        destroyInactiveTabPanel,
        defaultSelectedKey: defaultActiveTab,
        classNames: __spreadProps(__spreadValues({}, props.classNames), {
          tabList: mergeTailwindClasses(
            getVariantStyles(),
            (_a2 = props.classNames) == null ? void 0 : _a2.tabList
          )
        }),
        onSelectionChange: handleSelectionChange
      }, props), {
        children: items.map(
          (item) => /* @__PURE__ */ jsx(
            Tab,
            {
              title: item.title,
              titleValue: item.titleValue,
              href: item.href,
              target: item.target,
              isDisabled: item.disabled,
              children: contentRenderer(item)
            },
            item.key
          )
        )
      })
    );
  }
);
Tabs.displayName = "Tabs";
export {
  Tabs
};
