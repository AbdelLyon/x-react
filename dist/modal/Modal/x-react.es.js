import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { forwardRef, useState, useCallback } from "react";
import { useDisclosure, Modal as Modal$1, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { cn } from "../../utils/x-react.es.js";
/* empty css                         */
import { Button } from "../../button/Button/x-react.es.js";
/* empty css                              */
const defaultClassNames = {
  closeButton: "absolute right-4 top-4",
  base: "bg-background border border-default shadow-lg dark:shadow-none rounded-lg",
  header: "flex flex-col gap-1",
  footer: "flex justify-end gap-2"
};
const defaultButtonProps = {
  color: "primary",
  radius: "sm"
};
const isValidButtonLabel = (label) => typeof label === "string" && label.length > 0;
const ModalButtons = ({
  buttonCloseLabel = "Close",
  buttonActionLabel,
  buttonCloseProps,
  buttonActionProps,
  onAction,
  onClose
}) => {
  const handleAction = async () => {
    try {
      await (onAction == null ? void 0 : onAction());
      onClose();
    } catch (error) {
      console.error("Modal action failed:", error);
    }
  };
  const hasValidCloseLabel = isValidButtonLabel(buttonCloseLabel);
  const hasValidActionButton = isValidButtonLabel(buttonActionLabel) && onAction !== void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    hasValidCloseLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: cn("border-primary/50", buttonCloseProps == null ? void 0 : buttonCloseProps.className),
        variant: (buttonCloseProps == null ? void 0 : buttonCloseProps.variant) ?? "bordered",
        onPress: onClose,
        ...defaultButtonProps,
        ...buttonCloseProps,
        children: buttonCloseLabel
      }
    ),
    hasValidActionButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
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
const Modal = forwardRef(
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
      closeButton: cn(defaultClassNames.closeButton, classNames == null ? void 0 : classNames.closeButton),
      base: cn(defaultClassNames.base, classNames == null ? void 0 : classNames.base),
      header: cn(defaultClassNames.header, classNames == null ? void 0 : classNames.header),
      body: cn(classNames == null ? void 0 : classNames.body),
      footer: cn(defaultClassNames.footer, classNames == null ? void 0 : classNames.footer),
      backdrop: cn(classNames == null ? void 0 : classNames.backdrop)
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Modal$1,
        {
          ref,
          backdrop,
          classNames: modalClassNames,
          isOpen,
          onClose,
          ...props,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModalContent, { children: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            title !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ModalHeader, { className: modalClassNames.header, children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { className: modalClassNames.body, children }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ModalFooter, { className: modalClassNames.footer, children: footer !== void 0 ? footer : /* @__PURE__ */ jsxRuntimeExports.jsx(
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
export {
  Modal
};
//# sourceMappingURL=x-react.es.js.map
