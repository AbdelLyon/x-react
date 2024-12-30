import { useReducer } from "react";

type ToggleReducerAction<T> = T | ((prevValue: T) => T);
type ToggleReducer<T> = (
  state: readonly T[],
  action: ToggleReducerAction<T>,
) => T[];
type ToggleReturn<T> = readonly [T, (value?: ToggleReducerAction<T>) => void];

export const useToggle = <T = boolean>(
  options: readonly T[] = [false, true] as unknown as readonly T[],
): ToggleReturn<T> => {
  const reducer: ToggleReducer<T> = (state, action) => {
    const value = action instanceof Function ? action(state[0]) : action;
    const index = Math.abs(state.indexOf(value));
    return [...state.slice(index), ...state.slice(0, index)];
  };

  const [[currentOption], toggle] = useReducer(reducer, [...options]);

  return [
    currentOption,
    toggle as (value?: ToggleReducerAction<T>) => void,
  ] as const;
};