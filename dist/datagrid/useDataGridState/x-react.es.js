import { useState } from "react";
const useDataGridState = ({
  columns,
  onSortChange,
  onGridScrollEnd
}) => {
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: "asc"
  });
  const processedColumns = columns.map((column, index) => ({
    ...column,
    key: typeof column.field === "string" ? String(column.field) : String(index),
    header: column.header
  }));
  const extractColumnHeader = (column) => {
    return typeof column.header === "string" && column.header.length > 0 ? column.header : typeof column.key === "string" && column.key.length > 0 ? column.key : "Column";
  };
  const formatSortHeader = (header) => {
    return typeof header === "string" && header.length > 0 ? `Sort by ${header}` : "Sort column";
  };
  const extractCellValue = (columnKey, row, columns2) => {
    const column = columns2.find(
      (c) => typeof c.field === "string" && String(c.field) === String(columnKey)
    );
    if (column === void 0) {
      return null;
    }
    if (column.cell !== void 0) {
      return column.cell(row);
    }
    if (typeof column.field === "string" && column.field.length > 0 && column.field in row) {
      const value = row[column.field];
      return typeof value === "string" || typeof value === "number" ? String(value) : null;
    }
    return null;
  };
  const onSort = (column) => {
    const matchedColumn = columns.find(
      (c) => typeof c.field === "string" && c.field.length > 0 && String(c.field) === column.key
    );
    const columnField = matchedColumn?.field;
    if (columnField !== void 0 && columnField !== "actions") {
      setSortConfig({
        field: columnField,
        direction: sortConfig.direction === "asc" ? "desc" : "asc"
      });
      onSortChange?.(
        columnField,
        sortConfig.direction === "asc" ? "desc" : "asc"
      );
    }
  };
  const handleGridScroll = (e) => {
    const element = e.currentTarget;
    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
      onGridScrollEnd?.();
    }
  };
  return {
    sortConfig,
    onSort,
    extractCellValue,
    extractColumnHeader,
    formatSortHeader,
    processedColumns,
    handleGridScroll
  };
};
export {
  useDataGridState
};
