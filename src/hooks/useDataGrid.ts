import { useEffect, useState } from "react";

export const useDataGridState = <T extends { id: string | number }>(
  rows: T[],
  onCheckedRowsChange?: (rows: T[]) => void,
  onSort?: (column: keyof T, direction: "asc" | "desc") => void,
) => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });

  useEffect(() => {
    setIsAllChecked(selectedRows.length === rows.length && rows.length > 0);
  }, [selectedRows, rows]);

  const handleCheckboxChange = (row: T) => {
    setSelectedRows((prev) => {
      const isSelected = prev.some((r) => r.id === row.id);
      const newSelectedRows = isSelected
        ? prev.filter((r) => r.id !== row.id)
        : [...prev, row];

      onCheckedRowsChange?.(newSelectedRows);
      return newSelectedRows;
    });
  };

  const handleSelectAll = (checked: boolean) => {
    const newSelectedRows = checked ? [...rows] : [];
    setSelectedRows(newSelectedRows);
    onCheckedRowsChange?.(newSelectedRows);
  };

  const handleSort = (column: keyof T, direction: "asc" | "desc") => {
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
