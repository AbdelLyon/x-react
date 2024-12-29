import { useEvent } from "@/hooks/useEvent";
import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("useEvent hook", () => {
  it("devrait retourner un objet ref", () => {
    const listener = vi.fn();
    const { result } = renderHook(() =>
      useEvent<"click", HTMLDivElement>("click", listener),
    );

    expect(result.current).toHaveProperty("current");
    expect(result.current.current).toBe(null);
  });

  it("devrait conserver la même référence entre les rendus", () => {
    const listener = vi.fn();
    const { result, rerender } = renderHook(() =>
      useEvent<"click", HTMLDivElement>("click", listener),
    );

    const firstRef = result.current;
    rerender();
    const secondRef = result.current;

    expect(firstRef).toBe(secondRef);
  });

  it("devrait fonctionner avec différents types d'éléments HTML", () => {
    const listener = vi.fn();
    const { result: divResult } = renderHook(() =>
      useEvent<"click", HTMLDivElement>("click", listener),
    );
    const { result: buttonResult } = renderHook(() =>
      useEvent<"click", HTMLButtonElement>("click", listener),
    );

    expect(divResult.current).toHaveProperty("current");
    expect(buttonResult.current).toHaveProperty("current");
  });

  it("devrait fonctionner avec différents types d'événements", () => {
    const listener = vi.fn();
    const { result: clickResult } = renderHook(() =>
      useEvent<"click", HTMLDivElement>("click", listener),
    );
    const { result: keydownResult } = renderHook(() =>
      useEvent<"keydown", HTMLDivElement>("keydown", listener),
    );

    expect(clickResult.current).toHaveProperty("current");
    expect(keydownResult.current).toHaveProperty("current");
  });
});
