import { AnchorHTMLAttributes } from 'react';
import { ButtonProps as ButtonProps_2 } from '@nextui-org/react';
import { ComponentType } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { ModalProps as ModalProps_2 } from '@nextui-org/react';
import { RefAttributes } from 'react';

declare type Backdrop = ModalProps_2["backdrop"];

declare interface ButtonProps extends ButtonProps_2 {
    LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
    classNames?: {
        base?: string;
        beforeContent?: string;
        afterContent?: string;
        content?: string;
    };
}

export declare const Modal: ForwardRefExoticComponent<Omit<ModalProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare interface ModalBaseProps {
    trigger: React.ReactNode;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    classNames?: ModalClassNames;
    onOpenChange?: (isOpen: boolean) => void;
    defaultBackdrop?: Backdrop;
}

declare interface ModalButtonProps {
    onAction?: () => void | Promise<void>;
    buttonCloseLabel?: string;
    buttonActionLabel?: string;
    buttonCloseProps?: ButtonProps;
    buttonActionProps?: ButtonProps;
}

declare interface ModalClassNames {
    wrapper?: string;
    base?: string;
    backdrop?: string;
    header?: string;
    body?: string;
    footer?: string;
    closeButton?: string;
}

declare type ModalProps = Omit<Partial<ModalProps_2>, keyof ModalBaseProps> & ModalBaseProps & ModalButtonProps;

export { }
