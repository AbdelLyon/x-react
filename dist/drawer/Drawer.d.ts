import { ReactNode } from 'react';
import { DrawerProps as DrawerRootProps } from '@nextui-org/react';
import { ButtonProps } from '../button';
interface DrawerClassNames {
    wrapper?: string;
    base?: string;
    backdrop?: string;
    closeButton?: string;
    header?: string;
    body?: string;
    footer?: string;
}
interface AdditionalDrawerProps {
    trigger: ReactNode;
    title?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    buttonCloseLabel?: string;
    buttonActionLabel?: string;
    onAction?: () => void | Promise<void>;
    buttonCloseProps?: ButtonProps;
    buttonActionProps?: ButtonProps;
    classNames?: DrawerClassNames;
}
export type DrawerProps = Omit<DrawerRootProps, keyof AdditionalDrawerProps> & AdditionalDrawerProps;
export declare const Drawer: import('react').ForwardRefExoticComponent<Omit<DrawerProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};