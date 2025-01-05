import { ClassValue } from 'clsx';

declare const cn: (...inputs: ClassValue[]) => string;
declare const capitalizeFirstLetter: (str: string) => string;
declare const concatenateWithSpace: (...strings: (string | undefined)[]) => string;
declare const startsWith: (str: string, prefix: string) => boolean;
declare const endsWith: (str: string, suffix: string) => boolean;
declare const toLowerCase: (str: string) => string;
declare const toUpperCase: (str: string) => string;
declare const trim: (str: string) => string;
declare const reverse: (str: string) => string;
declare const limitValue: (value: number, min: number | undefined, max: number | undefined) => number;
type DebouncedFunction<Args extends unknown[]> = {
    (...args: Args): void;
    cancel: () => void;
};
declare function debounce<Callback extends (...args: never[]) => unknown, Args extends Parameters<Callback>>(callback: Callback, delay?: number): DebouncedFunction<Args>;

export { capitalizeFirstLetter, cn, concatenateWithSpace, debounce, endsWith, limitValue, reverse, startsWith, toLowerCase, toUpperCase, trim };
