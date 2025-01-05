import { jsx } from 'react/jsx-runtime';

// src/HOC/WithLoading.tsx
var WithLoading = (WrappedComponent, LoadingComponent = () => /* @__PURE__ */ jsx("div", { children: "Loading..." })) => {
  return function WithLoadingComponent({
    loading,
    ...props
  }) {
    if (loading) {
      return /* @__PURE__ */ jsx(LoadingComponent, {});
    }
    return /* @__PURE__ */ jsx(WrappedComponent, { ...props });
  };
};

export { WithLoading };
//# sourceMappingURL=HOC.js.map
//# sourceMappingURL=HOC.js.map