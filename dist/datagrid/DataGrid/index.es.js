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
import { jsx, jsxs } from "react/jsx-runtime";
import { useDataGridState } from "../useDataGridState/index.es.js";
import { cn } from "../../utils/index.es.js";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { DataGridSkeleton } from "../DataGridSkeleton/index.es.js";
import { GRID_VARIANTS } from "../../data/default/index.es.js";
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
