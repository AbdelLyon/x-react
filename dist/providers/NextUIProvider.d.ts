import { NextUIProviderProps as ProviderProps } from '@nextui-org/react';
import { JSX, ReactNode } from 'react';
type AppProviderProps = {
    children: ReactNode;
} & ProviderProps;
export declare const NextUIProvider: (props: AppProviderProps) => JSX.Element;
export {};
