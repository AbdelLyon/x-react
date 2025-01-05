import { forwardRef } from 'react';
import { Button as Button$1, ButtonGroup, useDisclosure, Drawer as Drawer$1, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '@nextui-org/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

// src/drawer/Drawer.tsx
var cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
var Button = forwardRef(
  ({
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
    rel,
    ...props
  }, ref) => {
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
        {
          ref,
          ...props,
          as: LinkComponent,
          variant,
          className: baseStyles,
          href,
          rel: target === "_blank" ? "noopener noreferrer" : rel,
          target,
          children: /* @__PURE__ */ jsx(Content, {})
        }
      );
    }
    return /* @__PURE__ */ jsx(
      Button$1,
      {
        ref,
        ...props,
        variant,
        className: baseStyles,
        isDisabled,
        children: /* @__PURE__ */ jsx(Content, {})
      }
    );
  }
);
Button.displayName = "Button";
var Buttons = forwardRef(
  ({ buttons, ...props }, ref) => {
    return /* @__PURE__ */ jsx(ButtonGroup, { ref, ...props, children: buttons.map(({ key, label, buttonProps }) => /* @__PURE__ */ jsx(Button, { ...buttonProps, children: label }, key)) });
  }
);
Buttons.displayName = "Buttons";
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
//# sourceMappingURL=drawer.js.map
//# sourceMappingURL=drawer.js.map