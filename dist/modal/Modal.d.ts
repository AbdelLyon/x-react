import { ModalProps, SlotsToClasses } from '@nextui-org/react';
type GenericModalProps = {
    trigger: React.ReactNode;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    modalProps?: Partial<ModalProps>;
    children: React.ReactNode;
    onAction?: () => void;
    buttonCloseLabel?: string;
    buttonActionLabel?: string;
    classNames?: SlotsToClasses<"footer" | "backdrop" | "base" | "body" | "header" | "closeButton" | "wrapper">;
};
export declare const Modal: React.FC<GenericModalProps>;
export {};
