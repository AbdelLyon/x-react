export declare const useCounter: (initialValue?: number, options?: Partial<{
    min: number;
    max: number;
}>) => [number, {
    increment: () => void;
    decrement: () => void;
    set: (value: number) => void;
    reset: () => void;
}];
