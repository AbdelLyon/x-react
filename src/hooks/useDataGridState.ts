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
  handelSelectRow: (row: T) => void;
  isChecked: boolean;
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
  const [isChecked, setIsChecked] = useState(false);

  const [sortConfig, setSortConfig] =
    useState<SortConfig<T>>(initialSortConfig);

  useEffect(() => {
    const isAllChecked = selectedRows.length === rows.length && rows.length > 0;
    setIsAllChecked(isAllChecked);
  }, [selectedRows, rows]);

  const handleSelectionChange = (row: T): void => {
    setSelectedRows((prev) => {
      const isSelected = prev.some((r) => r.id === row.id);
      const newSelectedRows = isSelected
        ? prev.filter((r) => r.id !== row.id)
        : [...prev, row];

      onSelectionChange?.(newSelectedRows);
      return newSelectedRows;
    });
  };
  const handleSelectAll = (checked: boolean): void => {
    const newSelectedRows = checked ? [...rows] : [];
    setSelectedRows(newSelectedRows);
    setIsChecked(checked);
    onSelectionChange?.(newSelectedRows);
  };

  const handleSortChange = (
    column: keyof T,
    direction: "asc" | "desc",
  ): void => {
    setSortConfig({ key: column, direction });
    onSortChange?.(column, direction);
  };

  useEffect(() => {
    const isSelected = selectedRows.length > 0;
    setIsChecked(isSelected);
  }, [selectedRows]);

  const handelSelectRow = (row: T): void => {
    const isRowSelected = selectedRows.some((r) => r.id === row.id);
    setIsChecked(isRowSelected);
  };

  return {
    selectedRows,
    isAllChecked,
    sortConfig,
    handleSelectionChange,
    handleSelectAll,
    handleSortChange,
    handelSelectRow,
    isChecked,
  };
};
