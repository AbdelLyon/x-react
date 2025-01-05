import type { ComponentType, JSX } from "react";

interface WithLoadingProps {
  loading?: boolean;
}

export const WithLoading = <T extends object>(
  WrappedComponent: ComponentType<T>,
  LoadingComponent: ComponentType = (): JSX.Element => <div>Loading...</div>,
): ((props: T & WithLoadingProps) => JSX.Element) => {
  return function WithLoadingComponent({
    loading,
    ...props
  }: T & WithLoadingProps): JSX.Element {
    if (loading) {
      return <LoadingComponent />;
    }
    return <WrappedComponent {...(props as T)} />;
  };
};
