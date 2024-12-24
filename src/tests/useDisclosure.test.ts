import { useDisclosure } from "@/hooks/useDisclosure";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("hooks/use-disclosure", () => {
  describe("Basic state management", () => {
    it("should initialize with the correct default state", () => {
      const { result } = renderHook(() => useDisclosure(true));
      expect(result.current[0]).toBe(true);
    });

    it("should change state to false when close is called", () => {
      const { result } = renderHook(() => useDisclosure(true));

      act(() => result.current[1].close());

      expect(result.current[0]).toBe(false);
    });

    it("should change state to true when open is called", () => {
      const { result } = renderHook(() => useDisclosure(false));

      act(() => result.current[1].open());

      expect(result.current[0]).toBe(true);
    });

    it("should toggle state correctly when toggle is called", () => {
      const { result } = renderHook(() => useDisclosure(false));
      expect(result.current[0]).toBe(false);

      act(() => result.current[1].toggle());
      expect(result.current[0]).toBe(true);

      act(() => result.current[1].toggle());
      expect(result.current[0]).toBe(false);
    });
  });

  describe("Callback handling", () => {
    it("should call onClose only when state changes from true to false", () => {
      const onClose = vi.fn();
      const { result } = renderHook(() => useDisclosure(true, { onClose }));
      expect(onClose).not.toHaveBeenCalled();

      act(() => result.current[1].close());
      expect(onClose).toHaveBeenCalledTimes(1);

      act(() => result.current[1].close());
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("should call onOpen only when state changes from false to true", () => {
      const onOpen = vi.fn();
      const { result } = renderHook(() => useDisclosure(false, { onOpen }));
      expect(onOpen).not.toHaveBeenCalled();

      act(() => result.current[1].open());
      expect(onOpen).toHaveBeenCalledTimes(1);

      act(() => result.current[1].open());
      expect(onOpen).toHaveBeenCalledTimes(1);
    });

    it("should call appropriate callbacks when toggling state", () => {
      const onClose = vi.fn();
      const onOpen = vi.fn();
      const { result } = renderHook(() =>
        useDisclosure(false, { onOpen, onClose }),
      );

      expect(onOpen).not.toHaveBeenCalled();
      expect(onClose).not.toHaveBeenCalled();

      // First toggle: false -> true
      act(() => result.current[1].toggle());
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onClose).not.toHaveBeenCalled();

      // Second toggle: true -> false
      act(() => result.current[1].toggle());
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);

      // Third toggle: false -> true
      act(() => result.current[1].toggle());
      expect(onOpen).toHaveBeenCalledTimes(2);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("Edge cases", () => {
    it("should not trigger callbacks when state doesn't change", () => {
      const onClose = vi.fn();
      const onOpen = vi.fn();
      const { result } = renderHook(() =>
        useDisclosure(true, { onOpen, onClose }),
      );

      act(() => result.current[1].open());
      expect(onOpen).not.toHaveBeenCalled();

      act(() => result.current[1].close());
      expect(onClose).toHaveBeenCalledTimes(1);

      act(() => result.current[1].close());
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
