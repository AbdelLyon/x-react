import { useCallback, useEffect, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export type StorageType = "localStorage" | "sessionStorage";

export interface StorageProperties<T> {
  key: string;
  defaultValue?: T;
  getInitialValueInEffect?: boolean;
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
}

interface StorageEvent extends Event {
  storageArea: Storage | null;
  key: string | null;
  newValue: string | null;
}

interface CustomStorageEvent<T> extends CustomEvent {
  detail: {
    key: string;
    value: T;
  };
}

function serializeJSON<T>(
  value: T,
  hookName: string = "use-local-storage",
): string {
  try {
    return JSON.stringify(value);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        `@mantine/hooks ${hookName}: Failed to serialize the value: ${error.message}`,
      );
    }
    throw error;
  }
}

function deserializeJSON<T>(value: string | undefined): T | undefined {
  if (value === undefined || value === "") {
    return undefined;
  }
  try {
    return JSON.parse(value);
  } catch {
    return value as T;
  }
}
interface StorageHandler {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}

function createStorageHandler(type: StorageType): StorageHandler {
  const getItem = (key: string): string | null => {
    try {
      return window[type].getItem(key);
    } catch {
      console.warn(
        "use-local-storage: Failed to get value from storage, localStorage is blocked",
      );
      return null;
    }
  };
  const setItem = (key: string, value: string): void => {
    try {
      window[type].setItem(key, value);
    } catch {
      console.warn(
        "use-local-storage: Failed to set value to storage, localStorage is blocked",
      );
    }
  };
  const removeItem = (key: string): void => {
    try {
      window[type].removeItem(key);
    } catch {
      console.warn(
        "use-local-storage: Failed to remove value from storage, localStorage is blocked",
      );
    }
  };

  return { getItem, setItem, removeItem };
}

export function createStorage<T>(
  type: StorageType,
  hookName: string,
): (
  props: StorageProperties<T>,
) => [T, (val: T | ((prevState: T) => T)) => void, () => void] {
  const eventName: string =
    type === "localStorage"
      ? "mantine-local-storage"
      : "mantine-session-storage";
  const { getItem, setItem, removeItem } = createStorageHandler(type);

  return function useStorage({
    key,
    defaultValue,
    getInitialValueInEffect = true,
    deserialize = deserializeJSON as (value: string | undefined) => T,
    serialize = (value: T): string => serializeJSON(value, hookName),
  }: StorageProperties<T>): [
    T,
    (val: T | ((prevState: T) => T)) => void,
    () => void,
  ] {
    const readStorageValue = (skipStorage?: boolean): T => {
      let storageBlockedOrSkipped: boolean;

      try {
        storageBlockedOrSkipped =
          window === undefined ||
          !(type in window) ||
          window[type] === undefined ||
          skipStorage === undefined;
      } catch {
        storageBlockedOrSkipped = true;
      }

      if (storageBlockedOrSkipped) {
        return defaultValue as T;
      }

      const storageValue: string | null = getItem(key);
      return storageValue !== null
        ? deserialize(storageValue)
        : (defaultValue as T);
    };

    const [value, setValue] = useState<T>(
      readStorageValue(getInitialValueInEffect),
    );

    const setStorageValue = useCallback(
      (val: T | ((prevState: T) => T)): void => {
        if (val instanceof Function) {
          setValue((current: T) => {
            const result: T = val(current);
            setItem(key, serialize(result));
            window.dispatchEvent(
              new CustomEvent(eventName, {
                detail: { key, value: val(current) },
              }) as CustomStorageEvent<T>,
            );
            return result;
          });
        } else {
          setItem(key, serialize(val));
          window.dispatchEvent(
            new CustomEvent(eventName, {
              detail: { key, value: val },
            }) as CustomStorageEvent<T>,
          );
          setValue(val);
        }
      },
      [key, serialize],
    );

    const removeStorageValue = (): void => {
      removeItem(key);
      window.dispatchEvent(
        new CustomEvent(eventName, {
          detail: { key, value: defaultValue },
        }) as CustomStorageEvent<T>,
      );
    };
    useWindowEvent("storage", (event: StorageEvent) => {
      if (event.storageArea === window[type] && event.key === key) {
        setValue(deserialize(event.newValue ?? ""));
      }
    });

    useWindowEvent(eventName, (event: CustomStorageEvent<T>) => {
      if (event.detail.key === key) {
        setValue(event.detail.value);
      }
    });

    useEffect(() => {
      if (defaultValue !== undefined && value === undefined) {
        setStorageValue(defaultValue);
      }
    }, [defaultValue, value, setStorageValue]);

    useEffect(() => {
      const val: T = readStorageValue();
      if (val !== undefined) {
        setStorageValue(val);
      }
    }, [key, setStorageValue]);

    return [
      value === undefined ? (defaultValue as T) : value,
      setStorageValue,
      removeStorageValue,
    ];
  };
}

export function readValue(
  type: StorageType,
): <T>(props: StorageProperties<T>) => T {
  const { getItem } = createStorageHandler(type);

  return function read<T>({
    key,
    defaultValue,
    deserialize = deserializeJSON as (value: string | undefined) => T,
  }: StorageProperties<T>): T {
    let storageBlockedOrSkipped: boolean;

    try {
      storageBlockedOrSkipped =
        window === undefined || !(type in window) || window[type] === undefined;
    } catch {
      storageBlockedOrSkipped = true;
    }

    if (storageBlockedOrSkipped) {
      return defaultValue as T;
    }

    const storageValue: string | null = getItem(key);
    return storageValue !== null
      ? deserialize(storageValue)
      : (defaultValue as T);
  };
}

export const useLocalStorage = <T = string>(
  props: StorageProperties<T>,
): [T, (val: T | ((prevState: T) => T)) => void, () => void] => {
  return createStorage<T>("localStorage", "use-local-storage")(props);
};
