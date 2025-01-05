import { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import { Navbar as Navbar$1, NavbarContent, NavbarMenuToggle, NavbarItem, Link, NavbarMenu, NavbarMenuItem, ScrollShadow, Tooltip as Tooltip$1 } from '@nextui-org/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import 'next-themes';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/hooks/useMediaQuery.ts
function attachMediaListener(query, callback) {
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function getInitialValue(query, initialValue) {
  if (typeof initialValue === "boolean") {
    return initialValue;
  }
  if (typeof window !== "undefined" && "matchMedia" in window) {
    try {
      return window.matchMedia(query).matches;
    } catch (e) {
      console.warn("Error while matching media query:", e);
      return false;
    }
  }
  return false;
}
function useMediaQuery(query, options = {}) {
  const { getInitialValueInEffect = true, initialValue } = options;
  const [matches, setMatches] = useState(
    () => getInitialValueInEffect ? initialValue ?? false : getInitialValue(query, initialValue)
  );
  const queryRef = useRef(null);
  const handleChange = useCallback((event) => {
    setMatches(event.matches);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) {
      return void 0;
    }
    try {
      queryRef.current = window.matchMedia(query);
      if (getInitialValueInEffect) {
        setMatches(queryRef.current.matches);
      }
      return attachMediaListener(queryRef.current, handleChange);
    } catch (e) {
      console.error("Error setting up media query:", e);
      return void 0;
    }
  }, [query, getInitialValueInEffect, handleChange]);
  return matches;
}
var cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

// src/hooks/useResponsive.ts
var MEDIA_QUERIES = {
  desktop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)"
};
var useResponsive = (customQuery) => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet);
  const isMobile = !isDesktop && !isTablet;
  const customMatch = useMediaQuery(
    ""
  );
  const getBreakpoint = () => {
    if (isDesktop === true) {
      return "isDesktop";
    }
    if (isTablet === true) {
      return "isTablet";
    }
    return "isMobile";
  };
  const isBreakpoint = (breakpoint) => {
    const breakpoints = {
      isDesktop,
      isTablet,
      isMobile
    };
    return breakpoints[breakpoint] === true;
  };
  const hasValidCustomQuery = typeof customQuery === "string";
  return {
    isDesktop,
    isTablet,
    isMobile,
    matches: hasValidCustomQuery ? customMatch : void 0,
    getBreakpoint,
    isBreakpoint
  };
};
var Navbar = forwardRef(
  ({
    appName,
    appLogo,
    profile,
    navigationItems = [],
    menuItems = [],
    contentProps,
    menuProps,
    onItemClick,
    className,
    classNames,
    isMenuOpen,
    onMenuOpenChange,
    ...props
  }, ref) => {
    const { isDesktop, isMobile, isTablet } = useResponsive();
    const handleItemPress = (item) => {
      item.onPress?.();
      onItemClick?.(item);
      onMenuOpenChange?.(false);
    };
    return /* @__PURE__ */ jsxs(
      Navbar$1,
      {
        ref,
        className,
        classNames: {
          base: "bg-white dark:bg-background",
          wrapper: "max-w-full",
          ...classNames
        },
        isMenuOpen,
        onMenuOpenChange,
        ...props,
        children: [
          isMobile && /* @__PURE__ */ jsx(NavbarContent, { children: /* @__PURE__ */ jsx(
            NavbarMenuToggle,
            {
              "aria-label": isMenuOpen === true ? "Close menu" : "Open menu"
            }
          ) }),
          !isMobile && (appName !== null || appLogo !== null) && /* @__PURE__ */ jsxs(NavbarContent, { justify: "start", children: [
            !isTablet && appName !== null && /* @__PURE__ */ jsx(NavbarItem, { className: "w-[247px] border-r-2 border-default", children: appName }),
            appLogo !== null && /* @__PURE__ */ jsx(NavbarItem, { children: appLogo })
          ] }),
          /* @__PURE__ */ jsxs(NavbarContent, { justify: "end", ...contentProps, children: [
            isDesktop && navigationItems.map((item) => /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsxs(
              Link,
              {
                className: cn(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": item.isActive
                  },
                  classNames?.item
                ),
                onPress: () => handleItemPress(item),
                children: [
                  item.startContent,
                  item.label,
                  item.endContent
                ]
              }
            ) }, item.key)),
            profile !== null && /* @__PURE__ */ jsx(NavbarItem, { children: profile })
          ] }),
          !isDesktop && /* @__PURE__ */ jsx(NavbarMenu, { ...menuProps, children: menuItems.map((item) => /* @__PURE__ */ jsx(NavbarMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              className: cn(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": item.isActive
                },
                classNames?.item
              ),
              onPress: () => onItemClick?.(item),
              children: [
                item.startContent,
                item.label,
                item.endContent
              ]
            },
            item.key
          ) }, item.key)) })
        ]
      }
    );
  }
);
Navbar.displayName = "Navbar";
var Tooltip = ({
  trigger,
  content,
  size = "md",
  color = "default",
  radius = "sm",
  shadow = "sm",
  placement = "top",
  delay = 0,
  closeDelay = 500,
  offset = 7,
  containerPadding = 12,
  crossOffset = 0,
  showArrow = false,
  shouldFlip = true,
  triggerScaleOnOpen = true,
  isKeyboardDismissDisabled = false,
  isDismissable = false,
  shouldCloseOnBlur = true,
  isDisabled = false,
  disableAnimation = false,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    Tooltip$1,
    {
      content,
      size,
      color,
      radius,
      shadow,
      placement,
      delay,
      closeDelay,
      offset,
      containerPadding,
      crossOffset,
      showArrow,
      shouldFlip,
      triggerScaleOnOpen,
      isKeyboardDismissDisabled,
      isDismissable,
      shouldCloseOnBlur,
      isDisabled,
      disableAnimation,
      ...props,
      children: trigger
    }
  );
};
var Sidebar = forwardRef(
  ({ items = [], classNames, onItemClick }, ref) => {
    const { isDesktop, isTablet } = useResponsive();
    if (!isDesktop && !isTablet) {
      return null;
    }
    const renderLink = (item) => {
      const linkContent = /* @__PURE__ */ jsxs(
        Link,
        {
          className: cn(
            "flex items-center gap-3 p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer",
            {
              "border-l-2 border-primary bg-content1 text-primary": item.isActive,
              "justify-center": isTablet
            },
            classNames?.item
          ),
          onPress: () => onItemClick?.(item),
          children: [
            item.startContent,
            isDesktop ? item.label : null,
            item.endContent
          ]
        },
        item.key
      );
      if (isTablet) {
        return /* @__PURE__ */ jsx(
          Tooltip,
          {
            trigger: linkContent,
            content: item.label,
            placement: "right",
            delay: 0,
            closeDelay: 0,
            className: "border border-default"
          },
          item.key
        );
      }
      return linkContent;
    };
    return /* @__PURE__ */ jsx(
      "aside",
      {
        ref,
        className: cn(
          "fixed left-0 h-screen flex-col bg-[#212324] border-r border-default",
          {
            "w-[270px]": isDesktop,
            "w-[90px]": isTablet
          },
          classNames?.base
        ),
        children: /* @__PURE__ */ jsx("nav", { className: "flex flex-1 flex-col gap-2 p-4", children: items.map(renderLink) })
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var Layout = ({
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
var Scroll = forwardRef(
  ({ width = "100%", height = "100%", style, ...props }, ref) => {
    const combinedStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style
    };
    return /* @__PURE__ */ jsx(ScrollShadow, { ref, style: combinedStyle, ...props });
  }
);
Scroll.displayName = "Scroll";
var Center = forwardRef(
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
var Container = forwardRef(
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
var Grid = forwardRef(
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
var GridItem = forwardRef(
  ({ children, colSpan, className }, ref) => {
    const itemClasses = cn(
      colSpan?.default !== void 0 && `col-span-${colSpan.default}`,
      colSpan?.sm !== void 0 && `sm:col-span-${colSpan.sm}`,
      colSpan?.md !== void 0 && `md:col-span-${colSpan.md}`,
      colSpan?.lg !== void 0 && `lg:col-span-${colSpan.lg}`,
      colSpan?.xl !== void 0 && `xl:col-span-${colSpan.xl}`,
      className
    );
    return /* @__PURE__ */ jsx("div", { ref, className: itemClasses, children });
  }
);
GridItem.displayName = "GridItem";
var Section = forwardRef(
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
var Stack = forwardRef(
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

export { Center, Container, Grid, GridItem, Layout, Scroll, Section, Stack };
//# sourceMappingURL=layout.js.map
//# sourceMappingURL=layout.js.map