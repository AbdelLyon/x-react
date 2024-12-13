import {
  Alert as AlertRoot,
  AlertProps as AlertPropsRoot,
} from "@nextui-org/react";

interface AlertProps extends AlertPropsRoot {
  onClose?: () => void;
  onVisibleChange?: (isVisible: boolean) => void;
}

export const Alert: React.FC<AlertProps> = ({
  onClose,
  onVisibleChange,
  isVisible = true,
  ...props
}) => {
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

  return <AlertRoot {...props} onClose={handleClose} />;
};
