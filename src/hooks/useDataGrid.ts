import { useEffect, useState } from "react";

type Id = string | number;

type DataRow = {
  id: Id;
};

export type SortConfig<T> = {
  key: keyof T | null;
  direction: "asc" | "desc";
};

type DataGridState<T> = {
  selectedRows: T[];
  isAllChecked: boolean;
  sortConfig: SortConfig<T>;
  handleSelectionChange: (row: T) => void;
  handleSelectAll: (checked: boolean) => void;
  handleSortChange: (column: keyof T, direction: "asc" | "desc") => void;
  isRowSelected: (row: T) => boolean;
};

type DataGridHookProps<T> = {
  rows: T[];
  onSelectionChange?: (rows: T[]) => void;
  onSortChange?: (column: keyof T, direction: "asc" | "desc") => void;
};

export const initialSortConfig = {
  key: null,
  direction: "asc",
} as const;

export const useDataGridState = <T extends DataRow>({
  rows,
  onSelectionChange,
  onSortChange,
}: DataGridHookProps<T>): DataGridState<T> => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [sortConfig, setSortConfig] =
    useState<SortConfig<T>>(initialSortConfig);

  useEffect(() => {
    setIsAllChecked(selectedRows.length === rows.length && rows.length > 0);
  }, [selectedRows, rows]);

  const handleSelectionChange = (row: T): void => {
    let newSelectedRows: T[];

    const isRowInSelection = selectedRows.some((r) => r.id === row.id);

    if (isRowInSelection) {
      newSelectedRows = selectedRows.filter((r) => r.id !== row.id);
    } else {
      newSelectedRows = [
        ...rows.filter((r) => selectedRows.some((sr) => sr.id === r.id)),
        row,
      ];
    }

    setSelectedRows(newSelectedRows);
    onSelectionChange?.(newSelectedRows);
  };

  const handleSelectAll = (checked: boolean): void => {
    const newSelectedRows = checked ? [...rows] : [];
    setSelectedRows(newSelectedRows);
    onSelectionChange?.(newSelectedRows);
  };

  const handleSortChange = (
    column: keyof T,
    direction: "asc" | "desc",
  ): void => {
    setSortConfig({ key: column, direction });
    onSortChange?.(column, direction);
  };

  const isRowSelected = (row: T): boolean => {
    return selectedRows.some((r) => r.id === row.id);
  };

  return {
    selectedRows,
    isAllChecked,
    sortConfig,
    handleSelectionChange,
    handleSelectAll,
    handleSortChange,
    isRowSelected,
  };
};
