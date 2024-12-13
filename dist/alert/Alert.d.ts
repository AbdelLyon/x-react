import { AlertProps, ButtonProps } from '@nextui-org/react';
type AlertColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
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
    classNames?: {
        base?: string;
        title?: string;
        description?: string;
        icon?: string;
        iconWrapper?: string;
        closeButton?: string;
    };
}
export declare const Alert: import('react').ForwardRefExoticComponent<Props & import('react').RefAttributes<AlertProps>>;
export {};
