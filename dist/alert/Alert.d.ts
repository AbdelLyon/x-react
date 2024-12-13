import { AlertProps } from '@nextui-org/react';
interface GenericAlertProps extends AlertProps {
    onClose?: () => void;
    onVisibleChange?: (isVisible: boolean) => void;
}
declare const GenericAlert: React.FC<GenericAlertProps>;
export default GenericAlert;
