import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useLayoutConfig } from "../hooks/useLayoutConfig";

interface TestConfig {
  className?: string;
  title?: string;
  isOpen?: boolean;
  items?: Array<{ id: string; label: string }>;
}

describe("useLayoutConfig", () => {
  describe("Initialisation", () => {
    it("devrait retourner undefined pour navbar et sidebar sans options", () => {
      const { result } = renderHook(() => useLayoutConfig<TestConfig>());

      expect(result.current.navbar).toBeUndefined();
      expect(result.current.sidebar).toBeUndefined();
    });

    it("devrait retourner undefined avec un objet vide", () => {
      const { result } = renderHook(() => useLayoutConfig<TestConfig>({}));

      expect(result.current.navbar).toBeUndefined();
      expect(result.current.sidebar).toBeUndefined();
    });
  });

  describe("Navbar", () => {
    it("devrait appliquer les classes par défaut avec config vide", () => {
      const { result } = renderHook(() =>
        useLayoutConfig<TestConfig>({ navbar: {} }),
      );

      expect(result.current.navbar).toEqual({
        className: "fixed top-0 z-40",
      });
    });

    it("devrait surcharger les valeurs par défaut avec les options fournies", () => {
      const navConfig = {
        title: "Test App",
        isOpen: true,
        className: "custom-class",
      };

      const { result } = renderHook(() =>
        useLayoutConfig<TestConfig>({ navbar: navConfig }),
      );

      expect(result.current.navbar).toEqual({
        title: "Test App",
        isOpen: true,
        className: "custom-class",
      });
    });
  });

  describe("Sidebar", () => {
    it("devrait appliquer les classes par défaut avec config vide", () => {
      const { result } = renderHook(() =>
        useLayoutConfig<TestConfig>({ sidebar: {} }),
      );

      expect(result.current.sidebar).toEqual({
        className: "fixed z-30",
      });
    });

    it("devrait surcharger les valeurs par défaut avec les options fournies", () => {
      const sideConfig = {
        items: [{ id: "1", label: "Item 1" }],
        isOpen: false,
        className: "custom-class",
      };

      const { result } = renderHook(() =>
        useLayoutConfig<TestConfig>({ sidebar: sideConfig }),
      );

      expect(result.current.sidebar).toEqual({
        items: [{ id: "1", label: "Item 1" }],
        isOpen: false,
        className: "custom-class",
      });
    });
  });

  describe("Configuration complète", () => {
    it("devrait gérer la configuration simultanée", () => {
      const config = {
        navbar: {
          title: "App",
          className: "nav-class",
          isOpen: true,
        },
        sidebar: {
          items: [{ id: "1", label: "Menu" }],
          className: "side-class",
          isOpen: false,
        },
      };

      const { result } = renderHook(() => useLayoutConfig<TestConfig>(config));

      expect(result.current.navbar).toEqual({
        title: "App",
        className: "nav-class",
        isOpen: true,
      });

      expect(result.current.sidebar).toEqual({
        items: [{ id: "1", label: "Menu" }],
        className: "side-class",
        isOpen: false,
      });
    });
  });

  describe("Gestion des valeurs undefined", () => {
    it("devrait gérer les propriétés undefined", () => {
      const config = {
        navbar: {
          title: undefined,
          className: undefined,
        },
        sidebar: {
          items: undefined,
          className: undefined,
        },
      };

      const { result } = renderHook(() => useLayoutConfig<TestConfig>(config));

      expect(result.current.navbar).toEqual({
        title: undefined,
        className: undefined,
      });

      expect(result.current.sidebar).toEqual({
        items: undefined,
        className: undefined,
      });
    });
  });
});