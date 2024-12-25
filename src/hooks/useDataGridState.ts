import { useEffect, useState } from "react";

// types/grid.ts
export type Id = string | number;
export type DataRow = { id: Id };
export type SortDirection = "asc" | "desc";

export type SortConfig<T> = {
  key: keyof T | null;
  direction: SortDirection;
};

export type SelectionState = {
  isAllChecked: boolean;
};

export type SelectionActions<T> = {
  handleSelectionChange: (row: T, checked: boolean) => void;
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
  selectedRows?: T[];
};

export type DataGridState<T> = SelectionState &
  SelectionActions<T> &
  SortState<T> &
  SortActions<T>;

// hooks/useSelection.ts
export const useSelection = <T extends DataRow>({
  rows,
  onSelectionChange,
  selectedRows = [],
}: Pick<DataGridHookProps<T>, "rows" | "onSelectionChange"> & {
  selectedRows?: T[];
}): SelectionState & SelectionActions<T> => {
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    setIsAllChecked(selectedRows.length === rows.length);
  }, [selectedRows, rows]);

  const handleSelectionChange = (row: T, checked: boolean): void => {
    if (checked) {
      onSelectionChange?.([...selectedRows, row]);
    } else {
      onSelectionChange?.(selectedRows.filter((r) => r.id !== row.id));
    }
  };

  const handleSelectAll = (checked: boolean): void => {
    const newChecked = checked ? rows : [];
    onSelectionChange?.(newChecked);
  };

  return {
    isAllChecked,
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
