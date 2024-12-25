import {
  useDataGridState,
  useSelectionState,
  useSortingState,
} from "@/hooks/useDataGridState";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("useSelectionState", () => {
  const mockRows = [
    { id: 1, name: "Row 1" },
    { id: 2, name: "Row 2" },
  ];

  it("devrait initialiser avec une sélection vide", () => {
    const { result } = renderHook(() => useSelectionState({ rows: mockRows }));
    expect(result.current.selectedRows.size).toBe(0);
    expect(result.current.allRowsSelected).toBe(false);
  });

  it("devrait gérer la sélection d'une seule ligne", () => {
    const { result } = renderHook(() => useSelectionState({ rows: mockRows }));

    act(() => {
      result.current.toggleRowSelection(mockRows[0]);
    });

    expect(result.current.selectedRows.size).toBe(1);
    expect(Array.from(result.current.selectedRows)).toContain(mockRows[0]);
  });

  it("devrait gérer la sélection de toutes les lignes", () => {
    const { result } = renderHook(() => useSelectionState({ rows: mockRows }));

    act(() => {
      result.current.toggleAllRowsSelection(true);
    });

    expect(result.current.selectedRows.size).toBe(mockRows.length);
    expect(result.current.allRowsSelected).toBe(true);
  });

  it("devrait gérer le basculement de la sélection d'une ligne", () => {
    const { result } = renderHook(() => useSelectionState({ rows: mockRows }));

    act(() => {
      result.current.toggleRowSelection(mockRows[0]);
      result.current.toggleRowSelection(mockRows[0]);
    });

    expect(result.current.selectedRows.size).toBe(0);
  });
});

describe("useSortingState", () => {
  it("devrait initialiser avec la configuration de tri par défaut", () => {
    const { result } = renderHook(() => useSortingState({}));
    expect(result.current.sortConfiguration).toEqual({
      key: null,
      direction: "asc",
    });
  });

  it("devrait mettre à jour la configuration de tri", () => {
    const { result } = renderHook(() => useSortingState({}));

    act(() => {
      result.current.updateSort("id", "desc");
    });

    expect(result.current.sortConfiguration).toEqual({
      key: "id",
      direction: "desc",
    });
  });

  it("devrait appeler le callback onSortChange", () => {
    const onSortChange = vi.fn();
    const { result } = renderHook(() => useSortingState({ onSortChange }));

    act(() => {
      result.current.updateSort("id", "asc");
    });

    expect(onSortChange).toHaveBeenCalledWith("id", "asc");
  });
});

describe("useGridState", () => {
  const mockRows = [{ id: 1 }, { id: 2 }];

  it("devrait combiner les états de sélection et de tri", () => {
    const { result } = renderHook(() => useDataGridState({ rows: mockRows }));

    expect(result.current).toHaveProperty("selectedRows");
    expect(result.current).toHaveProperty("allRowsSelected");
    expect(result.current).toHaveProperty("toggleRowSelection");
    expect(result.current).toHaveProperty("toggleAllRowsSelection");
    expect(result.current).toHaveProperty("sortConfiguration");
    expect(result.current).toHaveProperty("updateSort");
  });

  it("devrait gérer les callbacks", () => {
    const onSelectionChange = vi.fn();
    const onSortChange = vi.fn();

    const { result } = renderHook(() =>
      useDataGridState({
        rows: mockRows,
        onSelectionChange,
        onSortChange,
      }),
    );

    act(() => {
      result.current.toggleRowSelection(mockRows[0]);
      result.current.updateSort("id", "desc");
    });

    expect(onSelectionChange).toHaveBeenCalledWith([mockRows[0]]);
    expect(onSortChange).toHaveBeenCalledWith("id", "desc");
  });
});
