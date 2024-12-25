import { useDataGridState } from "@/hooks/useDataGridState";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("useDataGridState", () => {
  const mockRows = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  it("devrait initialiser avec des valeurs par défaut", () => {
    const { result } = renderHook(() => useDataGridState({ rows: mockRows }));

    expect(result.current.selectedRows).toEqual([]);
    expect(result.current.isAllChecked).toBe(false);
    expect(result.current.isChecked).toBe(false);
    expect(result.current.sortConfig).toEqual({ key: null, direction: "asc" });
  });

  it("devrait gérer la sélection d'une seule ligne", () => {
    const onSelectionChange = vi.fn();
    const { result } = renderHook(() =>
      useDataGridState({ rows: mockRows, onSelectionChange }),
    );

    act(() => {
      result.current.handleSelectionChange(mockRows[0]);
    });

    expect(result.current.selectedRows).toEqual([mockRows[0]]);
    expect(onSelectionChange).toHaveBeenCalledWith([mockRows[0]]);
  });

  it("devrait gérer la désélection d'une ligne", () => {
    const onSelectionChange = vi.fn();
    const { result } = renderHook(() =>
      useDataGridState({ rows: mockRows, onSelectionChange }),
    );

    act(() => {
      result.current.handleSelectionChange(mockRows[0]);
      result.current.handleSelectionChange(mockRows[0]);
    });

    expect(result.current.selectedRows).toEqual([]);
    expect(onSelectionChange).toHaveBeenLastCalledWith([]);
  });

  it("devrait gérer la sélection de plusieurs lignes", () => {
    const onSelectionChange = vi.fn();
    const { result } = renderHook(() =>
      useDataGridState({ rows: mockRows, onSelectionChange }),
    );

    act(() => {
      result.current.handleSelectionChange(mockRows[0]);
      result.current.handleSelectionChange(mockRows[1]);
    });

    expect(result.current.selectedRows).toEqual([mockRows[0], mockRows[1]]);
    expect(onSelectionChange).toHaveBeenLastCalledWith([
      mockRows[0],
      mockRows[1],
    ]);
  });

  it("devrait gérer la sélection de toutes les lignes", () => {
    const onSelectionChange = vi.fn();
    const { result } = renderHook(() =>
      useDataGridState({ rows: mockRows, onSelectionChange }),
    );

    act(() => {
      result.current.handleSelectAll(true);
    });

    expect(result.current.selectedRows).toEqual(mockRows);
    expect(result.current.isAllChecked).toBe(true);
    expect(result.current.isChecked).toBe(true);
    expect(onSelectionChange).toHaveBeenCalledWith(mockRows);
  });

  it("devrait gérer la désélection de toutes les lignes", () => {
    const onSelectionChange = vi.fn();
    const { result } = renderHook(() =>
      useDataGridState({ rows: mockRows, onSelectionChange }),
    );

    act(() => {
      result.current.handleSelectAll(true);
      result.current.handleSelectAll(false);
    });

    expect(result.current.selectedRows).toEqual([]);
    expect(result.current.isAllChecked).toBe(false);
    expect(result.current.isChecked).toBe(false);
    expect(onSelectionChange).toHaveBeenLastCalledWith([]);
  });

  it("devrait mettre à jour isAllChecked quand toutes les lignes sont sélectionnées individuellement", () => {
    const { result } = renderHook(() => useDataGridState({ rows: mockRows }));

    act(() => {
      mockRows.forEach((row) => result.current.handleSelectionChange(row));
    });

    expect(result.current.isAllChecked).toBe(true);
  });

  it("devrait gérer le changement de tri en ordre croissant", () => {
    const onSortChange = vi.fn();
    const { result } = renderHook(() =>
      useDataGridState({ rows: mockRows, onSortChange }),
    );

    act(() => {
      result.current.handleSortChange("name", "asc");
    });

    expect(result.current.sortConfig).toEqual({
      key: "name",
      direction: "asc",
    });
    expect(onSortChange).toHaveBeenCalledWith("name", "asc");
  });

  it("devrait gérer le changement de tri en ordre décroissant", () => {
    const onSortChange = vi.fn();
    const { result } = renderHook(() =>
      useDataGridState({ rows: mockRows, onSortChange }),
    );

    act(() => {
      result.current.handleSortChange("name", "desc");
    });

    expect(result.current.sortConfig).toEqual({
      key: "name",
      direction: "desc",
    });
    expect(onSortChange).toHaveBeenCalledWith("name", "desc");
  });

  it("devrait gérer l'état de sélection des lignes", () => {
    const { result } = renderHook(() => useDataGridState({ rows: mockRows }));

    act(() => {
      result.current.handleSelectionChange(mockRows[0]);
      result.current.handelSelectRow(mockRows[0]);
    });

    expect(result.current.selectedRows).toHaveLength(1);
    expect(result.current.isChecked).toBe(true);

    act(() => {
      result.current.handleSelectionChange(mockRows[0]);
      result.current.handelSelectRow(mockRows[0]);
    });

    expect(result.current.isChecked).toBe(false);
  });

  it("devrait gérer un tableau de lignes vide", () => {
    const { result } = renderHook(() => useDataGridState({ rows: [] }));

    expect(result.current.isAllChecked).toBe(false);

    act(() => {
      result.current.handleSelectAll(true);
    });

    expect(result.current.selectedRows).toEqual([]);
    expect(result.current.isAllChecked).toBe(false);
  });

  it("devrait maintenir l'état de sélection quand les lignes changent", () => {
    const { result, rerender } = renderHook(
      ({ rows }) => useDataGridState({ rows }),
      { initialProps: { rows: mockRows } },
    );

    act(() => {
      result.current.handleSelectionChange(mockRows[0]);
    });

    const newRows = [...mockRows, { id: 4, name: "Item 4" }];
    rerender({ rows: newRows });

    expect(result.current.selectedRows).toEqual([mockRows[0]]);
    expect(result.current.isAllChecked).toBe(false);
  });
});
