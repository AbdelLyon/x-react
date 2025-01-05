import { Button } from './chunk-Y76KLDKD.es.js';
import { cn } from './chunk-HWWI3HGE.es.js';
import './chunk-OFYPKX7Y.es.js';
import { forwardRef, useState, useCallback } from 'react';
import { useDisclosure, Modal as Modal$1, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

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
//# sourceMappingURL=modal.es.js.map
//# sourceMappingURL=modal.es.js.map