import { useEffect, useState } from "react";

type Id = string | number;

interface DataRow {
  id: Id;
}

interface SortConfig<T> {
  key: keyof T | null;
  direction: "asc" | "desc";
}

interface DataGridState<T> {
  selectedRows: T[];
  isAllChecked: boolean;
  sortConfig: SortConfig<T>;
  handleCheckboxChange: (row: T) => void;
  handleSelectAll: (checked: boolean) => void;
  handleSort: (column: keyof T, direction: "asc" | "desc") => void;
  isRowSelected: (row: T) => boolean;
}

interface DataGridHookProps<T> {
  rows: T[];
  onCheckedRowsChange?: (rows: T[]) => void;
  onSort?: (column: keyof T, direction: "asc" | "desc") => void;
}

const initialSortConfig = {
  key: null,
  direction: "asc",
} as const;

export const useDataGridState = <T extends DataRow>({
  rows,
  onCheckedRowsChange,
  onSort,
}: DataGridHookProps<T>): DataGridState<T> => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [sortConfig, setSortConfig] =
    useState<SortConfig<T>>(initialSortConfig);

  useEffect(() => {
    setIsAllChecked(selectedRows.length === rows.length && rows.length > 0);
  }, [selectedRows, rows]);

  const handleCheckboxChange = (row: T): void => {
    const isSelected = selectedRows.some((r) => r.id === row.id);
    const newSelectedRows = isSelected
      ? selectedRows.filter((r) => r.id !== row.id)
      : [...selectedRows, row];

    setSelectedRows(newSelectedRows);
    onCheckedRowsChange?.(newSelectedRows);
  };

  const handleSelectAll = (checked: boolean): void => {
    const newSelectedRows = checked ? [...rows] : [];
    setSelectedRows(newSelectedRows);
    onCheckedRowsChange?.(newSelectedRows);
  };

  const handleSort = (column: keyof T, direction: "asc" | "desc"): void => {
    setSortConfig({ key: column, direction });
    onSort?.(column, direction);
  };

  const isRowSelected = (row: T): boolean => {
    return selectedRows.some((r) => r.id === row.id);
  };

  return {
    selectedRows,
    isAllChecked,
    sortConfig,
    handleCheckboxChange,
    handleSelectAll,
    handleSort,
    isRowSelected,
  };
};
