import { useDataGridState } from "@/datagrid/useDataGridState";
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { ColumnDefinition } from "@/types/datagrid";

type MockRow = {
  id: string | number;
  name?: string;
  actions?: string;
};

describe("useDataGridState", () => {
  const mockColumns: ColumnDefinition<MockRow>[] = [
    {
      field: "id",
      header: "ID",
      cell: (row) => String(row.id),
    },
    {
      field: "name",
      header: "Name",
      sortable: true,
      cell: (row) => row.name ?? "",
    },
  ];

  describe("Initialisation", () => {
    it("devrait initialiser l'état correctement", () => {
      const { result } = renderHook(() =>
        useDataGridState({
          columns: mockColumns,
          onSortChange: vi.fn(),
        }),
      );

      expect(result.current.sortConfig).toEqual({
        field: null,
        direction: "asc",
      });
      expect(result.current.processedColumns).toHaveLength(2);
    });

    it("devrait traiter les colonnes correctement", () => {
      const { result } = renderHook(() =>
        useDataGridState({
          columns: mockColumns,
        }),
      );

      expect(result.current.processedColumns[0]).toMatchObject({
        key: "id",
        header: "ID",
        field: "id",
      });
    });
  });

  describe("Tri des colonnes", () => {
    it("devrait gérer le cycle de tri", () => {
      const onSortChange = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({
          columns: mockColumns,
          onSortChange,
        }),
      );

      // Premier tri
      act(() => {
        result.current.onSort(result.current.processedColumns[1]);
      });

      expect(result.current.sortConfig).toEqual({
        field: "name",
        direction: "desc",
      });
      expect(onSortChange).toHaveBeenCalledWith("name", "desc");

      // Deuxième tri
      act(() => {
        result.current.onSort(result.current.processedColumns[1]);
      });

      expect(result.current.sortConfig).toEqual({
        field: "name",
        direction: "asc",
      });
      expect(onSortChange).toHaveBeenCalledWith("name", "asc");
    });

    it("ne devrait pas trier les colonnes de type 'actions'", () => {
      const onSortChange = vi.fn();
      const columnsWithActions: ColumnDefinition<MockRow>[] = [
        {
          field: "actions",
          header: "Actions",
          cell: () => null,
        },
      ];

      const { result } = renderHook(() =>
        useDataGridState({
          columns: columnsWithActions,
          onSortChange,
        }),
      );

      act(() => {
        result.current.onSort(result.current.processedColumns[0]);
      });

      expect(onSortChange).not.toHaveBeenCalled();
      expect(result.current.sortConfig.field).toBeNull();
    });
  });

  describe("Gestion du scroll", () => {
    it("devrait déclencher onGridScrollEnd au scroll final", () => {
      const onGridScrollEnd = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({
          columns: mockColumns,
          onGridScrollEnd,
        }),
      );

      const mockEvent = {
        currentTarget: {
          scrollTop: 100,
          clientHeight: 100,
          scrollHeight: 200,
        },
      } as unknown as React.UIEvent<HTMLDivElement>;

      act(() => {
        result.current.handleGridScroll(mockEvent);
      });

      expect(onGridScrollEnd).toHaveBeenCalled();
    });

    it("ne devrait pas déclencher onGridScrollEnd si le scroll n'est pas à la fin", () => {
      const onGridScrollEnd = vi.fn();
      const { result } = renderHook(() =>
        useDataGridState({
          columns: mockColumns,
          onGridScrollEnd,
        }),
      );

      const mockEvent = {
        currentTarget: {
          scrollTop: 50,
          clientHeight: 100,
          scrollHeight: 200,
        },
      } as unknown as React.UIEvent<HTMLDivElement>;

      act(() => {
        result.current.handleGridScroll(mockEvent);
      });

      expect(onGridScrollEnd).not.toHaveBeenCalled();
    });
  });

  describe("Gestion des cellules", () => {
    it("devrait extraire correctement les valeurs des cellules", () => {
      const { result } = renderHook(() =>
        useDataGridState({
          columns: mockColumns,
        }),
      );

      const mockRow: MockRow = { id: "1", name: "Test" };

      expect(result.current.extractCellValue("id", mockRow, mockColumns)).toBe(
        "1",
      );
      expect(
        result.current.extractCellValue("name", mockRow, mockColumns),
      ).toBe("Test");
    });

    it("devrait gérer les cellules personnalisées", () => {
      const customColumns: ColumnDefinition<MockRow>[] = [
        {
          field: "id",
          header: "ID",
          cell: (row) => `Custom ${row.id}`,
        },
      ];

      const { result } = renderHook(() =>
        useDataGridState({
          columns: customColumns,
        }),
      );

      const mockRow: MockRow = { id: "1" };
      expect(
        result.current.extractCellValue("id", mockRow, customColumns),
      ).toBe("Custom 1");
    });

    it("devrait retourner null pour une colonne inexistante", () => {
      const { result } = renderHook(() =>
        useDataGridState({
          columns: mockColumns,
        }),
      );

      const mockRow: MockRow = { id: "1" };
      expect(
        result.current.extractCellValue("invalid", mockRow, mockColumns),
      ).toBeNull();
    });
  });

  describe("Gestion des en-têtes", () => {
    it("devrait générer les en-têtes appropriés", () => {
      const { result } = renderHook(() =>
        useDataGridState({
          columns: mockColumns,
        }),
      );

      const column = result.current.processedColumns[1];
      expect(result.current.extractColumnHeader(column)).toBe("Name");
      expect(result.current.formatSortHeader("Name")).toBe("Sort by Name");
      expect(result.current.formatSortHeader("")).toBe("Sort column");
    });

    it("devrait utiliser des valeurs par défaut pour les en-têtes vides", () => {
      const { result } = renderHook(() =>
        useDataGridState({
          columns: [{ ...mockColumns[0], header: "" }],
        }),
      );

      const column = result.current.processedColumns[0];
      expect(result.current.extractColumnHeader(column)).toBe("id");
    });
  });
});
