import { ModalProps as ModalPropsRoot, SlotsToClasses } from '@nextui-org/react';
interface Props extends Omit<Partial<ModalPropsRoot>, "title"> {
    trigger: React.ReactNode;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    onAction?: () => void;
    buttonCloseLabel?: string;
    buttonActionLabel?: string;
    classNames?: SlotsToClasses<"footer" | "backdrop" | "base" | "body" | "header" | "closeButton" | "wrapper">;
}
export declare const Modal: import('react').ForwardRefExoticComponent<Omit<Props, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
