// src/hoc/withLoading.tsx
import type { ComponentType, JSX } from "react";

interface WithLoadingProps {
  loading: boolean;
}

export const WithLoading = <T extends object>(
  WrappedComponent: ComponentType<T>,
  LoadingComponent: ComponentType = () => <div>Loading...</div>,
) => {
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
