import { useState, useRef, useCallback, useEffect } from "react";
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
    () => getInitialValueInEffect ? initialValue != null ? initialValue : false : getInitialValue(query, initialValue)
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
const MEDIA_QUERIES = {
  desktop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)"
};
const useResponsive = (customQuery) => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet);
  const isMobile = !isDesktop && !isTablet;
  const customMatch = useMediaQuery(
    typeof customQuery === "string" && customQuery.length > 0 ? customQuery : ""
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
  const hasValidCustomQuery = typeof customQuery === "string" && customQuery.length > 0;
  return {
    isDesktop,
    isTablet,
    isMobile,
    matches: hasValidCustomQuery ? customMatch : void 0,
    getBreakpoint,
    isBreakpoint
  };
};
export {
  useResponsive as a,
  useMediaQuery as u
};
//# sourceMappingURL=useResponsive-DIJqCacg.js.map
