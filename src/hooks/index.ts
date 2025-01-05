// Theming and layout
export { useTheme } from "@/hooks/useTheme";

// Responsiveness and media queries
export {
  useMediaQuery,
  type UseMediaQueryOptions,
} from "@/hooks/useMediaQuery";
export { useResponsive } from "@/hooks/useResponsive";

// DOM and event handling
export { useClickOutside } from "@/hooks/useClickOutside";
export { useFocusDetection } from "@/hooks/useFocusDetection";
export { useWindowEvent } from "@/hooks/useWindowEvent";
export { useIntersection } from "@/hooks/useIntersection";
export {
  useInfiniteScroll,
  type UseInfiniteScrollProps,
  type UseInfiniteScrollReturn,
} from "@/hooks/useInfiniteScroll";

// State and values management
export { useCounter } from "@/hooks/useCounter";
export { useDebouncedCallback } from "@/hooks/useDebouncedCallback";
export { useDebouncedState } from "@/hooks/useDebouncedState";
export { useDebouncedValue } from "@/hooks/useDebouncedValue";
export { useEvent } from "@/hooks/useEvent";
export { usePreviousValue } from "@/hooks/usePreviousValue";
export { useReactiveSet } from "@/hooks/useReactiveSet";
export { useRerender } from "@/hooks/useRerender";
export { useStateHistory } from "@/hooks/useStateHistory";
export { useToggle } from "@/hooks/useToggle";

// Lifecycle and timing
export { useMounted } from "@/hooks/useMounted";
export { useTimeout } from "@/hooks/useTimeout";
export { useInterval } from "@/hooks/useInterval";

// Utility hooks
export { useCallbackRef } from "@/hooks/useCallbackRef";
export { useLocalStorage } from "@/hooks/useLocalStorage";
export { useMergedRef } from "@/hooks/useMergedRef";
export { useDisclosure } from "@/hooks/useDisclosure";
