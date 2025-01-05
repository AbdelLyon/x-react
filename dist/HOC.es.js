import './chunk-OFYPKX7Y.es.js';
import { jsx } from 'react/jsx-runtime';

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
//# sourceMappingURL=HOC.es.js.map
//# sourceMappingURL=HOC.es.js.map