import { useStateHistory } from "@/hooks/useStateHistory";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("useStateHistory", () => {
  it("devrait initialiser avec la valeur fournie", () => {
    const { result } = renderHook(() => useStateHistory("initial"));

    expect(result.current[0]).toBe("initial");
    expect(result.current[2].history).toEqual(["initial"]);
    expect(result.current[2].current).toBe(0);
  });

  it("devrait permettre d'ajouter de nouvelles valeurs", () => {
    const { result } = renderHook(() => useStateHistory("initial"));

    act(() => {
      result.current[1].set("nouvelle valeur");
    });

    expect(result.current[0]).toBe("nouvelle valeur");
    expect(result.current[2].history).toEqual(["initial", "nouvelle valeur"]);
    expect(result.current[2].current).toBe(1);
  });

  it("devrait permettre de naviguer en arrière", () => {
    const { result } = renderHook(() => useStateHistory("initial"));

    act(() => {
      result.current[1].set("valeur 1");
      result.current[1].set("valeur 2");
    });

    act(() => {
      result.current[1].back();
    });

    expect(result.current[0]).toBe("valeur 1");
    expect(result.current[2].current).toBe(1);
  });

  it("devrait permettre de naviguer en avant", () => {
    const { result } = renderHook(() => useStateHistory("initial"));

    act(() => {
      result.current[1].set("valeur 1");
      result.current[1].set("valeur 2");
      result.current[1].back(2);
      result.current[1].forward();
    });

    expect(result.current[0]).toBe("valeur 1");
    expect(result.current[2].current).toBe(1);
  });

  it("devrait permettre de réinitialiser l'historique", () => {
    const { result } = renderHook(() => useStateHistory("initial"));

    act(() => {
      result.current[1].set("valeur 1");
      result.current[1].set("valeur 2");
      result.current[1].reset();
    });

    expect(result.current[0]).toBe("initial");
    expect(result.current[2].history).toEqual(["initial"]);
    expect(result.current[2].current).toBe(0);
  });

  it("devrait gérer les limites de navigation", () => {
    const { result } = renderHook(() => useStateHistory("initial"));

    act(() => {
      result.current[1].back(10); // Essayer de reculer trop loin
    });

    expect(result.current[0]).toBe("initial");
    expect(result.current[2].current).toBe(0);

    act(() => {
      result.current[1].forward(10); // Essayer d'avancer trop loin
    });

    expect(result.current[0]).toBe("initial");
    expect(result.current[2].current).toBe(0);
  });

  it("devrait tronquer l'historique futur lors d'un nouvel ajout", () => {
    const { result } = renderHook(() => useStateHistory("initial"));

    act(() => {
      result.current[1].set("valeur 1");
      result.current[1].set("valeur 2");
      result.current[1].back(1);
      result.current[1].set("nouvelle valeur");
    });

    expect(result.current[2].history).toEqual([
      "initial",
      "valeur 1",
      "nouvelle valeur",
    ]);
    expect(result.current[0]).toBe("nouvelle valeur");
  });
});
