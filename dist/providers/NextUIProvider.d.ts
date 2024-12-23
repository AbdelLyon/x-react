import { NextUIProviderProps as ProviderProps } from '@nextui-org/react';
import { JSX, ReactNode } from 'react';
interface AppProviderProps extends ProviderProps {
    children: ReactNode;
}
export declare const NextUIProvider: (props: AppProviderProps) => JSX.Element;
export {};
