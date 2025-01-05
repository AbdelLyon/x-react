import { useCounter } from "@/hooks/useCounter";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

type Counter = [
  number,
  {
    increment: () => void;
    decrement: () => void;
    set: (value: number) => void;
    reset: () => void;
  },
];

describe("useCounter hook", (): void => {
  it("devrait initialiser avec la valeur par défaut", (): void => {
    const { result } = renderHook((): Counter => useCounter());
    expect(result.current[0]).toBe(0);
  });

  it("devrait initialiser avec une valeur personnalisée", (): void => {
    const { result } = renderHook((): Counter => useCounter(5));
    expect(result.current[0]).toBe(5);
  });

  it("devrait incrémenter correctement", (): void => {
    const { result } = renderHook((): Counter => useCounter(0));

    act((): void => {
      result.current[1].increment();
    });

    expect(result.current[0]).toBe(1);
  });

  it("devrait décrémenter correctement", (): void => {
    const { result } = renderHook((): Counter => useCounter(0));

    act((): void => {
      result.current[1].decrement();
    });

    expect(result.current[0]).toBe(-1);
  });

  it("devrait respecter la valeur maximale", (): void => {
    const { result } = renderHook((): Counter => useCounter(5, { max: 5 }));

    act((): void => {
      result.current[1].increment();
    });

    expect(result.current[0]).toBe(5);
  });

  it("devrait respecter la valeur minimale", (): void => {
    const { result } = renderHook((): Counter => useCounter(-5, { min: -5 }));

    act((): void => {
      result.current[1].decrement();
    });

    expect(result.current[0]).toBe(-5);
  });

  it("devrait permettre de définir une valeur", (): void => {
    const { result } = renderHook((): Counter => useCounter(0));

    act((): void => {
      result.current[1].set(10);
    });

    expect(result.current[0]).toBe(10);
  });

  it("devrait réinitialiser à la valeur initiale", (): void => {
    const { result } = renderHook((): Counter => useCounter(5));

    act((): void => {
      result.current[1].increment();
      result.current[1].reset();
    });

    expect(result.current[0]).toBe(5);
  });
});
