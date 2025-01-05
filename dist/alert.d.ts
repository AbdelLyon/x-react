import { AlertProps } from '@nextui-org/react';
import { ButtonProps } from '@nextui-org/react';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';

export declare const Alert: ForwardRefExoticComponent<Omit<Props, "ref"> & RefAttributes<HTMLDivElement>>;

declare interface Props extends AlertProps {
    closeButtonProps?: ButtonProps;
    onVisibleChange?: (isVisible: boolean) => void;
    onClose?: () => void;
}

export { }
