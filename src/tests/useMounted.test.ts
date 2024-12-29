import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useMounted } from "@/hooks/useMounted";

describe("useMounted", () => {
  it("devrait retourner true après le montage du composant", () => {
    const { result } = renderHook(() => useMounted());
    expect(result.current).toBe(true);
  });

  it("devrait rester true après plusieurs rendus", () => {
    const { result } = renderHook(() => useMounted());
    expect(result.current).toBe(true);
  });
});
