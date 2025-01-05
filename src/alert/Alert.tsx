import { forwardRef } from "react";
import type { ButtonProps } from "@nextui-org/button";
import type { AlertProps } from "@nextui-org/alert";
import { Alert as AlertRoot } from "@nextui-org/alert";
import { Button } from "@/button";

interface Props extends AlertProps {
  closeButtonProps?: ButtonProps;
  onVisibleChange?: (isVisible: boolean) => void;
  onClose?: () => void;
}

export const Alert = forwardRef<HTMLDivElement, Props>(
  (
    {
      onVisibleChange,
      onClose,
      isVisible = true,
      closeButtonProps,
      isClosable = false,
      ...otherProps
    },
    ref,
  ) => {
    const handleVisibilityChange = (visible: boolean): void => {
      onVisibleChange?.(visible);
    };

    const handleClose = (): void => {
      onClose?.();
      handleVisibilityChange(false);
    };

    if (isVisible === false) {
      return null;
    }

    return (
      <AlertRoot
        {...otherProps}
        ref={ref}
        isClosable={isClosable}
        onVisibleChange={handleVisibilityChange}
        onClose={handleClose}
        closeButton={
          isClosable !== undefined ? (
            <Button
              size="sm"
              variant="light"
              {...closeButtonProps}
              onPress={handleClose}
            >
              Close
            </Button>
          ) : null
        }
      />
    );
  },
);

Alert.displayName = "Alert";
