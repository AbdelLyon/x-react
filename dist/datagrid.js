import { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Skeleton } from '@nextui-org/react';
import { IconChevronUp, IconChevronDown } from '@tabler/icons-react';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/datagrid/useDataGridState.ts
var useDataGridState = ({
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
var cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

// src/data/default.ts
var GRID_VARIANTS = {
  bordered: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4 h-12",
    tr: "py-4 border-b border-default last:border-b-0 hover:bg-content2 h-12"
  },
  striped: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4 h-12",
    tr: "py-4 even:bg-content2 h-12"
  },
  unstyled: {
    thead: "bg-content2",
    th: "py4 bg-content2 py-4 h-12",
    tr: "py-4 hover:bg-content2 h-12"
  }
};
var DataGridSkeleton = ({
  columns = 5,
  rows = 5,
  checkboxSelection = true,
  variant = "unstyled",
  className
}) => {
  const variantClasses = GRID_VARIANTS[variant];
  const actualColumns = checkboxSelection ? columns + 1 : columns;
  return /* @__PURE__ */ jsxs(Table, { radius: "sm", "aria-label": "Loading data", className, children: [
    /* @__PURE__ */ jsx(TableHeader, { className: cn(variantClasses.thead), children: Array(actualColumns).fill(null).map((_, index) => /* @__PURE__ */ jsx(TableColumn, { className: cn(variantClasses.th), children: index === 0 && checkboxSelection ? /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md" }) : /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24 rounded-md" }) }, index)) }),
    /* @__PURE__ */ jsx(TableBody, { children: Array(rows).fill(null).map((_, rowIndex) => /* @__PURE__ */ jsx(TableRow, { className: cn(variantClasses.tr), children: Array(actualColumns).fill(null).map((_2, colIndex) => /* @__PURE__ */ jsx(TableCell, { children: colIndex === 0 && checkboxSelection ? /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md" }) : /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, colIndex)) }, rowIndex)) })
  ] });
};
function DataGrid({
  rows,
  columns,
  onSortChange,
  variant = "unstyled",
  isLoading = false,
  onGridScrollEnd,
  childrenProps,
  ...props
}) {
  const {
    sortConfig,
    processedColumns,
    formatSortHeader,
    extractCellValue,
    extractColumnHeader,
    onSort,
    handleGridScroll
  } = useDataGridState({
    onSortChange,
    columns,
    onGridScrollEnd
  });
  const variantClasses = GRID_VARIANTS[variant];
  if (isLoading) {
    return /* @__PURE__ */ jsx(
      DataGridSkeleton,
      {
        columns: columns.length,
        checkboxSelection: props.showSelectionCheckboxes,
        variant,
        rows: rows.length
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    Table,
    {
      "aria-label": "data-grid",
      ...props,
      classNames: {
        ...props.classNames,
        th: cn(variantClasses.th, props.classNames?.th),
        tr: cn(variantClasses.tr, props.classNames?.tr)
      },
      onScroll: handleGridScroll,
      children: [
        /* @__PURE__ */ jsx(
          TableHeader,
          {
            columns: processedColumns,
            ...childrenProps?.tableHeaderProps,
            children: (column) => /* @__PURE__ */ jsx(
              TableColumn,
              {
                "aria-label": extractColumnHeader(column),
                ...childrenProps?.tableColumnProps,
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  column.header,
                  column.sortable !== false && /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: cn("relative size-4 cursor-pointer"),
                      onClick: () => onSort(column),
                      role: "button",
                      "aria-label": formatSortHeader(column.header),
                      children: [
                        /* @__PURE__ */ jsx(
                          IconChevronUp,
                          {
                            size: 16,
                            className: cn(
                              "absolute -top-1",
                              sortConfig.field === column.key && sortConfig.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          IconChevronDown,
                          {
                            size: 16,
                            className: cn(
                              "absolute top-1",
                              sortConfig.field === column.key && sortConfig.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              column.key
            )
          }
        ),
        /* @__PURE__ */ jsx(TableBody, { items: rows, ...childrenProps?.tableBodyProps, children: (row) => {
          return /* @__PURE__ */ jsx(TableRow, { ...childrenProps?.tableRowProps, children: (columnKey) => /* @__PURE__ */ jsx(TableCell, { ...childrenProps?.tableCellProps, children: extractCellValue(columnKey, row, columns) }) }, row.id);
        } })
      ]
    }
  );
}

export { DataGrid };
//# sourceMappingURL=datagrid.js.map
//# sourceMappingURL=datagrid.js.map