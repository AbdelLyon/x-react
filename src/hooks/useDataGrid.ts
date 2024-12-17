import { useEffect, useState } from "react";

export const useDataGridState = <T extends { id: string | number }>(
  rows: T[],
  onCheckedRowsChange?: (rows: T[]) => void,
  onSort?: (column: keyof T, direction: "asc" | "desc") => void,
) => {
  const [checkedRowIds, setCheckedRowIds] = useState<(string | number)[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });

  useEffect(() => {
    setIsAllChecked(checkedRowIds.length === rows.length);
  }, [checkedRowIds, rows]);

  const handleCheckboxChange = (row: T) => {
    setCheckedRowIds((prev) => {
      const isChecked = prev.includes(row.id);
      const newCheckedIds = isChecked
        ? prev.filter((id) => id !== row.id)
        : [...prev, row.id];

      const selectedRows = rows.filter((r) => newCheckedIds.includes(r.id));
      onCheckedRowsChange?.(selectedRows);
      return newCheckedIds;
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = rows.map((row) => row.id);
      setCheckedRowIds(allIds);
      onCheckedRowsChange?.(rows);
    } else {
      setCheckedRowIds([]);
      onCheckedRowsChange?.([]);
    }
  };

  const handleSort = (column: keyof T, direction: "asc" | "desc") => {
    setSortConfig({ key: column, direction });
    onSort?.(column, direction);
  };

  const isRowChecked = (row: T): boolean => {
    return checkedRowIds.includes(row.id);
  };

  return {
    checkedRows: checkedRowIds,
    isAllChecked,
    sortConfig,
    handleCheckboxChange,
    handleSelectAll,
    handleSort,
    isRowChecked,
  };
};
