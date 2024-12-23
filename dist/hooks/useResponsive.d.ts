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
export declare const useResponsive: (customQuery?: string) => ResponsiveHook;
export {};
