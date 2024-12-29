import { useToggle } from "@/hooks/useToggle";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("useToggle", () => {
  it("devrait initialiser avec la première valeur des options par défaut", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  it("devrait basculer entre true et false par défaut", () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(false);
  });

  it("devrait accepter des options personnalisées", () => {
    const options = [1, 2, 3] as const;
    const { result } = renderHook(() => useToggle(options));

    expect(result.current[0]).toBe(1);

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(2);

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(3);

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(1);
  });

  it("devrait permettre de basculer vers une valeur spécifique", () => {
    const options = [1, 2, 3] as const;
    const { result } = renderHook(() => useToggle(options));

    act(() => {
      result.current[1](3);
    });
    expect(result.current[0]).toBe(3);

    act(() => {
      result.current[1](1);
    });
    expect(result.current[0]).toBe(1);
  });

  it("devrait gérer les fonctions de mise à jour", () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1]((prev: boolean) => !prev);
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1]((prev: boolean) => !prev);
    });
    expect(result.current[0]).toBe(false);
  });
});
