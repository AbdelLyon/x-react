var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import "../image/image.es.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { cn } from "../utils/utils.es.js";
import { Table, TableHeader, TableColumn, Skeleton, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
const useDataGridState = ({
  columns,
  onSortChange,
  onGridScrollEnd
}) => {
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: "asc"
  });
  const processedColumns = columns.map((column, index) => __spreadProps(__spreadValues({}, column), {
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
    const columnField = matchedColumn == null ? void 0 : matchedColumn.field;
    if (columnField !== void 0 && columnField !== "actions") {
      setSortConfig({
        field: columnField,
        direction: sortConfig.direction === "asc" ? "desc" : "asc"
      });
      onSortChange == null ? void 0 : onSortChange(
        columnField,
        sortConfig.direction === "asc" ? "desc" : "asc"
      );
    }
  };
  const handleGridScroll = (e) => {
    const element = e.currentTarget;
    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
      onGridScrollEnd == null ? void 0 : onGridScrollEnd();
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
const GRID_VARIANTS = {
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
const DataGridSkeleton = ({
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
function DataGrid(_a) {
  var _b = _a, {
    rows,
    columns,
    onSortChange,
    variant = "unstyled",
    isLoading = false,
    onGridScrollEnd,
    childrenProps
  } = _b, props = __objRest(_b, [
    "rows",
    "columns",
    "onSortChange",
    "variant",
    "isLoading",
    "onGridScrollEnd",
    "childrenProps"
  ]);
  var _a2, _b2;
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
    __spreadProps(__spreadValues({
      "aria-label": "data-grid"
    }, props), {
      classNames: __spreadProps(__spreadValues({}, props.classNames), {
        th: cn(variantClasses.th, (_a2 = props.classNames) == null ? void 0 : _a2.th),
        tr: cn(variantClasses.tr, (_b2 = props.classNames) == null ? void 0 : _b2.tr)
      }),
      onScroll: handleGridScroll,
      children: [
        /* @__PURE__ */ jsx(
          TableHeader,
          __spreadProps(__spreadValues({
            columns: processedColumns
          }, childrenProps == null ? void 0 : childrenProps.tableHeaderProps), {
            children: (column) => /* @__PURE__ */ jsx(
              TableColumn,
              __spreadProps(__spreadValues({
                "aria-label": extractColumnHeader(column)
              }, childrenProps == null ? void 0 : childrenProps.tableColumnProps), {
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
              }),
              column.key
            )
          })
        ),
        /* @__PURE__ */ jsx(TableBody, __spreadProps(__spreadValues({ items: rows }, childrenProps == null ? void 0 : childrenProps.tableBodyProps), { children: (row) => {
          return /* @__PURE__ */ jsx(TableRow, __spreadProps(__spreadValues({}, childrenProps == null ? void 0 : childrenProps.tableRowProps), { children: (columnKey) => /* @__PURE__ */ jsx(TableCell, __spreadProps(__spreadValues({}, childrenProps == null ? void 0 : childrenProps.tableCellProps), { children: extractCellValue(columnKey, row, columns) })) }), row.id);
        } }))
      ]
    })
  );
}
export {
  DataGrid
};
//# sourceMappingURL=datagrid.es.js.map
