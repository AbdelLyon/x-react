import { forwardRef } from "react";
import type { AlertProps, ButtonProps } from "@nextui-org/react";
import { Alert as AlertRoot, Button } from "@nextui-org/react";
import type { Radius, Variant } from "@/types/types";

interface Props {
  title?: string;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  variant?: Variant;
  radius?: Radius;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isVisible?: boolean;
  isClosable?: boolean;
  hideIcon?: boolean;
  hideIconWrapper?: boolean;
  closeButtonProps?: ButtonProps;
  onClose?: () => void;
  onVisibleChange?: (isVisible: boolean) => void;
  classNames?: {
    base?: string;
    title?: string;
    description?: string;
    icon?: string;
    iconWrapper?: string;
    closeButton?: string;
  };
}

export const Alert = forwardRef<AlertProps, Props>(
  (
    {
      title,
      icon,
      description,
      startContent,
      endContent,
      isVisible = true,
      isClosable = false,
      hideIcon = false,
      hideIconWrapper = false,
      closeButtonProps,
      onClose,
      onVisibleChange,
      classNames,
      ...props
    },
    ref,
  ) => {
    const handleVisibilityChange = (visible: boolean): void => {
      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    };

    const handleClose = (): void => {
      if (onClose) {
        onClose();
      }
      handleVisibilityChange(false);
    };

    if (!isVisible) {
      return null;
    }

    return (
      <AlertRoot
        {...props}
        ref={ref}
        title={title}
        icon={hideIcon ? undefined : icon}
        isClosable={isClosable}
        hideIconWrapper={hideIconWrapper}
        startContent={startContent}
        endContent={endContent}
        onVisibleChange={handleVisibilityChange}
        onClose={handleClose}
        closeButton={
          isClosable ? (
            <Button
              size="sm"
              variant="light"
              {...closeButtonProps}
              onPress={handleClose}
            >
              Close
            </Button>
          ) : undefined
        }
        classNames={classNames}
      >
        {description}
      </AlertRoot>
    );
  },
);

Alert.displayName = "Alert";
