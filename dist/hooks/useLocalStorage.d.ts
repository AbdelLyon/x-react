export type StorageType = "localStorage" | "sessionStorage";
export interface StorageProperties<T> {
    key: string;
    defaultValue?: T;
    getInitialValueInEffect?: boolean;
    serialize?: (value: T) => string;
    deserialize?: (value: string) => T;
}
export declare function createStorage<T>(type: StorageType, hookName: string): (props: StorageProperties<T>) => [T, (val: T | ((prevState: T) => T)) => void, () => void];
export declare function readValue(type: StorageType): <T>(props: StorageProperties<T>) => T;
export declare const useLocalStorage: <T = string>(props: StorageProperties<T>) => [T, (val: T | ((prevState: T) => T)) => void, () => void];
