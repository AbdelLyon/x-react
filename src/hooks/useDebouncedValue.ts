import { useEffect, useRef, useState } from "react";

export const useDebouncedValue = <T>(
  value: T,
  wait: number,
  options = { leading: false },
): readonly [T, () => void] => {
  const [_value, setValue] = useState(value);
  const mountedRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);
  const cooldownRef = useRef(false);

  const cancel = (): void => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (mountedRef.current) {
      if (!cooldownRef.current && options.leading) {
        cooldownRef.current = true;
        setValue(value);
      } else {
        cancel();
        timeoutRef.current = window.setTimeout(() => {
          cooldownRef.current = false;
          setValue(value);
        }, wait);
      }
    }
  }, [value, options.leading, wait]);

  useEffect(() => {
    mountedRef.current = true;
    return cancel;
  }, []);

  return [_value, cancel] as const;
};
