type ToggleReducerAction<T> = T | ((prevValue: T) => T);
export type ToggleReturn<T> = readonly [
    T,
    (value?: ToggleReducerAction<T>) => void
];
export declare const useToggle: <T = boolean>(options?: readonly T[]) => ToggleReturn<T>;
export {};
