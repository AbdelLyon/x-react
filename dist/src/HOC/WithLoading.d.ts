import { ComponentType, JSX } from 'react';
interface WithLoadingProps {
    loading?: boolean;
}
export declare const WithLoading: <T extends object>(WrappedComponent: ComponentType<T>, LoadingComponent?: ComponentType) => ((props: T & WithLoadingProps) => JSX.Element);
export {};
