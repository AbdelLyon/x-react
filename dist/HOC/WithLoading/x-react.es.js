import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
const WithLoading = (WrappedComponent, LoadingComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading..." })) => {
  return function WithLoadingComponent({
    loading,
    ...props
  }) {
    if (loading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingComponent, {});
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(WrappedComponent, { ...props });
  };
};
export {
  WithLoading
};
//# sourceMappingURL=x-react.es.js.map
