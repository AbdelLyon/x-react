import { Button } from './chunk-Y76KLDKD.es.js';
import { cn } from './chunk-HWWI3HGE.es.js';
import './chunk-OFYPKX7Y.es.js';
import { forwardRef } from 'react';
import { useDisclosure, Drawer as Drawer$1, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '@nextui-org/react';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

var isValidButtonLabel = (label) => typeof label === "string" && label.length > 0;
var Drawer = forwardRef(
  ({
    trigger,
    title,
    children,
    footer,
    buttonCloseLabel = "Close",
    buttonActionLabel,
    onAction,
    buttonCloseProps,
    buttonActionProps,
    classNames = {},
    ...nextUIProps
  }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleAction = async () => {
      try {
        await onAction?.();
        onClose();
      } catch (error) {
        console.error("Action failed:", error);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onOpen();
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
          {
            ...defaultButtonProps,
            variant: "bordered",
            onPress: onClose,
            className: cn("border-primary/50", buttonCloseProps?.className),
            ...buttonCloseProps,
            children: buttonCloseLabel
          }
        ),
        hasValidActionButton && /* @__PURE__ */ jsx(
          Button,
          {
            ...defaultButtonProps,
            onPress: handleAction,
            ...buttonActionProps,
            children: buttonActionLabel
          }
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
          onClick: onOpen,
          onKeyDown: handleKeyDown,
          className: "inline-block",
          children: trigger
        }
      ),
      /* @__PURE__ */ jsx(
        Drawer$1,
        {
          ref,
          isOpen,
          onClose,
          classNames: drawerClassNames,
          ...nextUIProps,
          children: /* @__PURE__ */ jsx(DrawerContent, { children: () => /* @__PURE__ */ jsxs(Fragment, { children: [
            title !== void 0 && /* @__PURE__ */ jsx(DrawerHeader, { className: drawerClassNames.header, children: title }),
            /* @__PURE__ */ jsx(DrawerBody, { className: drawerClassNames.body, children }),
            /* @__PURE__ */ jsx(DrawerFooter, { className: drawerClassNames.footer, children: footer !== void 0 ? footer : renderButtons() })
          ] }) })
        }
      )
    ] });
  }
);
Drawer.displayName = "Drawer";

export { Drawer };
//# sourceMappingURL=drawer.es.js.map
//# sourceMappingURL=drawer.es.js.map