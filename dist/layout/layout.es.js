var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import "../image/image.es.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { u as useMediaQuery } from "../useResponsive-DIJqCacg.js";
import { Navbar } from "../navbar/navbar.es.js";
import { Sidebar } from "../sidebar/sidebar.es.js";
import { cn } from "../utils/utils.es.js";
import { forwardRef } from "react";
import { ScrollShadow } from "@nextui-org/react";
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
    hasNavbar && /* @__PURE__ */ jsx(Navbar, __spreadValues({}, navbar)),
    /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      hasSidebar && /* @__PURE__ */ jsx(Sidebar, __spreadValues({}, sidebar)),
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
const Scroll = forwardRef(
  (_a, ref) => {
    var _b = _a, { width = "100%", height = "100%", style } = _b, props = __objRest(_b, ["width", "height", "style"]);
    const combinedStyle = __spreadValues({
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height
    }, style);
    return /* @__PURE__ */ jsx(ScrollShadow, __spreadValues({ ref, style: combinedStyle }, props));
  }
);
Scroll.displayName = "Scroll";
const Center = forwardRef(
  ({ children, inline = false, className }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          inline ? "inline-flex" : "flex",
          "items-center justify-center",
          className
        ),
        children
      }
    );
  }
);
const Container = forwardRef(
  ({ children, maxWidth = "lg", className }, ref) => {
    const containerClasses = cn(
      "mx-auto px-4",
      {
        "max-w-screen-sm": maxWidth === "sm",
        "max-w-screen-md": maxWidth === "md",
        "max-w-screen-lg": maxWidth === "lg",
        "max-w-screen-xl": maxWidth === "xl",
        "max-w-screen-2xl": maxWidth === "2xl",
        "max-w-full": maxWidth === "full"
      },
      className
    );
    return /* @__PURE__ */ jsx("div", { ref, className: containerClasses, children });
  }
);
Container.displayName = "Container";
const Grid = forwardRef(
  ({
    children,
    data,
    columns = {
      default: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4
    },
    gap = {
      x: 4,
      y: 4
    },
    className
  }, ref) => {
    const gridClasses = cn(
      "grid",
      `grid-cols-${columns.default}`,
      columns.sm !== void 0 && `sm:grid-cols-${columns.sm}`,
      columns.md !== void 0 && `md:grid-cols-${columns.md}`,
      columns.lg !== void 0 && `lg:grid-cols-${columns.lg}`,
      columns.xl !== void 0 && `xl:grid-cols-${columns.xl}`,
      gap.x !== void 0 && `gap-x-${gap.x}`,
      gap.y !== void 0 && `gap-y-${gap.y}`,
      className
    );
    return /* @__PURE__ */ jsx("div", { ref, className: gridClasses, children: data ? data.map((item) => /* @__PURE__ */ jsx(GridItem, { colSpan: item.colSpan, children: item.content }, item.id)) : children });
  }
);
Grid.displayName = "Grid";
const GridItem = forwardRef(
  ({ children, colSpan, className }, ref) => {
    const itemClasses = cn(
      (colSpan == null ? void 0 : colSpan.default) !== void 0 && `col-span-${colSpan.default}`,
      (colSpan == null ? void 0 : colSpan.sm) !== void 0 && `sm:col-span-${colSpan.sm}`,
      (colSpan == null ? void 0 : colSpan.md) !== void 0 && `md:col-span-${colSpan.md}`,
      (colSpan == null ? void 0 : colSpan.lg) !== void 0 && `lg:col-span-${colSpan.lg}`,
      (colSpan == null ? void 0 : colSpan.xl) !== void 0 && `xl:col-span-${colSpan.xl}`,
      className
    );
    return /* @__PURE__ */ jsx("div", { ref, className: itemClasses, children });
  }
);
GridItem.displayName = "GridItem";
const Section = forwardRef(
  ({ children, spacing = "md", className }, ref) => {
    const sectionClasses = cn(
      {
        "py-4": spacing === "sm",
        "py-8": spacing === "md",
        "py-12": spacing === "lg",
        "py-16": spacing === "xl"
      },
      className
    );
    return /* @__PURE__ */ jsx("section", { ref, className: sectionClasses, children });
  }
);
Section.displayName = "Section";
const Stack = forwardRef(
  ({ children, spacing = 4, align = "start", justify = "start", className }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex flex-col",
          `gap-${spacing}`,
          {
            "items-start": align === "start",
            "items-center": align === "center",
            "items-end": align === "end",
            "justify-start": justify === "start",
            "justify-center": justify === "center",
            "justify-end": justify === "end",
            "justify-between": justify === "between"
          },
          className
        ),
        children
      }
    );
  }
);
export {
  Center,
  Container,
  Grid,
  GridItem,
  Layout,
  Scroll,
  Section,
  Stack
};
//# sourceMappingURL=layout.es.js.map
