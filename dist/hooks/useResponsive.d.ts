interface Breakpoints {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
}
export declare const useResponsive: (customQuery?: string) => {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
    matches: boolean | undefined;
    getBreakpoint: () => keyof Breakpoints;
    isBreakpoint: (breakpoint: keyof Breakpoints) => boolean;
};
export {};
