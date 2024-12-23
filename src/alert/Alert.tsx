import { forwardRef } from "react";
import {
  AlertProps,
  Alert as AlertRoot,
  Button,
  ButtonProps,
} from "@nextui-org/react";
import { Color, Radius, Variant } from "@/types/types";

interface Props {
  title?: string;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  color?: Color;
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
      color = "default",
      variant = "flat",
      radius = "md",
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
        color={color}
        variant={variant}
        radius={radius}
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
