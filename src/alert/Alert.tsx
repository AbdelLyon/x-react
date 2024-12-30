import { forwardRef } from "react";
import type { AlertProps, ButtonProps } from "@nextui-org/react";
import { Alert as AlertRoot, Button } from "@nextui-org/react";

interface Props extends AlertProps {
  closeButtonProps?: ButtonProps;
  onVisibleChange?: (isVisible: boolean) => void;
  onClose?: () => void;
  classNames?: {
    base?: string;
    title?: string;
    description?: string;
    icon?: string;
    iconWrapper?: string;
    closeButton?: string;
  };
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
