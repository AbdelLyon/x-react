import { useClickOutside } from "@/hooks/useClickOutside";
import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("useClickOutside hook", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("devrait retourner un objet ref", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useClickOutside(handler));

    expect(result.current).toHaveProperty("current");
    expect(result.current.current).toBe(null);
  });

  it("devrait appeler le handler quand on clique en dehors de l'élément ciblé", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useClickOutside(handler));

    const refElement = document.createElement("div");
    document.body.appendChild(refElement);
    if (result.current.current === null) {
      Object.defineProperty(result.current, "current", {
        value: refElement,
        writable: true,
      });
    }

    const outsideElement = document.createElement("div");
    document.body.appendChild(outsideElement);

    const event = new MouseEvent("mousedown", {
      bubbles: true,
    });
    Object.defineProperty(event, "target", { value: outsideElement });
    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("devrait ignorer les clics à l'intérieur de l'élément ciblé", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useClickOutside(handler));

    const refElement = document.createElement("div");
    document.body.appendChild(refElement);
    if (result.current.current === null) {
      Object.defineProperty(result.current, "current", {
        value: refElement,
        writable: true,
      });
    }

    const event = new MouseEvent("mousedown", {
      bubbles: true,
    });
    Object.defineProperty(event, "target", { value: refElement });
    document.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it("devrait respecter les nodes à ignorer", () => {
    const handler = vi.fn();
    const ignoreNode = document.createElement("div");
    document.body.appendChild(ignoreNode);

    const mockComposedPath = vi.fn().mockReturnValue([ignoreNode]);

    renderHook(() => useClickOutside(handler, null, [ignoreNode]));

    const event = new MouseEvent("mousedown", {
      bubbles: true,
    });
    Object.defineProperty(event, "target", { value: ignoreNode });
    Object.defineProperty(event, "composedPath", { value: mockComposedPath });
    document.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it("devrait ignorer les éléments avec data-ignore-outside-clicks", () => {
    const handler = vi.fn();
    renderHook(() => useClickOutside(handler));

    const ignoredElement = document.createElement("div");
    ignoredElement.setAttribute("data-ignore-outside-clicks", "");
    document.body.appendChild(ignoredElement);

    const mockComposedPath = vi.fn().mockReturnValue([]);

    const event = new MouseEvent("mousedown", {
      bubbles: true,
    });
    Object.defineProperty(event, "target", { value: ignoredElement });
    Object.defineProperty(event, "composedPath", { value: mockComposedPath });
    document.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });
});