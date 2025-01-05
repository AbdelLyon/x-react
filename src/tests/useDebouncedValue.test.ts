import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("useDebouncedValue", (): void => {
  beforeEach((): void => {
    vi.useFakeTimers();
  });

  it("devrait initialiser avec la valeur fournie", (): void => {
    const { result } = renderHook((): readonly [string, () => void] =>
      useDebouncedValue("initial", 100),
    );
    expect(result.current[0]).toBe("initial");
  });

  it("devrait mettre à jour la valeur après le délai", (): void => {
    const { result, rerender } = renderHook(
      ({ value }): readonly [string, () => void] =>
        useDebouncedValue(value, 100),
      { initialProps: { value: "initial" } },
    );

    rerender({ value: "nouvelle valeur" });
    expect(result.current[0]).toBe("initial");

    act((): void => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current[0]).toBe("nouvelle valeur");
  });

  it("devrait annuler les mises à jour précédentes", (): void => {
    const { result, rerender } = renderHook(
      ({ value }): readonly [string, () => void] =>
        useDebouncedValue(value, 100),
      { initialProps: { value: "initial" } },
    );

    rerender({ value: "valeur1" });
    rerender({ value: "valeur2" });
    rerender({ value: "valeur3" });

    expect(result.current[0]).toBe("initial");

    act((): void => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current[0]).toBe("valeur3");
  });

  it("devrait mettre à jour immédiatement avec l'option leading", (): void => {
    const { result, rerender } = renderHook(
      ({ value }): readonly [string, () => void] =>
        useDebouncedValue(value, 100, { leading: true }),
      { initialProps: { value: "initial" } },
    );

    rerender({ value: "nouvelle valeur" });
    expect(result.current[0]).toBe("nouvelle valeur");
  });

  it("devrait permettre d'annuler une mise à jour en attente", (): void => {
    const { result, rerender } = renderHook(
      ({ value }): readonly [string, () => void] =>
        useDebouncedValue(value, 100),
      { initialProps: { value: "initial" } },
    );

    rerender({ value: "nouvelle valeur" });

    act((): void => {
      result.current[1]();
    });

    act((): void => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current[0]).toBe("initial");
  });

  it("devrait nettoyer le timer au démontage", (): void => {
    const clearTimeoutSpy = vi.spyOn(window, "clearTimeout");
    const { rerender, unmount } = renderHook(
      ({ value }): readonly [string, () => void] =>
        useDebouncedValue(value, 100),
      { initialProps: { value: "initial" } },
    );

    rerender({ value: "nouvelle valeur" });
    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
