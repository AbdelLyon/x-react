import { useDataGridState } from "@/hooks/useDataGrid";
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

interface TestRow {
  id: number;
  name: string;
  age: number;
}

describe("useDataGridState", () => {
  const mockRows: TestRow[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  describe("État initial", () => {
    it("devrait initialiser avec les valeurs par défaut", () => {
      const { result } = renderHook(() => useDataGridState({ rows: mockRows }));

      expect(result.current.selectedRows).toHaveLength(0);
      expect(result.current.isAllChecked).toBe(false);
      expect(result.current.sortConfig).toEqual({
        key: null,
        direction: "asc",
      });
    });
  });

  describe("Sélection des lignes", () => {
    it("devrait sélectionner une ligne", () => {
      const onCheckedRowsChange = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({ rows: mockRows, onCheckedRowsChange }),
      );

      act(() => {
        result.current.handleCheckboxChange(mockRows[0]);
      });

      expect(result.current.selectedRows).toEqual([mockRows[0]]);
      expect(result.current.isAllChecked).toBe(false);
      expect(onCheckedRowsChange).toHaveBeenCalledWith([mockRows[0]]);
      expect(result.current.isRowSelected(mockRows[0])).toBe(true);
    });

    it("devrait désélectionner une ligne", () => {
      const onCheckedRowsChange = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({ rows: mockRows, onCheckedRowsChange }),
      );

      // Sélection
      act(() => {
        result.current.handleCheckboxChange(mockRows[0]);
      });

      // Désélection
      act(() => {
        result.current.handleCheckboxChange(mockRows[0]);
      });

      expect(result.current.selectedRows).toEqual([]);
      expect(result.current.isAllChecked).toBe(false);
      expect(onCheckedRowsChange).toHaveBeenLastCalledWith([]);
      expect(result.current.isRowSelected(mockRows[0])).toBe(false);
    });

    it("devrait sélectionner toutes les lignes", () => {
      const onCheckedRowsChange = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({ rows: mockRows, onCheckedRowsChange }),
      );

      act(() => {
        result.current.handleSelectAll(true);
      });

      expect(result.current.selectedRows).toEqual(mockRows);
      expect(result.current.isAllChecked).toBe(true);
      expect(onCheckedRowsChange).toHaveBeenCalledWith(mockRows);
      mockRows.forEach((row) => {
        expect(result.current.isRowSelected(row)).toBe(true);
      });
    });

    it("devrait désélectionner toutes les lignes", () => {
      const onCheckedRowsChange = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({ rows: mockRows, onCheckedRowsChange }),
      );

      // Sélection de toutes les lignes
      act(() => {
        result.current.handleSelectAll(true);
      });

      // Désélection de toutes les lignes
      act(() => {
        result.current.handleSelectAll(false);
      });

      expect(result.current.selectedRows).toEqual([]);
      expect(result.current.isAllChecked).toBe(false);
      expect(onCheckedRowsChange).toHaveBeenLastCalledWith([]);
      mockRows.forEach((row) => {
        expect(result.current.isRowSelected(row)).toBe(false);
      });
    });
  });

  describe("Tri", () => {
    it("devrait mettre à jour la configuration de tri", () => {
      const onSort = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({ rows: mockRows, onSort }),
      );

      act(() => {
        result.current.handleSort("age", "desc");
      });

      expect(result.current.sortConfig).toEqual({
        key: "age",
        direction: "desc",
      });
      expect(onSort).toHaveBeenCalledWith("age", "desc");
    });
  });

  describe("Cas particuliers", () => {
    it("devrait gérer une liste vide", () => {
      const { result } = renderHook(() => useDataGridState({ rows: [] }));

      expect(result.current.isAllChecked).toBe(false);

      act(() => {
        result.current.handleSelectAll(true);
      });

      expect(result.current.selectedRows).toEqual([]);
      expect(result.current.isAllChecked).toBe(false);
    });

    it("devrait gérer le changement dynamique des lignes", () => {
      const { result, rerender } = renderHook(
        ({ rows }) => useDataGridState({ rows }),
        { initialProps: { rows: mockRows } },
      );

      // Sélection de toutes les lignes
      act(() => {
        result.current.handleSelectAll(true);
      });

      expect(result.current.selectedRows).toHaveLength(3);

      // Mise à jour avec moins de lignes
      rerender({ rows: mockRows.slice(0, 2) });

      expect(result.current.isAllChecked).toBe(false);
    });
    it("devrait maintenir la sélection lors de réordonnements", () => {
      const { result, rerender } = renderHook(() =>
        useDataGridState({ rows: mockRows }),
      );

      // Sélection d'une ligne
      act(() => {
        result.current.handleCheckboxChange(mockRows[0]);
      });

      // Réordonner les lignes
      const reorderedRows = [...mockRows].reverse();
      rerender({ rows: reorderedRows });

      // La sélection doit être maintenue par l'ID
      expect(result.current.selectedRows).toEqual([mockRows[0]]);
      expect(result.current.isRowSelected(mockRows[0])).toBe(true);
    });
  });
});
