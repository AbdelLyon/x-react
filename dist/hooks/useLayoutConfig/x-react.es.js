const useLayoutConfig = (options = {}) => {
  const { navbar, sidebar } = options;
  return {
    navbar: navbar ? {
      className: "fixed top-0 z-40",
      ...navbar
    } : void 0,
    sidebar: sidebar ? {
      className: "fixed z-30",
      ...sidebar
    } : void 0
  };
};
export {
  useLayoutConfig
};
