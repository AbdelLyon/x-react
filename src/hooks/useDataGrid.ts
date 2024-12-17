import { useEffect, useState } from "react";

export const useDataGridState = <T extends { id: string | number }>(
  rows: T[],
  onCheckedRowsChange?: (rows: T[]) => void,
  onSort?: (column: keyof T, direction: "asc" | "desc") => void,
) => {
  const [checkedRows, setCheckedRows] = useState<Set<string | number>>(
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
    setIsAllChecked(checkedRows.size === rows.length);
  }, [checkedRows, rows]);

  const handleCheckboxChange = (row: T) => {
    setCheckedRows((prev) => {
      const newCheckedRows = new Set(prev);
      if (newCheckedRows.has(row.id)) {
        newCheckedRows.delete(row.id);
      } else {
        newCheckedRows.add(row.id);
      }

      const selectedRows = rows.filter((r) => newCheckedRows.has(r.id));
      onCheckedRowsChange?.(selectedRows);
      return newCheckedRows;
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(rows.map((row) => row.id));
      setCheckedRows(allIds);
      onCheckedRowsChange?.(rows);
    } else {
      setCheckedRows(new Set());
      onCheckedRowsChange?.([]);
    }
  };

  const handleSort = (column: keyof T, direction: "asc" | "desc") => {
    setSortConfig({ key: column, direction });
    onSort?.(column, direction);
  };

  console.log(checkedRows);
  const isRowChecked = (row: T): boolean => {
    return checkedRows.has(row.id);
  };

  return {
    checkedRows,
    isAllChecked,
    sortConfig,
    handleCheckboxChange,
    handleSelectAll,
    handleSort,
    isRowChecked,
  };
};
