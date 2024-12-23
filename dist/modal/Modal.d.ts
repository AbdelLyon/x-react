import { ModalProps as ModalPropsRoot } from '@nextui-org/react';
import { ButtonProps } from '../button';
interface ModalBaseProps extends Omit<Partial<ModalPropsRoot>, "title"> {
    trigger: React.ReactNode;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
}
interface ModalButtonProps {
    onAction?: () => void;
    buttonCloseLabel?: string;
    buttonActionLabel?: string;
    buttonCloseProps?: ButtonProps;
    buttonActionProps?: ButtonProps;
}
interface ModalProps extends ModalBaseProps, ModalButtonProps {
}
export declare const Modal: import('react').ForwardRefExoticComponent<Omit<ModalProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
