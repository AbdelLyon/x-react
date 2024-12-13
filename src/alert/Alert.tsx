import { forwardRef } from "react";
import { Alert as AlertRoot, Button, ButtonProps } from "@nextui-org/react";

type AlertColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

type AlertVariant = "solid" | "bordered" | "flat" | "faded";

type AlertRadius = "none" | "sm" | "md" | "lg" | "full";

interface Props {
  title?: string;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  color?: AlertColor;
  variant?: AlertVariant;
  radius?: AlertRadius;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isVisible?: boolean;
  isClosable?: boolean;
  hideIcon?: boolean;
  hideIconWrapper?: boolean;
  closeButtonProps?: ButtonProps;
  onClose?: () => void;
  onVisibleChange?: (isVisible: boolean) => void;
}

// Generic Alert Component
export const Alert = forwardRef<HTMLDivElement, Props>(
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
    },
    ref,
  ) => {
    const handleVisibilityChange = (visible: boolean) => {
      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    };

    const handleClose = () => {
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
      >
        {description}
      </AlertRoot>
    );
  },
);

Alert.displayName = "Alert";