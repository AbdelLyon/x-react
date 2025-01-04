import { ComponentType } from 'react';
import { JSX } from 'react';

export declare const WithLoading: <T extends object>(WrappedComponent: ComponentType<T>, LoadingComponent?: ComponentType) => ({ loading, ...props }: T & WithLoadingProps) => JSX.Element;

declare interface WithLoadingProps {
    loading: boolean;
}

export { }
