import { useEffect, useState } from "react";

// types.ts
type Id = string | number;
type Row = { id: Id };
type SortDirection = "asc" | "desc";

interface SortConfiguration<T> {
  key: keyof T | null;
  direction: SortDirection;
}

interface SelectionState<T> {
  selectedRows: Set<T>;
  allRowsSelected: boolean;
}

interface SelectionActions<T> {
  toggleRowSelection: (row: T) => void;
  toggleAllRowsSelection: (selectAll: boolean) => void;
}

interface SortingState<T> {
  sortConfiguration: SortConfiguration<T>;
  updateSort: (column: keyof T, direction: SortDirection) => void;
}

interface GridProps<T> {
  rows: T[];
  onSelectionChange?: (selectedRows: T[]) => void;
  onSortChange?: (column: keyof T, direction: SortDirection) => void;
}

type GridState<T> = SelectionState<T> & SelectionActions<T> & SortingState<T>;

// useSelectionState.ts
export const useSelectionState = <T extends Row>({
  rows,
  onSelectionChange,
}: Pick<GridProps<T>, "rows" | "onSelectionChange">): SelectionState<T> &
  SelectionActions<T> => {
  const [selectedRows, setSelectedRows] = useState<Set<T>>(new Set());
  const [allRowsSelected, setAllRowsSelected] = useState(false);

  useEffect(() => {
    setAllRowsSelected(selectedRows.size === rows.length);
  }, [selectedRows, rows]);

  const toggleRowSelection = (row: T): void => {
    setSelectedRows((previousSelection) => {
      const updatedSelection = new Set(previousSelection);
      if (updatedSelection.has(row)) {
        updatedSelection.delete(row);
      } else {
        updatedSelection.add(row);
      }
      onSelectionChange?.(Array.from(updatedSelection));
      return updatedSelection;
    });
  };

  const toggleAllRowsSelection = (selectAll: boolean): void => {
    const updatedSelection = selectAll ? new Set(rows) : new Set<T>();
    setSelectedRows(updatedSelection);
    onSelectionChange?.(Array.from(updatedSelection));
  };

  return {
    selectedRows,
    allRowsSelected,
    toggleRowSelection,
    toggleAllRowsSelection,
  };
};

// useSortingState.ts
export const useSortingState = <T extends Row>({
  onSortChange,
}: Pick<GridProps<T>, "onSortChange">): SortingState<T> => {
  const [sortConfiguration, setSortConfiguration] = useState<
    SortConfiguration<T>
  >({
    key: null,
    direction: "asc",
  });

  const updateSort = (column: keyof T, direction: SortDirection): void => {
    setSortConfiguration({ key: column, direction });
    onSortChange?.(column, direction);
  };

  return { sortConfiguration, updateSort };
};

// useGridState.ts
export const useDataGridState = <T extends Row>(
  props: GridProps<T>,
): GridState<T> => {
  return {
    ...useSelectionState(props),
    ...useSortingState(props),
  };
};
