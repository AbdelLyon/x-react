import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Alert as Alert$1, Button } from "@nextui-org/react";
const Alert = forwardRef(
  ({
    onVisibleChange,
    onClose,
    isVisible = true,
    closeButtonProps,
    isClosable = false,
    ...otherProps
  }, ref) => {
    const handleVisibilityChange = (visible) => {
      onVisibleChange == null ? void 0 : onVisibleChange(visible);
    };
    const handleClose = () => {
      onClose == null ? void 0 : onClose();
      handleVisibilityChange(false);
    };
    if (isVisible === false) {
      return null;
    }
    return /* @__PURE__ */ jsx(
      Alert$1,
      {
        ...otherProps,
        ref,
        isClosable,
        onVisibleChange: handleVisibilityChange,
        onClose: handleClose,
        closeButton: isClosable !== void 0 ? /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "light",
            ...closeButtonProps,
            onPress: handleClose,
            children: "Close"
          }
        ) : null
      }
    );
  }
);
Alert.displayName = "Alert";
export {
  Alert
};
//# sourceMappingURL=x-react.es.js.map
