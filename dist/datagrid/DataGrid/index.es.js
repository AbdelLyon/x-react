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
import { mergeTailwindClasses } from "../../utils/index.es.js";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner } from "@heroui/react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { DataGridSkeleton } from "../DataGridSkeleton/index.es.js";
import { GRID_VARIANTS } from "../variants/index.es.js";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll/index.es.js";
function DataGrid(_a) {
  var _b = _a, {
    rows,
    columns,
    onSortChange,
    variant = "unstyled",
    isLoading = false,
    isFetching = false,
    hasMoreData = true,
    fetchNextPage,
    childrenProps,
    skeletonRowsCount
  } = _b, props = __objRest(_b, [
    "rows",
    "columns",
    "onSortChange",
    "variant",
    "isLoading",
    "isFetching",
    "hasMoreData",
    "fetchNextPage",
    "childrenProps",
    "skeletonRowsCount"
  ]);
  var _a2, _b2, _c, _d, _e, _f, _g;
  const {
    sortConfig,
    processedColumns,
    formatSortHeader,
    extractCellValue,
    extractColumnHeader,
    onSort
  } = useDataGridState({
    onSortChange,
    columns
  });
  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore: hasMoreData,
    onLoadMore: () => {
      fetchNextPage == null ? void 0 : fetchNextPage();
    }
  });
  const variantClasses = GRID_VARIANTS[variant];
  if (isLoading) {
    return /* @__PURE__ */ jsx(
      DataGridSkeleton,
      {
        columns: columns.length,
        checkboxSelection: props.showSelectionCheckboxes,
        variant,
        rows: skeletonRowsCount != null ? skeletonRowsCount : 10,
        className: (_a2 = props.classNames) == null ? void 0 : _a2.base
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    Table,
    __spreadProps(__spreadValues({}, props), {
      "aria-label": "data-grid",
      "aria-labelledby": "data-grid",
      className: mergeTailwindClasses(
        "overflow-hidden rounded-md border border-border p-3 dark:bg-background",
        "pr-1.5",
        props.className
      ),
      shadow: (_b2 = props.shadow) != null ? _b2 : "none",
      radius: (_c = props.radius) != null ? _c : "none",
      baseRef: scrollerRef,
      classNames: {
        wrapper: mergeTailwindClasses(
          "bg-white border-none p-0 dark:bg-background",
          "pr-1.5 ",
          (_d = props.classNames) == null ? void 0 : _d.wrapper
        ),
        th: mergeTailwindClasses(variantClasses.th, (_e = props.classNames) == null ? void 0 : _e.th),
        tr: mergeTailwindClasses(variantClasses.tr, (_f = props.classNames) == null ? void 0 : _f.tr),
        base: mergeTailwindClasses(
          "w-full relative overflow-auto bg-white dark:bg-background",
          (_g = props.classNames) == null ? void 0 : _g.base
        )
      },
      bottomContent: hasMoreData ? /* @__PURE__ */ jsx("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ jsx(
        Spinner,
        {
          ref: loaderRef,
          size: "sm",
          color: "primary",
          className: mergeTailwindClasses(
            isFetching ? "opacity-100" : "opacity-0"
          )
        }
      ) }) : /* @__PURE__ */ jsx("div", { className: "p-3 text-center text-gray-500", children: "Toutes les données ont été chargées" }),
      children: [
        /* @__PURE__ */ jsx(
          TableHeader,
          __spreadProps(__spreadValues({
            "aria-label": "table header",
            "aria-labelledby": "table header",
            columns: processedColumns,
            className: variantClasses.thead
          }, childrenProps == null ? void 0 : childrenProps.tableHeaderProps), {
            children: (column) => {
              var _a3;
              return /* @__PURE__ */ jsx(
                TableColumn,
                __spreadProps(__spreadValues({
                  "aria-labelledby": "table header",
                  "aria-label": extractColumnHeader(column),
                  className: mergeTailwindClasses(
                    (_a3 = childrenProps == null ? void 0 : childrenProps.tableColumnProps) == null ? void 0 : _a3.className
                  )
                }, childrenProps == null ? void 0 : childrenProps.tableColumnProps), {
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("p", { className: column.className, children: column.header }),
                    column.sortable !== false && /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: mergeTailwindClasses(
                          "relative size-4 cursor-pointer"
                        ),
                        onClick: () => onSort(column),
                        role: "button",
                        "aria-label": formatSortHeader(column.header),
                        children: [
                          /* @__PURE__ */ jsx(
                            IconChevronUp,
                            {
                              size: 16,
                              className: mergeTailwindClasses(
                                "absolute -top-1",
                                sortConfig.field === column.key && sortConfig.direction === "asc" ? "opacity-100" : "opacity-30"
                              )
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            IconChevronDown,
                            {
                              size: 16,
                              className: mergeTailwindClasses(
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
              );
            }
          })
        ),
        /* @__PURE__ */ jsx(
          TableBody,
          __spreadProps(__spreadValues({
            isLoading,
            items: rows,
            "aria-label": "table body",
            "aria-labelledby": "table body",
            loadingContent: /* @__PURE__ */ jsx(Spinner, { ref: loaderRef, size: "sm", color: "primary" })
          }, childrenProps == null ? void 0 : childrenProps.tableBodyProps), {
            children: (row) => {
              var _a3;
              return /* @__PURE__ */ jsx(
                TableRow,
                __spreadProps(__spreadValues({
                  "aria-label": "row",
                  "aria-labelledby": "row"
                }, childrenProps == null ? void 0 : childrenProps.tableRowProps), {
                  className: mergeTailwindClasses(
                    variantClasses.tr,
                    (_a3 = childrenProps == null ? void 0 : childrenProps.tableRowProps) == null ? void 0 : _a3.className
                  ),
                  children: (columnKey) => {
                    var _a4, _b3;
                    return /* @__PURE__ */ jsx(
                      TableCell,
                      __spreadProps(__spreadValues({}, childrenProps == null ? void 0 : childrenProps.tableCellProps), {
                        className: mergeTailwindClasses(
                          (_a4 = childrenProps == null ? void 0 : childrenProps.tableCellProps) == null ? void 0 : _a4.className,
                          (_b3 = columns.find((col) => col.field === columnKey)) == null ? void 0 : _b3.className
                        ),
                        "aria-label": "cell",
                        children: extractCellValue(columnKey, row, columns)
                      })
                    );
                  }
                }),
                row.id
              );
            }
          })
        )
      ]
    })
  );
}
export {
  DataGrid
};
