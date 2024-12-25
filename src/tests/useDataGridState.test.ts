import { useGridState, useSelection, useSort } from "@/hooks/useDataGridState";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("useSelection", () => {
  const mockRows = [
    { id: 1, name: "Row 1" },
    { id: 2, name: "Row 2" },
  ];

  it("devrait initialiser avec une sélection vide", () => {
    const { result } = renderHook(() => useSelection({ rows: mockRows }));
    expect(result.current.selectedRows).toHaveLength(0);
    expect(result.current.isAllSelected).toBe(false);
  });

  it("devrait gérer la sélection d'une seule ligne", () => {
    const { result } = renderHook(() => useSelection({ rows: mockRows }));

    act(() => {
      result.current.handleRowSelect(mockRows[0]);
    });

    expect(result.current.selectedRows).toHaveLength(1);
    // expect(result.current.checkedRows[0]).toEqual(mockRows[0]);
  });

  it("devrait gérer la sélection de toutes les lignes", () => {
    const { result } = renderHook(() => useSelection({ rows: mockRows }));

    act(() => {
      result.current.handleSelectAll(true);
    });

    expect(result.current.selectedRows).toHaveLength(mockRows.length);
    expect(result.current.isAllSelected).toBe(true);
  });

  it("devrait gérer le basculement de la sélection d'une ligne", () => {
    const { result } = renderHook(() => useSelection({ rows: mockRows }));

    act(() => {
      result.current.handleRowSelect(mockRows[0]);
      result.current.handleRowSelect(mockRows[0]);
    });

    expect(result.current.selectedRows).toHaveLength(0);
  });
});

describe("useSort", () => {
  it("devrait initialiser avec la configuration de tri par défaut", () => {
    const { result } = renderHook(() => useSort({}));
    expect(result.current.sortConfig).toEqual({ key: null, direction: "asc" });
  });

  it("devrait mettre à jour la configuration de tri", () => {
    const { result } = renderHook(() => useSort({}));

    act(() => {
      result.current.handleSort("id", "desc");
    });

    expect(result.current.sortConfig).toEqual({ key: "id", direction: "desc" });
  });

  it("devrait appeler le callback onSortChange", () => {
    const onSortChange = vi.fn();
    const { result } = renderHook(() => useSort({ onSortChange }));

    act(() => {
      result.current.handleSort("id", "asc");
    });

    expect(onSortChange).toHaveBeenCalledWith("id", "asc");
  });
});

describe("useDataGridState", () => {
  const mockRows = [{ id: 1 }, { id: 2 }];

  it("devrait combiner les états de sélection et de tri", () => {
    const { result } = renderHook(() => useGridState({ rows: mockRows }));

    expect(result.current).toHaveProperty("selectedRows");
    expect(result.current).toHaveProperty("sortConfig");
    expect(result.current).toHaveProperty("handleRowSelect");
    expect(result.current).toHaveProperty("handleSort");
  });

  it("devrait gérer les callbacks", () => {
    const onSelectionChange = vi.fn();
    const onSortChange = vi.fn();

    const { result } = renderHook(() =>
      useGridState({
        rows: mockRows,
        onSelectionChange,
        onSortChange,
      }),
    );

    act(() => {
      result.current.handleRowSelect(mockRows[0]);
      result.current.handleSort("id", "desc");
    });

    expect(onSelectionChange).toHaveBeenCalled();
    expect(onSortChange).toHaveBeenCalled();
  });
});
