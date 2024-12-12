import { NextUIProviderProps } from '@nextui-org/react';
import { ReactNode } from 'react';
interface AppProviderProps extends NextUIProviderProps {
    children: ReactNode;
}
export declare const NextUIProvider: (props: AppProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
