import { useMediaQuery } from "./useMediaQuery";

interface Breakpoints {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

interface ResponsiveHook extends Breakpoints {
  matches?: boolean;
  getBreakpoint: () => keyof Breakpoints;
  isBreakpoint: (breakpoint: keyof Breakpoints) => boolean;
}

const MEDIA_QUERIES = {
  desktop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
} as const;

export const useResponsive = (customQuery?: string): ResponsiveHook => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet);
  const isMobile = !isDesktop && !isTablet;

  const customMatch = useMediaQuery(customQuery || "");

  const getBreakpoint = (): keyof Breakpoints => {
    if (isDesktop) return "isDesktop";
    if (isTablet) return "isTablet";
    return "isMobile";
  };

  const isBreakpoint = (breakpoint: keyof Breakpoints): boolean => {
    const breakpoints: Breakpoints = {
      isDesktop,
      isTablet,
      isMobile,
    };
    return breakpoints[breakpoint];
  };

  return {
    isDesktop,
    isTablet,
    isMobile,
    matches: customQuery ? customMatch : undefined,
    getBreakpoint,
    isBreakpoint,
  };
};
