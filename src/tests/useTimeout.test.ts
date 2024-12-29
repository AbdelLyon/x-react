import { useEffect, useRef } from "react";

interface UseTimeoutOptions {
  autoInvoke?: boolean;
}

interface UseTimeoutReturn {
  start: (...params: unknown[]) => void;
  clear: () => void;
}

export const useTimeout = (
  callback: (...params: unknown[]) => void,
  delay: number,
  { autoInvoke = false }: UseTimeoutOptions = {},
): UseTimeoutReturn => {
  const timeoutRef = useRef<number | null>(null);

  const start = (...params: unknown[]): void => {
    if (timeoutRef.current === null) {
      timeoutRef.current = window.setTimeout(() => {
        callback(...params);
        timeoutRef.current = null;
      }, delay);
    }
  };

  const clear = (): void => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (autoInvoke) {
      start();
    }
    return clear;
  }, [delay]);

  return { start, clear };
};

// Tests
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("useTimeout", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllTimers();
  });

  it("devrait retourner les méthodes start et clear", () => {
    const { result } = renderHook(() => useTimeout(() => {}, 1000));

    expect(typeof result.current.start).toBe("function");
    expect(typeof result.current.clear).toBe("function");
  });

  it("devrait exécuter le callback après le délai", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useTimeout(callback, 1000));

    act(() => {
      result.current.start();
    });

    expect(callback).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("devrait démarrer automatiquement avec autoInvoke", () => {
    const callback = vi.fn();
    renderHook(() => useTimeout(callback, 1000, { autoInvoke: true }));

    expect(callback).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("devrait pouvoir être annulé", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useTimeout(callback, 1000));

    act(() => {
      result.current.start();
      result.current.clear();
    });

    vi.advanceTimersByTime(1000);
    expect(callback).not.toHaveBeenCalled();
  });

  it("devrait passer les paramètres au callback", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useTimeout(callback, 1000));

    act(() => {
      result.current.start("test", 123);
    });

    vi.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledWith("test", 123);
  });

  it("devrait nettoyer le timeout au démontage", () => {
    const callback = vi.fn();
    const { unmount } = renderHook(() =>
      useTimeout(callback, 1000, { autoInvoke: true }),
    );

    unmount();
    vi.advanceTimersByTime(1000);
    expect(callback).not.toHaveBeenCalled();
  });

  it("ne devrait pas démarrer plusieurs timeouts simultanément", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useTimeout(callback, 1000));

    act(() => {
      result.current.start();
      result.current.start();
      result.current.start();
    });

    vi.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
