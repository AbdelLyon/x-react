import { useDataGridState } from "@/hooks/useDataGrid";
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

interface Row {
  id: number;
  name: string;
  age: number;
}

describe("useDataGridState", () => {
  const rows: Row[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  describe("État initial", () => {
    it("devrait initialiser avec les valeurs par défaut", () => {
      const { result } = renderHook(() => useDataGridState({ rows }));

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
      const onSelectionChange = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({ rows, onSelectionChange }),
      );

      act(() => {
        result.current.handleSelectionChange(rows[0]);
      });

      expect(result.current.selectedRows).toEqual([rows[0]]);
      expect(result.current.isAllChecked).toBe(false);
      expect(onSelectionChange).toHaveBeenCalledWith([rows[0]]);
      expect(result.current.handelSelectRow(rows[0])).toBe(true);
    });

    it("devrait désélectionner une ligne", () => {
      const onSelectionChange = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({ rows, onSelectionChange }),
      );

      // Sélection
      act(() => {
        result.current.handleSelectionChange(rows[0]);
      });

      // Désélection
      act(() => {
        result.current.handleSelectionChange(rows[0]);
      });

      expect(result.current.selectedRows).toEqual([]);
      expect(result.current.isAllChecked).toBe(false);
      expect(onSelectionChange).toHaveBeenLastCalledWith([]);
      expect(result.current.handelSelectRow(rows[0])).toBe(false);
    });

    it("devrait sélectionner toutes les lignes", () => {
      const onSelectionChange = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({ rows, onSelectionChange }),
      );

      act(() => {
        result.current.handleSelectAll(true);
      });

      expect(result.current.selectedRows).toEqual(rows);
      expect(result.current.isAllChecked).toBe(true);
      expect(onSelectionChange).toHaveBeenCalledWith(rows);
      rows.forEach((row) => {
        expect(result.current.handelSelectRow(row)).toBe(true);
      });
    });

    it("devrait désélectionner toutes les lignes", () => {
      const onSelectionChange = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({ rows, onSelectionChange }),
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
      expect(onSelectionChange).toHaveBeenLastCalledWith([]);
      rows.forEach((row) => {
        expect(result.current.handelSelectRow(row)).toBe(false);
      });
    });
  });

  describe("Tri", () => {
    it("devrait mettre à jour la configuration de tri", () => {
      const onSortChange = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({ rows, onSortChange }),
      );

      act(() => {
        result.current.handleSortChange("age", "desc");
      });

      expect(result.current.sortConfig).toEqual({
        key: "age",
        direction: "desc",
      });
      expect(onSortChange).toHaveBeenCalledWith("age", "desc");
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
        { initialProps: { rows } },
      );

      // Sélection de toutes les lignes
      act(() => {
        result.current.handleSelectAll(true);
      });

      expect(result.current.selectedRows).toHaveLength(3);

      // Mise à jour avec moins de lignes
      rerender({ rows: rows.slice(0, 2) });

      expect(result.current.isAllChecked).toBe(false);
    });
    it("devrait maintenir la sélection lors de réordonnements", () => {
      const { result, rerender } = renderHook(() => useDataGridState({ rows }));

      // Sélection d'une ligne
      act(() => {
        result.current.handleSelectionChange(rows[0]);
      });

      // Réordonner les lignes
      const reorderedRows = [...rows].reverse();
      rerender({ rows: reorderedRows });

      // La sélection doit être maintenue par l'ID
      expect(result.current.selectedRows).toEqual([rows[0]]);
      expect(result.current.handelSelectRow(rows[0])).toBe(true);
    });
  });
});
