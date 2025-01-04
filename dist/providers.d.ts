import { JSX } from 'react';
import { NextUIProviderProps } from '@nextui-org/react';
import { ReactNode } from 'react';
import { ThemeProviderProps } from 'next-themes';

declare type AppProviderProps = {
    children: ReactNode;
} & NextUIProviderProps;

export declare const NextUIProvider: (props: AppProviderProps) => JSX.Element;

export declare const ThemeProvider: ({ children, ...props }: ThemeProviderProps) => JSX.Element;

export { ThemeProviderProps }

export { }
