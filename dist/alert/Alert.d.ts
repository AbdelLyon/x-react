import { AlertProps, ButtonProps } from '@nextui-org/react';
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
export declare const Alert: import('react').ForwardRefExoticComponent<Omit<Props, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
