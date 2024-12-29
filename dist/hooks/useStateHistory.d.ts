export interface UseStateHistoryHandlers<T> {
    set: (value: T) => void;
    back: (steps?: number) => void;
    forward: (steps?: number) => void;
    reset: () => void;
}
export interface StateHistory<T> {
    history: T[];
    current: number;
}
type UseStateHistoryReturn<T> = [
    T,
    UseStateHistoryHandlers<T>,
    StateHistory<T>
];
export declare const useStateHistory: <T>(initialValue: T) => UseStateHistoryReturn<T>;
export {};
