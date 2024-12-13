import { Alert, AlertProps } from "@nextui-org/react";

interface GenericAlertProps extends AlertProps {
  onClose?: () => void;
  onVisibleChange?: (isVisible: boolean) => void;
}

const GenericAlert: React.FC<GenericAlertProps> = ({
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

  return <Alert {...props} onClose={handleClose} />;
};

export default GenericAlert;
