import { useRerender } from "@/hooks/useRerender";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("useRerender", () => {
  it("devrait retourner une fonction de mise à jour", () => {
    const { result } = renderHook(() => useRerender());
    expect(typeof result.current).toBe("function");
  });

  it("devrait déclencher un nouveau rendu quand appelé", () => {
    let renderCount = 0;
    const { result } = renderHook(() => {
      renderCount++;
      return useRerender();
    });

    expect(renderCount).toBe(1);

    act(() => {
      result.current();
    });

    expect(renderCount).toBe(2);
  });

  it("devrait permettre des rendus multiples", () => {
    let renderCount = 0;
    const { result } = renderHook(() => {
      renderCount++;
      return useRerender();
    });

    act(() => {
      result.current();
    });

    act(() => {
      result.current();
    });

    expect(renderCount).toBe(3); // 1 initial + 2 rerenders
  });
});
