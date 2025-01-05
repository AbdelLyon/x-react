import { ClassValue } from 'clsx';
export declare const cn: (...inputs: ClassValue[]) => string;
export declare const capitalizeFirstLetter: (str: string) => string;
export declare const concatenateWithSpace: (...strings: (string | undefined)[]) => string;
export declare const startsWith: (str: string, prefix: string) => boolean;
export declare const endsWith: (str: string, suffix: string) => boolean;
export declare const toLowerCase: (str: string) => string;
export declare const toUpperCase: (str: string) => string;
export declare const trim: (str: string) => string;
export declare const reverse: (str: string) => string;
export declare const limitValue: (value: number, min: number | undefined, max: number | undefined) => number;
type DebouncedFunction<Args extends unknown[]> = {
    (...args: Args): void;
    cancel: () => void;
};
export declare function debounce<Callback extends (...args: never[]) => unknown, Args extends Parameters<Callback>>(callback: Callback, delay?: number): DebouncedFunction<Args>;
export declare function chain(...callbacks: unknown[]): (...args: unknown[]) => void;
export {};
