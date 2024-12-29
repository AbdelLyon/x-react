import { useDebouncedCallback } from "@/hooks/useDebouncedCallback";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("useDebouncedCallback", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("devrait appeler la fonction après le délai", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));

    act(() => {
      result.current("test");
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(callback).toHaveBeenCalledWith("test");
  });

  it("devrait annuler les appels précédents", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));

    act(() => {
      result.current("test1");
      result.current("test2");
      result.current("test3");
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith("test3");
  });

  it("devrait nettoyer le timer au démontage", () => {
    const callback = vi.fn();
    const clearTimeoutSpy = vi.spyOn(window, "clearTimeout");
    const { result, unmount } = renderHook(() =>
      useDebouncedCallback(callback, 100),
    );

    act(() => {
      result.current("test");
    });

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
    expect(callback).not.toHaveBeenCalled();
  });
});
