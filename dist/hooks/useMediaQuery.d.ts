export interface UseMediaQueryOptions {
    /** Whether to get initial value in effect. Defaults to true */
    getInitialValueInEffect?: boolean;
    /** Custom initial value before media query is evaluated */
    initialValue?: boolean;
}
/**
 * React hook to track viewport changes using MediaQuery
 * @param query - Media query string to evaluate
 * @param options - Configuration options
 * @returns boolean indicating if the media query matches
 */
export declare function useMediaQuery(query: string, options?: UseMediaQueryOptions): boolean;
