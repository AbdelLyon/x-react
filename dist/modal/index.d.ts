import * as react from 'react';
import { ModalProps as ModalProps$1 } from '@nextui-org/react';
import { a as ButtonProps } from '../Button-jejvjTzH.js';

type Backdrop = ModalProps$1["backdrop"];
interface ModalClassNames {
    wrapper?: string;
    base?: string;
    backdrop?: string;
    header?: string;
    body?: string;
    footer?: string;
    closeButton?: string;
}
interface ModalBaseProps {
    trigger: React.ReactNode;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    classNames?: ModalClassNames;
    onOpenChange?: (isOpen: boolean) => void;
    defaultBackdrop?: Backdrop;
}
interface ModalButtonProps {
    onAction?: () => void | Promise<void>;
    buttonCloseLabel?: string;
    buttonActionLabel?: string;
    buttonCloseProps?: ButtonProps;
    buttonActionProps?: ButtonProps;
}
type ModalProps = Omit<Partial<ModalProps$1>, keyof ModalBaseProps> & ModalBaseProps & ModalButtonProps;
declare const Modal: react.ForwardRefExoticComponent<Omit<ModalProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

export { Modal };
