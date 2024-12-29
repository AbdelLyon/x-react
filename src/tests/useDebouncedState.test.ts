import { useDebouncedState } from "@/hooks/useDebouncedState";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("useDebouncedState", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("devrait initialiser avec la valeur par défaut", () => {
    const { result } = renderHook(() => useDebouncedState("initial", 100));
    expect(result.current[0]).toBe("initial");
  });

  it("devrait mettre à jour la valeur après le délai", () => {
    const { result } = renderHook(() => useDebouncedState("initial", 100));

    act(() => {
      result.current[1]("nouvelle valeur");
    });

    expect(result.current[0]).toBe("initial");

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current[0]).toBe("nouvelle valeur");
  });

  it("devrait annuler les mises à jour précédentes", () => {
    const { result } = renderHook(() => useDebouncedState("initial", 100));

    act(() => {
      result.current[1]("valeur1");
      result.current[1]("valeur2");
      result.current[1]("valeur3");
    });

    expect(result.current[0]).toBe("initial");

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current[0]).toBe("valeur3");
  });

  it("devrait mettre à jour immédiatement avec l'option leading", () => {
    const { result } = renderHook(() =>
      useDebouncedState("initial", 100, { leading: true }),
    );

    act(() => {
      result.current[1]("nouvelle valeur");
    });

    expect(result.current[0]).toBe("nouvelle valeur");
  });

  it("devrait nettoyer le timer au démontage", () => {
    const clearTimeoutSpy = vi.spyOn(window, "clearTimeout");
    const { result, unmount } = renderHook(() =>
      useDebouncedState("initial", 100),
    );

    act(() => {
      result.current[1]("nouvelle valeur");
    });

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
