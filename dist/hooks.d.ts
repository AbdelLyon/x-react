import { Ref } from 'react';
import { SetStateAction } from 'react';

declare type Breakpoints = {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
};

declare type LayoutConfig<T> = {
    navbar?: Partial<T>;
    sidebar?: Partial<T>;
};

declare type MergedRefCallback<T> = (node: T | null) => void;

declare type PossibleRef<T> = Ref<T> | undefined;

declare type ReactiveSet<T> = Set<T>;

declare type ResponsiveHook = {
    matches?: boolean;
    getBreakpoint: () => keyof Breakpoints;
    isBreakpoint: (breakpoint: keyof Breakpoints) => boolean;
} & Breakpoints;

declare interface StateHistory<T> {
    history: T[];
    current: number;
}

declare interface StorageProperties<T> {
    key: string;
    defaultValue: T;
}

declare type ThemeHook = {
    setTheme: (theme: string) => void;
    theme: string | undefined;
};

declare type ToggleReducerAction<T> = T | ((prevValue: T) => T);

declare type ToggleReturn<T> = readonly [T, (value?: ToggleReducerAction<T>) => void];

export declare const useCallbackRef: <T extends (...args: unknown[]) => unknown>(callback: T | undefined) => T;

export declare const useClickOutside: <T extends HTMLElement>(handler: () => void, events?: string[] | null, nodes?: (HTMLElement | null)[]) => React.RefObject<T | null>;

export declare const useCounter: (initialValue?: number, options?: Partial<{
    min: number;
    max: number;
}>) => [number, {
    increment: () => void;
    decrement: () => void;
    set: (value: number) => void;
    reset: () => void;
}];

export declare const useDebouncedCallback: <T extends (...args: unknown[]) => unknown>(callback: T, delay: number) => ((...args: Parameters<T>) => void);

export declare const useDebouncedState: <T>(defaultValue: T, wait: number, options?: {
    leading: boolean;
}) => readonly [T, (newValue: SetStateAction<T>) => void];

export declare const useDebouncedValue: <T>(value: T, wait: number, options?: {
    leading: boolean;
}) => readonly [T, () => void];

export declare const useDisclosure: (initialState?: boolean, callbacks?: {
    onOpen?: () => void;
    onClose?: () => void;
}) => [boolean, {
    open: () => void;
    close: () => void;
    toggle: () => void;
}];

export declare const useEvent: <K extends keyof HTMLElementEventMap, T extends HTMLElement>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions) => React.RefObject<T | null>;

export declare const useFocusDetection: <T extends HTMLElement>({ onBlur, onFocus, }?: UseFocusDetectionOptions) => {
    ref: React.RefObject<T>;
    focused: boolean;
};

declare interface UseFocusDetectionOptions {
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}

export declare const useInfiniteScroll: (props?: UseInfiniteScrollProps) => readonly [React.RefObject<HTMLElement>, React.RefObject<HTMLElement>];

export declare interface UseInfiniteScrollProps {
    isEnabled?: boolean;
    hasMore?: boolean;
    distance?: number;
    shouldUseLoader?: boolean;
    onLoadMore?: () => void;
}

export declare type UseInfiniteScrollReturn = ReturnType<typeof useInfiniteScroll>;

export declare const useIntersection: <T extends HTMLElement = HTMLElement>(options?: ConstructorParameters<typeof IntersectionObserver>[1]) => {
    ref: (element: T | null) => void;
    entry: IntersectionObserverEntry | null;
};

export declare const useInterval: (fn: () => void, interval: number, { autoInvoke }?: UseIntervalOptions) => UseIntervalReturn;

declare interface UseIntervalOptions {
    autoInvoke?: boolean;
}

declare interface UseIntervalReturn {
    start: () => void;
    stop: () => void;
    toggle: () => void;
    active: boolean;
}

export declare const useLayoutConfig: <T extends object>(options?: UseLayoutConfigOptions<T>) => LayoutConfig<T>;

declare type UseLayoutConfigOptions<T> = {
    navbar?: Partial<T>;
    sidebar?: Partial<T>;
};

export declare const useLocalStorage: <T>(props: StorageProperties<T>) => readonly [T, (value: T | ((val: T) => T)) => void, () => void];

export declare function useMediaQuery(query: string, options?: UseMediaQueryOptions): boolean;

export declare type UseMediaQueryOptions = {
    getInitialValueInEffect?: boolean;
    initialValue?: boolean;
};

export declare const useMergedRef: <T>(...refs: PossibleRef<T>[]) => MergedRefCallback<T>;

export declare const useMounted: () => boolean;

export declare const usePreviousValue: <T>(value: T) => T | undefined;

export declare const useReactiveSet: <T>(values?: T[]) => ReactiveSet<T>;

export declare const useRerender: () => (() => void);

export declare const useResponsive: (customQuery?: string) => ResponsiveHook;

export declare const useStateHistory: <T>(initialValue: T) => UseStateHistoryReturn<T>;

declare interface UseStateHistoryHandlers<T> {
    set: (value: T) => void;
    back: (steps?: number) => void;
    forward: (steps?: number) => void;
    reset: () => void;
}

declare type UseStateHistoryReturn<T> = [
T,
UseStateHistoryHandlers<T>,
StateHistory<T>
];

export declare const useTheme: () => ThemeHook;

export declare const useTimeout: (callback: (...params: unknown[]) => void, delay: number, { autoInvoke }?: UseTimeoutOptions) => UseTimeoutReturn;

declare interface UseTimeoutOptions {
    autoInvoke?: boolean;
}

declare interface UseTimeoutReturn {
    start: (...params: unknown[]) => void;
    clear: () => void;
}

export declare const useToggle: <T = boolean>(options?: readonly T[]) => ToggleReturn<T>;

export declare const useWindowEvent: <K extends string>(type: K, listener: K extends keyof WindowEventMap ? (this: Window, ev: WindowEventMap[K]) => void : (this: Window, ev: CustomEvent) => void, options?: boolean | AddEventListenerOptions) => void;

export { }
