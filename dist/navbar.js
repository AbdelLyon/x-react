import { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import { Navbar as Navbar$1, NavbarContent, NavbarMenuToggle, NavbarItem, Link, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import 'next-themes';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/navbar/Navbar.tsx
var cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
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

export { Navbar };
//# sourceMappingURL=navbar.js.map
//# sourceMappingURL=navbar.js.map