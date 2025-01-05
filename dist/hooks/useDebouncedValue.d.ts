export declare const useDebouncedValue: <T>(value: T, wait: number, options?: {
    leading: boolean;
}) => readonly [T, () => void];
