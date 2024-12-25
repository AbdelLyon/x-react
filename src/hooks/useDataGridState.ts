import { useEffect, useState } from "react";

// types.ts
type Id = string | number;
type Row = { id: Id };
type SortDirection = "asc" | "desc";

interface SortConfig<T> {
  key: keyof T | null;
  direction: SortDirection;
}

interface SelectionState<T> {
  selectedRows: Set<T>;
  isAllSelected: boolean;
}

interface SelectionActions<T> {
  handleRowSelect: (row: T) => void;
  handleSelectAll: (checked: boolean) => void;
}

interface SortState<T> {
  sortConfig: SortConfig<T>;
  handleSort: (column: keyof T, direction: SortDirection) => void;
}

interface GridProps<T> {
  rows: T[];
  onSelectionChange?: (rows: T[]) => void;
  onSortChange?: (column: keyof T, direction: SortDirection) => void;
}

type GridState<T> = SelectionState<T> & SelectionActions<T> & SortState<T>;

export const useSelection = <T extends Row>({
  rows,
  onSelectionChange,
}: Pick<GridProps<T>, "rows" | "onSelectionChange">): SelectionState<T> &
  SelectionActions<T> => {
  const [selectedRows, setSelectedRows] = useState<Set<T>>(new Set());
  const [isAllSelected, setIsAllSelected] = useState(false);

  useEffect(() => {
    setIsAllSelected(selectedRows.size === rows.length);
  }, [selectedRows, rows]);

  const handleRowSelect = (row: T): void => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(row)) {
        next.delete(row);
      } else {
        next.add(row);
      }
      onSelectionChange?.(Array.from(next));
      return next;
    });
  };

  const handleSelectAll = (checked: boolean): void => {
    const next = checked ? new Set(rows) : new Set<T>();
    setSelectedRows(next);
    onSelectionChange?.(Array.from(next));
  };

  return {
    selectedRows,
    isAllSelected,
    handleRowSelect,
    handleSelectAll,
  };
};

// useSort.ts
export const useSort = <T extends Row>({
  onSortChange,
}: Pick<GridProps<T>, "onSortChange">): SortState<T> => {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({
    key: null,
    direction: "asc",
  });

  const handleSort = (column: keyof T, direction: SortDirection): void => {
    setSortConfig({ key: column, direction });
    onSortChange?.(column, direction);
  };

  return { sortConfig, handleSort };
};

// useGridState.ts
export const useGridState = <T extends Row>(
  props: GridProps<T>,
): GridState<T> => {
  return {
    ...useSelection(props),
    ...useSort(props),
  };
};
