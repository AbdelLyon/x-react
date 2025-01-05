import type { UseStateHistoryReturn } from "@/hooks/useStateHistory";
import { useStateHistory } from "@/hooks/useStateHistory";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("useStateHistory", (): void => {
  it("devrait initialiser avec la valeur fournie", (): void => {
    const { result } = renderHook(
      (): UseStateHistoryReturn<string> => useStateHistory("initial"),
    );

    expect(result.current[0]).toBe("initial");
    expect(result.current[2].history).toEqual(["initial"]);
    expect(result.current[2].current).toBe(0);
  });

  it("devrait permettre d'ajouter de nouvelles valeurs", (): void => {
    const { result } = renderHook(
      (): UseStateHistoryReturn<string> => useStateHistory("initial"),
    );

    act((): void => {
      result.current[1].set("nouvelle valeur");
    });

    expect(result.current[0]).toBe("nouvelle valeur");
    expect(result.current[2].history).toEqual(["initial", "nouvelle valeur"]);
    expect(result.current[2].current).toBe(1);
  });

  it("devrait permettre de naviguer en arrière", (): void => {
    const { result } = renderHook(
      (): UseStateHistoryReturn<string> => useStateHistory("initial"),
    );

    act((): void => {
      result.current[1].set("valeur 1");
      result.current[1].set("valeur 2");
    });

    act((): void => {
      result.current[1].back();
    });

    expect(result.current[0]).toBe("valeur 1");
    expect(result.current[2].current).toBe(1);
  });

  it("devrait permettre de naviguer en avant", (): void => {
    const { result } = renderHook(
      (): UseStateHistoryReturn<string> => useStateHistory("initial"),
    );

    act((): void => {
      result.current[1].set("valeur 1");
      result.current[1].set("valeur 2");
      result.current[1].back(2);
      result.current[1].forward();
    });

    expect(result.current[0]).toBe("valeur 1");
    expect(result.current[2].current).toBe(1);
  });

  it("devrait permettre de réinitialiser l'historique", (): void => {
    const { result } = renderHook(
      (): UseStateHistoryReturn<string> => useStateHistory("initial"),
    );

    act((): void => {
      result.current[1].set("valeur 1");
      result.current[1].set("valeur 2");
      result.current[1].reset();
    });

    expect(result.current[0]).toBe("initial");
    expect(result.current[2].history).toEqual(["initial"]);
    expect(result.current[2].current).toBe(0);
  });

  it("devrait gérer les limites de navigation", (): void => {
    const { result } = renderHook(
      (): UseStateHistoryReturn<string> => useStateHistory("initial"),
    );

    act((): void => {
      result.current[1].back(10);
    });

    expect(result.current[0]).toBe("initial");
    expect(result.current[2].current).toBe(0);

    act((): void => {
      result.current[1].forward(10);
    });

    expect(result.current[0]).toBe("initial");
    expect(result.current[2].current).toBe(0);
  });

  it("devrait tronquer l'historique futur lors d'un nouvel ajout", (): void => {
    const { result } = renderHook(
      (): UseStateHistoryReturn<string> => useStateHistory("initial"),
    );

    act((): void => {
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
