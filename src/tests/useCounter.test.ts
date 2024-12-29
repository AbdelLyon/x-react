import { useCounter } from "@/hooks/useCounter";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("useCounter hook", () => {
  it("devrait initialiser avec la valeur par défaut", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current[0]).toBe(0);
  });

  it("devrait initialiser avec une valeur personnalisée", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current[0]).toBe(5);
  });

  it("devrait incrémenter correctement", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current[1].increment();
    });

    expect(result.current[0]).toBe(1);
  });

  it("devrait décrémenter correctement", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current[1].decrement();
    });

    expect(result.current[0]).toBe(-1);
  });

  it("devrait respecter la valeur maximale", () => {
    const { result } = renderHook(() => useCounter(5, { max: 5 }));

    act(() => {
      result.current[1].increment();
    });

    expect(result.current[0]).toBe(5);
  });

  it("devrait respecter la valeur minimale", () => {
    const { result } = renderHook(() => useCounter(-5, { min: -5 }));

    act(() => {
      result.current[1].decrement();
    });

    expect(result.current[0]).toBe(-5);
  });

  it("devrait permettre de définir une valeur", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current[1].set(10);
    });

    expect(result.current[0]).toBe(10);
  });

  it("devrait réinitialiser à la valeur initiale", () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => {
      result.current[1].increment();
      result.current[1].reset();
    });

    expect(result.current[0]).toBe(5);
  });
});
