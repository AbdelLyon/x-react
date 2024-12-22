import { useEffect, useRef, useState, useCallback } from "react";

export interface UseMediaQueryOptions {
  /** Whether to get initial value in effect. Defaults to true */
  getInitialValueInEffect?: boolean;
  /** Custom initial value before media query is evaluated */
  initialValue?: boolean;
}

/**
 * Safely attaches media query listener
 */
function attachMediaListener(
  query: MediaQueryList,
  callback: (event: MediaQueryListEvent) => void,
): () => void {
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

/**
 * Gets initial media query value with SSR support
 */
function getInitialValue(query: string, initialValue?: boolean): boolean {
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

/**
 * React hook to track viewport changes using MediaQuery
 * @param query - Media query string to evaluate
 * @param options - Configuration options
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(
  query: string,
  options: UseMediaQueryOptions = {},
): boolean {
  const { getInitialValueInEffect = true, initialValue } = options;

  const [matches, setMatches] = useState<boolean>(() =>
    getInitialValueInEffect
      ? initialValue ?? false
      : getInitialValue(query, initialValue),
  );

  const queryRef = useRef<MediaQueryList | null>(null);

  // Memoize the callback to prevent unnecessary effect triggers
  const handleChange = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) {
      return undefined;
    }

    try {
      queryRef.current = window.matchMedia(query);
      // Update initial value in effect if needed
      if (getInitialValueInEffect) {
        setMatches(queryRef.current.matches);
      }

      return attachMediaListener(queryRef.current, handleChange);
    } catch (e) {
      console.error("Error setting up media query:", e);
      return undefined;
    }
  }, [query, getInitialValueInEffect, handleChange]);

  return matches;
}
