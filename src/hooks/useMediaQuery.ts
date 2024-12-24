import { useEffect, useRef, useState, useCallback } from "react";

export type UseMediaQueryOptions = {
  getInitialValueInEffect?: boolean;
  initialValue?: boolean;
}

function attachMediaListener(
  query: MediaQueryList,
  callback: (event: MediaQueryListEvent) => void,
): () => void {
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

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
  const handleChange = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) {
      return undefined;
    }

    try {
      queryRef.current = window.matchMedia(query);
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

/**
 * React hook to track viewport breakpoints and custom media queries
 * @param customQuery - Optional custom media query to evaluate
 * @returns Object with breakpoints status and custom query match if provided
 */
