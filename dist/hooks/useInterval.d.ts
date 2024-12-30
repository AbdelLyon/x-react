interface UseIntervalOptions {
    autoInvoke?: boolean;
}
interface UseIntervalReturn {
    start: () => void;
    stop: () => void;
    toggle: () => void;
    active: boolean;
}
export declare const useInterval: (fn: () => void, interval: number, { autoInvoke }?: UseIntervalOptions) => UseIntervalReturn;
export {};