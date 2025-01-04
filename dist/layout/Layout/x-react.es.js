import { jsxs, jsx } from "react/jsx-runtime";
import { useMediaQuery } from "../../hooks/useMediaQuery/x-react.es.js";
import { Navbar } from "../../navbar/Navbar/x-react.es.js";
import { Sidebar } from "../../sidebar/Sidebar/x-react.es.js";
import { cn } from "../../utils/x-react.es.js";
const Layout = ({
  children,
  navbar,
  sidebar,
  className
}) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const hasNavbar = Boolean(navbar);
  const hasSidebar = Boolean(sidebar);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    hasNavbar && /* @__PURE__ */ jsx(Navbar, { ...navbar }),
    /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      hasSidebar && /* @__PURE__ */ jsx(Sidebar, { ...sidebar }),
      /* @__PURE__ */ jsx(
        "main",
        {
          className: cn(
            "flex-1 px-4 transition-all duration-200",
            {
              "pt-16": hasNavbar,
              "ml-0": !hasSidebar || !isTablet && !isDesktop,
              "ml-[90px]": hasSidebar && isTablet,
              "ml-[270px]": hasSidebar && isDesktop,
              "px-4 sm:px-6 md:px-8 lg:px-12": true
            },
            className
          ),
          children
        }
      )
    ] })
  ] });
};
export {
  Layout
};
