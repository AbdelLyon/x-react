import { ButtonProps } from '@nextui-org/react';
interface GenericCardProps extends Partial<ButtonProps> {
    children?: React.ReactNode | React.ReactNode[];
    shadow?: "none" | "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg";
    fullWidth?: boolean;
    isHoverable?: boolean;
    isPressable?: boolean;
    isBlurred?: boolean;
    isFooterBlurred?: boolean;
    isDisabled?: boolean;
    disableAnimation?: boolean;
    disableRipple?: boolean;
    allowTextSelectionOnPress?: boolean;
    classNames?: Partial<Record<"base" | "header" | "body" | "footer", string>>;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare const Card: import('react').ForwardRefExoticComponent<Omit<GenericCardProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
