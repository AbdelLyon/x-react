import { useWindowEvent } from "@/hooks/useWindowEvent";
import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("useWindowEvent", () => {
  it("devrait ajouter un event listener à window", () => {
    const addEventListenerSpy = vi.spyOn(window, "addEventListener");
    const listener = vi.fn();

    renderHook(() => useWindowEvent("click", listener));

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "click",
      listener,
      undefined,
    );
  });

  it("devrait supprimer l'event listener au démontage", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    const listener = vi.fn();

    const { unmount } = renderHook(() => useWindowEvent("click", listener));
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "click",
      listener,
      undefined,
    );
  });

  it("devrait prendre en compte les options", () => {
    const addEventListenerSpy = vi.spyOn(window, "addEventListener");
    const listener = vi.fn();
    const options = { capture: true };

    renderHook(() => useWindowEvent("click", listener, options));

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "click",
      listener,
      options,
    );
  });

  it("devrait mettre à jour l'event listener si le type change", () => {
    const addEventListenerSpy = vi.spyOn(window, "addEventListener");
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    const listener = vi.fn();

    const { rerender } = renderHook(
      ({ type }) => useWindowEvent(type, listener),
      { initialProps: { type: "click" } },
    );

    rerender({ type: "keydown" });

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "click",
      listener,
      undefined,
    );
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "keydown",
      listener,
      undefined,
    );
  });
});
