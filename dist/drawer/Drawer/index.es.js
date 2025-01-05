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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Drawer as Drawer$1, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@nextui-org/drawer";
import { cn } from "../../utils/index.es.js";
import { useDisclosure } from "../../hooks/useDisclosure/index.es.js";
import { Button } from "../../button/Button/index.es.js";
const isValidButtonLabel = (label) => typeof label === "string" && label.length > 0;
const Drawer = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      trigger,
      title,
      children,
      footer,
      buttonCloseLabel = "Close",
      buttonActionLabel,
      onAction,
      buttonCloseProps,
      buttonActionProps,
      classNames = {}
    } = _b, nextUIProps = __objRest(_b, [
      "trigger",
      "title",
      "children",
      "footer",
      "buttonCloseLabel",
      "buttonActionLabel",
      "onAction",
      "buttonCloseProps",
      "buttonActionProps",
      "classNames"
    ]);
    const [
      opened,
      {
        close,
        open
      }
    ] = useDisclosure();
    const handleAction = () => __async(void 0, null, function* () {
      try {
        yield onAction == null ? void 0 : onAction();
        close();
      } catch (error) {
        console.error("Action failed:", error);
      }
    });
    const handleKeyDown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    };
    const renderButtons = () => {
      const hasValidCloseLabel = isValidButtonLabel(buttonCloseLabel);
      const hasValidActionButton = isValidButtonLabel(buttonActionLabel) && onAction !== void 0;
      const defaultButtonProps = {
        color: "primary",
        radius: "sm"
      };
      return /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
        hasValidCloseLabel && /* @__PURE__ */ jsx(
          Button,
          __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, defaultButtonProps), {
            variant: "bordered",
            onPress: close,
            className: cn("border-primary/50", buttonCloseProps == null ? void 0 : buttonCloseProps.className)
          }), buttonCloseProps), {
            children: buttonCloseLabel
          })
        ),
        hasValidActionButton && /* @__PURE__ */ jsx(
          Button,
          __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, defaultButtonProps), {
            onPress: handleAction
          }), buttonActionProps), {
            children: buttonActionLabel
          })
        )
      ] });
    };
    const drawerClassNames = {
      wrapper: cn(classNames.wrapper),
      base: cn("bg-background rounded-none", classNames.base),
      backdrop: cn(classNames.backdrop),
      closeButton: cn("absolute right-4 top-4", classNames.closeButton),
      header: cn(classNames.header),
      body: cn(classNames.body),
      footer: cn(classNames.footer)
    };
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: open,
          onKeyDown: handleKeyDown,
          className: "inline-block",
          children: trigger
        }
      ),
      /* @__PURE__ */ jsx(
        Drawer$1,
        __spreadProps(__spreadValues({
          ref,
          isOpen: opened,
          onClose: close,
          classNames: drawerClassNames
        }, nextUIProps), {
          children: /* @__PURE__ */ jsx(DrawerContent, { children: () => /* @__PURE__ */ jsxs(Fragment, { children: [
            title !== void 0 && /* @__PURE__ */ jsx(DrawerHeader, { className: drawerClassNames.header, children: title }),
            /* @__PURE__ */ jsx(DrawerBody, { className: drawerClassNames.body, children }),
            /* @__PURE__ */ jsx(DrawerFooter, { className: drawerClassNames.footer, children: footer !== void 0 ? footer : renderButtons() })
          ] }) })
        })
      )
    ] });
  }
);
Drawer.displayName = "Drawer";
export {
  Drawer
};
