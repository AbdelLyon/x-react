import { useFocusDetection } from "@/hooks/useFocusDetection";
import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("useFocusDetection hook", () => {
  it("devrait retourner une ref et un état focused initial à false", () => {
    const { result } = renderHook(() => useFocusDetection({}));
    expect(result.current.ref.current).toBe(null);
    expect(result.current.focused).toBe(false);
  });
});
