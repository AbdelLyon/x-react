import { useEffect, useState } from "react";

// types/grid.ts
export type Id = string | number;
export type DataRow = { id: Id };
export type SortDirection = "asc" | "desc";

export type SortConfig<T> = {
  key: keyof T | null;
  direction: SortDirection;
};

export type SelectionState<T> = {
  selectedRows: T[];
  isAllChecked: boolean;
};

export type SelectionActions<T> = {
  handleSelectionChange: (row: T) => void;
  handleSelectAll: (checked: boolean) => void;
  isChecked: (row: T) => boolean;
};

export type SortState<T> = {
  sortConfig: SortConfig<T>;
};

export type SortActions<T> = {
  handleSortChange: (column: keyof T, direction: SortDirection) => void;
};

export type DataGridHookProps<T> = {
  rows: T[];
  onSelectionChange?: (rows: T[]) => void;
  onSortChange?: (column: keyof T, direction: SortDirection) => void;
};

export type DataGridState<T> = SelectionState<T> &
  SelectionActions<T> &
  SortState<T> &
  SortActions<T>;

// hooks/useSelection.ts
export const useSelection = <T extends DataRow>({
  rows,
  onSelectionChange,
}: Pick<
  DataGridHookProps<T>,
  "rows" | "onSelectionChange"
>): SelectionState<T> & SelectionActions<T> => {
  const [state, setState] = useState<SelectionState<T>>({
    selectedRows: [],
    isAllChecked: false,
  });

  useEffect(() => {
    const allChecked =
      state.selectedRows.length === rows.length && rows.length > 0;
    setState((prev) => ({
      ...prev,
      isAllChecked: allChecked,
      isChecked: allChecked,
    }));
  }, [state.selectedRows, rows]);

  const handleSelectionChange = (row: T): void => {
    setState((prev) => {
      const newSelectedRows = prev.selectedRows.some((r) => r.id === row.id)
        ? prev.selectedRows.filter((r) => r.id !== row.id)
        : [...prev.selectedRows, row];
      onSelectionChange?.(newSelectedRows);
      return { ...prev, selectedRows: newSelectedRows };
    });
  };

  const handleSelectAll = (checked: boolean): void => {
    const newSelectedRows = checked ? [...rows] : [];
    setState((prev) => ({
      ...prev,
      selectedRows: newSelectedRows,
      isChecked: checked,
    }));
    onSelectionChange?.(newSelectedRows);
  };

  const isChecked = (row: T): boolean =>
    state.selectedRows.some((r) => r.id === row.id);

  return { ...state, handleSelectionChange, handleSelectAll, isChecked };
};

// hooks/useSort.ts
export const initialSortConfig = { key: null, direction: "asc" as const };

export const useSort = <T extends DataRow>({
  onSortChange,
}: Pick<DataGridHookProps<T>, "onSortChange">): SortState<T> &
  SortActions<T> => {
  const [sortConfig, setSortConfig] =
    useState<SortConfig<T>>(initialSortConfig);

  const handleSortChange = (
    column: keyof T,
    direction: SortDirection,
  ): void => {
    setSortConfig({ key: column, direction });
    onSortChange?.(column, direction);
  };

  return { sortConfig, handleSortChange };
};

// hooks/useDataGridState.ts
export const useDataGridState = <T extends DataRow>({
  rows,
  onSelectionChange,
  onSortChange,
}: DataGridHookProps<T>): DataGridState<T> => ({
  ...useSelection({ rows, onSelectionChange }),
  ...useSort({ onSortChange }),
});
