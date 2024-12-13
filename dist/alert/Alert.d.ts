import { AlertProps as AlertPropsRoot } from '@nextui-org/react';
interface AlertProps extends AlertPropsRoot {
    onClose?: () => void;
    onVisibleChange?: (isVisible: boolean) => void;
}
export declare const Alert: React.FC<AlertProps>;
export {};
