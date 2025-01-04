import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { useDataGridState } from "../useDataGridState/x-react.es.js";
import { cn } from "../../utils/x-react.es.js";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { DataGridSkeleton } from "../DataGridSkeleton/x-react.es.js";
import { GRID_VARIANTS } from "../../data/default/x-react.es.js";
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
  var _a, _b;
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DataGridSkeleton,
      {
        columns: columns.length,
        checkboxSelection: props.showSelectionCheckboxes,
        variant,
        rows: rows.length
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Table,
    {
      "aria-label": "data-grid",
      ...props,
      classNames: {
        ...props.classNames,
        th: cn(variantClasses.th, (_a = props.classNames) == null ? void 0 : _a.th),
        tr: cn(variantClasses.tr, (_b = props.classNames) == null ? void 0 : _b.tr)
      },
      onScroll: handleGridScroll,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableHeader,
          {
            columns: processedColumns,
            ...childrenProps == null ? void 0 : childrenProps.tableHeaderProps,
            children: (column) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableColumn,
              {
                "aria-label": extractColumnHeader(column),
                ...childrenProps == null ? void 0 : childrenProps.tableColumnProps,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  column.header,
                  column.sortable !== false && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: cn("relative size-4 cursor-pointer"),
                      onClick: () => onSort(column),
                      role: "button",
                      "aria-label": formatSortHeader(column.header),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          IconChevronUp,
                          {
                            size: 16,
                            className: cn(
                              "absolute -top-1",
                              sortConfig.field === column.key && sortConfig.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { items: rows, ...childrenProps == null ? void 0 : childrenProps.tableBodyProps, children: (row) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { ...childrenProps == null ? void 0 : childrenProps.tableRowProps, children: (columnKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { ...childrenProps == null ? void 0 : childrenProps.tableCellProps, children: extractCellValue(columnKey, row, columns) }) }, row.id);
        } })
      ]
    }
  );
}
export {
  DataGrid
};
//# sourceMappingURL=x-react.es.js.map
