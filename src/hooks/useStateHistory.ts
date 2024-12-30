import { useState } from "react";

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
  StateHistory<T>,
];

export const useStateHistory = <T>(
  initialValue: T,
): UseStateHistoryReturn<T> => {
  const [state, setState] = useState<StateHistory<T>>({
    history: [initialValue],
    current: 0,
  });

  const handlers: UseStateHistoryHandlers<T> = {
    set: (value: T): void => {
      setState((currentState) => {
        const nextState = [
          ...currentState.history.slice(0, currentState.current + 1),
          value,
        ];
        return {
          history: nextState,
          current: nextState.length - 1,
        };
      });
    },

    back: (steps: number = 1): void => {
      setState((currentState) => ({
        history: currentState.history,
        current: Math.max(0, currentState.current - steps),
      }));
    },

    forward: (steps: number = 1): void => {
      setState((currentState) => ({
        history: currentState.history,
        current: Math.min(
          currentState.history.length - 1,
          currentState.current + steps,
        ),
      }));
    },

    reset: (): void => {
      setState({
        history: [initialValue],
        current: 0,
      });
    },
  };

  return [state.history[state.current], handlers, state];
};