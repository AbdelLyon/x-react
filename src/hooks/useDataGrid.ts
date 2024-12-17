// useDataGridState.ts
import { useState, useEffect } from "react";

export function useDataGridState<T extends { id: string | number }>(
  rows: T[],
  onCheckedRowsChange?: (rows: T[]) => void,
  onSort?: (column: keyof T, direction: "asc" | "desc") => void,
) {
  const [checkedRowIds, setCheckedRowIds] = useState<Set<string | number>>(
    new Set(),
  );
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });

  useEffect(() => {
    setIsAllChecked(checkedRowIds.size === rows.length);
  }, [checkedRowIds, rows]);

  function handleCheckboxChange(row: T) {
    setCheckedRowIds((prev) => {
      const newCheckedRowIds = new Set(prev);
      if (newCheckedRowIds.has(row.id)) {
        newCheckedRowIds.delete(row.id);
      } else {
        newCheckedRowIds.add(row.id);
      }

      const selectedRows = rows.filter((r) => newCheckedRowIds.has(r.id));
      onCheckedRowsChange?.(selectedRows);
      return newCheckedRowIds;
    });
  }

  function handleSelectAll(checked: boolean) {
    if (checked) {
      const allIds = new Set(rows.map((row) => row.id));
      setCheckedRowIds(allIds);
      onCheckedRowsChange?.(rows);
    } else {
      setCheckedRowIds(new Set());
      onCheckedRowsChange?.([]);
    }
  }

  function handleSort(column: keyof T, direction: "asc" | "desc") {
    setSortConfig({ key: column, direction });
    onSort?.(column, direction);
  }

  function isRowChecked(row: T) {
    console.log({ row, checkedRowIds });

    return checkedRowIds.has(row.id);
  }

  return {
    checkedRows: checkedRowIds,
    isAllChecked,
    sortConfig,
    handleCheckboxChange,
    handleSelectAll,
    handleSort,
    isRowChecked,
  };
}
