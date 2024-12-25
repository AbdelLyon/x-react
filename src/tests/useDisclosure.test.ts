import { useDisclosure } from "@/hooks/useDisclosure";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("hooks/use-disclosure", () => {
  describe("Gestion basique de l'état", () => {
    it("devrait initialiser avec l'état par défaut correct", () => {
      const { result } = renderHook(() => useDisclosure(true));
      expect(result.current[0]).toBe(true);
    });

    it("devrait changer l'état à faux lors de l'appel à fermer", () => {
      const { result } = renderHook(() => useDisclosure(true));

      act(() => result.current[1].close());

      expect(result.current[0]).toBe(false);
    });

    it("devrait changer l'état à vrai lors de l'appel à ouvrir", () => {
      const { result } = renderHook(() => useDisclosure(false));

      act(() => result.current[1].open());

      expect(result.current[0]).toBe(true);
    });

    it("devrait basculer correctement l'état lors de l'appel à basculer", () => {
      const { result } = renderHook(() => useDisclosure(false));
      expect(result.current[0]).toBe(false);

      act(() => result.current[1].toggle());
      expect(result.current[0]).toBe(true);

      act(() => result.current[1].toggle());
      expect(result.current[0]).toBe(false);
    });
  });

  describe("Gestion des callbacks", () => {
    it("devrait appeler onClose uniquement lorsque l'état passe de vrai à faux", () => {
      const onClose = vi.fn();
      const { result } = renderHook(() => useDisclosure(true, { onClose }));
      expect(onClose).not.toHaveBeenCalled();

      act(() => result.current[1].close());
      expect(onClose).toHaveBeenCalledTimes(1);

      act(() => result.current[1].close());
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("devrait appeler onOpen uniquement lorsque l'état passe de faux à vrai", () => {
      const onOpen = vi.fn();
      const { result } = renderHook(() => useDisclosure(false, { onOpen }));
      expect(onOpen).not.toHaveBeenCalled();

      act(() => result.current[1].open());
      expect(onOpen).toHaveBeenCalledTimes(1);

      act(() => result.current[1].open());
      expect(onOpen).toHaveBeenCalledTimes(1);
    });

    it("devrait appeler les callbacks appropriés lors du basculement d'état", () => {
      const onClose = vi.fn();
      const onOpen = vi.fn();
      const { result } = renderHook(() =>
        useDisclosure(false, { onOpen, onClose }),
      );

      expect(onOpen).not.toHaveBeenCalled();
      expect(onClose).not.toHaveBeenCalled();

      // Premier basculement : faux -> vrai
      act(() => result.current[1].toggle());
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onClose).not.toHaveBeenCalled();

      // Deuxième basculement : vrai -> faux
      act(() => result.current[1].toggle());
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);

      // Troisième basculement : faux -> vrai
      act(() => result.current[1].toggle());
      expect(onOpen).toHaveBeenCalledTimes(2);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("Cas limites", () => {
    it("ne devrait pas déclencher de callbacks quand l'état ne change pas", () => {
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
