import { ReactNode } from 'react';
import { DrawerProps as DrawerRootProps } from '@nextui-org/react';
import { ButtonProps } from '../button';
interface AdditionalDrawerProps {
    trigger: ReactNode;
    title?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    buttonCloseLabel?: string;
    buttonActionLabel?: string;
    onAction?: () => void;
    buttonCloseProps?: ButtonProps;
    buttonActionProps?: ButtonProps;
}
export type DrawerProps = Omit<DrawerRootProps, keyof AdditionalDrawerProps> & AdditionalDrawerProps;
export declare const Drawer: import('react').ForwardRefExoticComponent<Omit<DrawerProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
