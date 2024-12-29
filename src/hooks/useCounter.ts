import { limitValue } from "@/utils";
import { useState } from "react";

const DEFAULT_OPTIONS = {
  min: -Infinity,
  max: Infinity,
};

export const useCounter = (
  initialValue = 0,
  options?: Partial<{ min: number; max: number }>,
): [
  number,
  {
    increment: () => void;
    decrement: () => void;
    set: (value: number) => void;
    reset: () => void;
  },
] => {
  const { min, max } = { ...DEFAULT_OPTIONS, ...options };
  const [count, setCount] = useState<number>(
    limitValue(initialValue, min, max),
  );

  const increment = (): void =>
    setCount((current) => limitValue(current + 1, min, max));
  const decrement = (): void =>
    setCount((current) => limitValue(current - 1, min, max));
  const set = (value: number): void => setCount(limitValue(value, min, max));
  const reset = (): void => setCount(limitValue(initialValue, min, max));

  return [count, { increment, decrement, set, reset }] as const;
};
