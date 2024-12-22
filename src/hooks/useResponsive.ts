import { useMediaQuery } from "./useMediaQuery";

interface Breakpoints {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

export const useResponsive = (customQuery?: string) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = !isDesktop && !isTablet;

  const customMatch = useMediaQuery(customQuery || "");

  return {
    // Breakpoints
    isDesktop,
    isTablet,
    isMobile,
    // Custom query match if provided
    matches: customQuery ? customMatch : undefined,
    // Helper functions
    getBreakpoint: (): keyof Breakpoints => {
      if (isDesktop) return "isDesktop";
      if (isTablet) return "isTablet";
      return "isMobile";
    },
    isBreakpoint: (breakpoint: keyof Breakpoints): boolean => {
      switch (breakpoint) {
        case "isDesktop":
          return isDesktop;
        case "isTablet":
          return isTablet;
        case "isMobile":
          return isMobile;
      }
    },
  };
};
