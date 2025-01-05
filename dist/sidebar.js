import { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link, Tooltip as Tooltip$1 } from '@nextui-org/react';
import 'next-themes';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/sidebar/Sidebar.tsx
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

export { Sidebar };
//# sourceMappingURL=sidebar.js.map
//# sourceMappingURL=sidebar.js.map