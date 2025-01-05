import { forwardRef, useState, useCallback } from 'react';
import { Button as Button$1, ButtonGroup, useDisclosure, Modal as Modal$1, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

// src/modal/Modal.tsx
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
var defaultClassNames = {
  closeButton: "absolute right-4 top-4",
  base: "bg-background border border-default shadow-lg dark:shadow-none rounded-lg",
  header: "flex flex-col gap-1",
  footer: "flex justify-end gap-2"
};
var defaultButtonProps = {
  color: "primary",
  radius: "sm"
};
var isValidButtonLabel = (label) => typeof label === "string" && label.length > 0;
var ModalButtons = ({
  buttonCloseLabel = "Close",
  buttonActionLabel,
  buttonCloseProps,
  buttonActionProps,
  onAction,
  onClose
}) => {
  const handleAction = async () => {
    try {
      await onAction?.();
      onClose();
    } catch (error) {
      console.error("Modal action failed:", error);
    }
  };
  const hasValidCloseLabel = isValidButtonLabel(buttonCloseLabel);
  const hasValidActionButton = isValidButtonLabel(buttonActionLabel) && onAction !== void 0;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    hasValidCloseLabel && /* @__PURE__ */ jsx(
      Button,
      {
        className: cn("border-primary/50", buttonCloseProps?.className),
        variant: buttonCloseProps?.variant ?? "bordered",
        onPress: onClose,
        ...defaultButtonProps,
        ...buttonCloseProps,
        children: buttonCloseLabel
      }
    ),
    hasValidActionButton && /* @__PURE__ */ jsx(
      Button,
      {
        onPress: handleAction,
        ...defaultButtonProps,
        ...buttonActionProps,
        children: buttonActionLabel
      }
    )
  ] });
};
var Modal = forwardRef(
  ({
    trigger,
    title,
    footer,
    children,
    onAction,
    buttonCloseLabel,
    buttonActionLabel,
    buttonCloseProps,
    buttonActionProps,
    defaultBackdrop = "opaque",
    onOpenChange,
    classNames,
    ...props
  }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure({
      onChange: onOpenChange
    });
    const [backdrop, setBackdrop] = useState(defaultBackdrop);
    const handleOpen = useCallback(
      (backdropType = defaultBackdrop) => {
        setBackdrop(backdropType);
        onOpen();
      },
      [defaultBackdrop, onOpen]
    );
    const handleKeyDown = useCallback(
      (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleOpen();
        }
      },
      [handleOpen]
    );
    const modalClassNames = {
      closeButton: cn(defaultClassNames.closeButton, classNames?.closeButton),
      base: cn(defaultClassNames.base, classNames?.base),
      header: cn(defaultClassNames.header, classNames?.header),
      body: cn(classNames?.body),
      footer: cn(defaultClassNames.footer, classNames?.footer),
      backdrop: cn(classNames?.backdrop)
    };
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => handleOpen(),
          onKeyDown: handleKeyDown,
          className: "inline-block",
          children: trigger
        }
      ),
      /* @__PURE__ */ jsx(
        Modal$1,
        {
          ref,
          backdrop,
          classNames: modalClassNames,
          isOpen,
          onClose,
          ...props,
          children: /* @__PURE__ */ jsx(ModalContent, { children: () => /* @__PURE__ */ jsxs(Fragment, { children: [
            title !== void 0 && /* @__PURE__ */ jsx(ModalHeader, { className: modalClassNames.header, children: title }),
            /* @__PURE__ */ jsx(ModalBody, { className: modalClassNames.body, children }),
            /* @__PURE__ */ jsx(ModalFooter, { className: modalClassNames.footer, children: footer !== void 0 ? footer : /* @__PURE__ */ jsx(
              ModalButtons,
              {
                buttonCloseLabel,
                buttonActionLabel,
                buttonCloseProps,
                buttonActionProps,
                onAction,
                onClose
              }
            ) })
          ] }) })
        }
      )
    ] });
  }
);
Modal.displayName = "Modal";

export { Modal };
//# sourceMappingURL=modal.js.map
//# sourceMappingURL=modal.js.map