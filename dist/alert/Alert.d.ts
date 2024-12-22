import { AlertProps, ButtonProps } from '@nextui-org/react';
import { Color, Radius, Variant } from '../types/types';
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
export declare const Alert: import('react').ForwardRefExoticComponent<Props & import('react').RefAttributes<AlertProps>>;
export {};
