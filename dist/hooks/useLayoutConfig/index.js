const o = (s = {}) => {
  const { navbar: a, sidebar: e } = s;
  return {
    navbar: a ? {
      className: "fixed top-0 z-40",
      ...a
    } : void 0,
    sidebar: e ? {
      className: "fixed z-30",
      ...e
    } : void 0
  };
};
export {
  o as useLayoutConfig
};
//# sourceMappingURL=index.js.map
