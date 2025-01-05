import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const concatenateWithSpace = (
  ...strings: (string | undefined)[]
): string => strings.filter(Boolean).join(" ");

export const startsWith = (str: string, prefix: string): boolean =>
  str.startsWith(prefix);

export const endsWith = (str: string, suffix: string): boolean =>
  str.endsWith(suffix);

export const toLowerCase = (str: string): string => str.toLowerCase();

export const toUpperCase = (str: string): string => str.toUpperCase();

export const trim = (str: string): string => str.trim();

export const reverse = (str: string): string =>
  str.split("").reverse().join("");

export const limitValue = (
  value: number,
  min: number | undefined,
  max: number | undefined,
): number => {
  if (min === undefined && max === undefined) {
    return value;
  }

  if (min !== undefined && max === undefined) {
    return Math.max(value, min);
  }

  if (min === undefined && max !== undefined) {
    return Math.min(value, max);
  }

  if (min !== undefined && max !== undefined) {
    return Math.min(Math.max(value, min), max);
  }

  return value;
};

type DebouncedFunction<Args extends unknown[]> = {
  (...args: Args): void;
  cancel: () => void;
};

//debounce function
export function debounce<
  Callback extends (...args: never[]) => unknown,
  Args extends Parameters<Callback>,
>(callback: Callback, delay = 0): DebouncedFunction<Args> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let latestArgs: Args | undefined;

  function debouncedFn(this: unknown, ...args: Args): void {
    latestArgs = args;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout((): void => {
      if (latestArgs) {
        callback.apply(this, latestArgs);
      }
      timeoutId = undefined;
      latestArgs = undefined;
    }, delay);
  }

  debouncedFn.cancel = function cancel(): void {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
      latestArgs = undefined;
    }
  };

  return debouncedFn;
}

export function chain(...callbacks: unknown[]): (...args: unknown[]) => void {
  return (...args: unknown[]): void => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
