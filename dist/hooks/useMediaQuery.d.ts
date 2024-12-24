export type UseMediaQueryOptions = {
    getInitialValueInEffect?: boolean;
    initialValue?: boolean;
};
export declare function useMediaQuery(query: string, options?: UseMediaQueryOptions): boolean;
/**
 * React hook to track viewport breakpoints and custom media queries
 * @param customQuery - Optional custom media query to evaluate
 * @returns Object with breakpoints status and custom query match if provided
 */
