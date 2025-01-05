import { ThemeProviderProps } from 'next-themes';
export { ThemeProviderProps } from 'next-themes';
import { JSX, ReactNode } from 'react';
import { NextUIProviderProps } from '@nextui-org/react';

declare const ThemeProvider: ({ children, ...props }: ThemeProviderProps) => JSX.Element;

type AppProviderProps = {
    children: ReactNode;
} & NextUIProviderProps;
declare const NextUIProvider: (props: AppProviderProps) => JSX.Element;

export { NextUIProvider, ThemeProvider };
