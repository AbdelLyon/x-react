import { ModalProps as ModalPropsRoot } from '@nextui-org/react';
import { ButtonProps } from '../button';
interface Props extends Omit<Partial<ModalPropsRoot>, "title"> {
    trigger: React.ReactNode;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    onAction?: () => void;
    buttonCloseLabel?: string;
    buttonActionLabel?: string;
    buttonCloseProps?: ButtonProps;
    buttonActionProps?: ButtonProps;
}
export declare const Modal: import('react').ForwardRefExoticComponent<Omit<Props, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
