import { useCallbackRef } from "@/hooks/useCallbackRef";
import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("useCallbackRef", () => {
  it("devrait retourner une fonction qui appelle le callback", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useCallbackRef(callback));

    result.current("test");
    expect(callback).toHaveBeenCalledWith("test");
  });

  it("devrait mettre à jour la référence quand le callback change", () => {
    const firstCallback = vi.fn();
    const secondCallback = vi.fn();

    const { result, rerender } = renderHook((cb) => useCallbackRef(cb), {
      initialProps: firstCallback,
    });

    result.current("test1");
    expect(firstCallback).toHaveBeenCalledWith("test1");

    rerender(secondCallback);

    result.current("test2");
    expect(secondCallback).toHaveBeenCalledWith("test2");
  });

  it("devrait gérer un callback undefined", () => {
    const { result } = renderHook(() => useCallbackRef(undefined));

    expect(() => result.current()).not.toThrow();
  });
});
