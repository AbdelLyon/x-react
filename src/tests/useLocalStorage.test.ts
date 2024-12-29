import { useLocalStorage } from "@/hooks/useLocalStorage";
import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("useLocalStorage", () => {
  it("devrait retourner la valeur par défaut", () => {
    const { result } = renderHook(() =>
      useLocalStorage({
        key: "test",
        defaultValue: "default",
      }),
    );

    expect(result.current[0]).toBe("default");
    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current.length).toBe(3);
  });
});
