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
  checkedRows: Set<T>;
  isAllChecked: boolean;
};

export type SelectionActions<T> = {
  handleSelectionChange: (row: T) => void;
  handleSelectAll: (checked: boolean) => void;
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
  const [checkedRows, setCheckedRows] = useState<Set<T>>(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    setIsAllChecked(checkedRows.size === rows.length);
  }, [checkedRows, rows]);

  const handleSelectionChange = (row: T): void => {
    setCheckedRows((prev) => {
      const newChecked = new Set(prev);
      const existing = Array.from(newChecked).find((r) => r.id === row.id);
      if (existing) {
        newChecked.delete(existing);
      } else {
        newChecked.add(row);
      }
      onSelectionChange?.(Array.from(newChecked));
      return newChecked;
    });
  };

  const handleSelectAll = (checked: boolean): void => {
    const newChecked = checked ? new Set(rows) : new Set<T>();
    setCheckedRows(newChecked);
    onSelectionChange?.(Array.from(newChecked));
  };

  return {
    isAllChecked,
    checkedRows,
    handleSelectionChange,
    handleSelectAll,
  };
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
