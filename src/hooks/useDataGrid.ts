import { useState, useEffect, useCallback } from "react";

export function useDataGridState<T extends { id: string | number }>(
  rows: T[],
  onCheckedRowsChange?: (rows: T[]) => void,
  onSort?: (column: keyof T, direction: "asc" | "desc") => void,
) {
  const [checkedRows, setCheckedRows] = useState<Set<T>>(new Set());
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

  const handleCheckboxChange = useCallback(
    (row: T) => {
      setCheckedRows((prev) => {
        const newCheckedRows = new Set(prev);
        const existingRow = Array.from(newCheckedRows).find(
          (r) => r.id === row.id,
        );

        if (existingRow) {
          newCheckedRows.delete(existingRow);
        } else {
          newCheckedRows.add(row);
        }
        onCheckedRowsChange?.(Array.from(newCheckedRows));

        return newCheckedRows;
      });
    },
    [onCheckedRowsChange],
  );

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setCheckedRows(new Set(rows));
        onCheckedRowsChange?.(rows);
      } else {
        setCheckedRows(new Set());
        onCheckedRowsChange?.([]);
      }
    },
    [rows, onCheckedRowsChange],
  );
  const handleSort = useCallback(
    (column: keyof T, direction: "asc" | "desc") => {
      setSortConfig((prev) => {
        const newDirection =
          prev.key === column && prev.direction === "asc" ? "desc" : "asc";

        onSort?.(column, direction);

        return { key: column, direction: newDirection };
      });
    },
    [onSort],
  );

  return {
    checkedRows,
    isAllChecked,
    sortConfig,
    handleCheckboxChange,
    handleSelectAll,
    handleSort,
  };
}
