import { useDataGridState } from "@/datagrid/useDataGridState";
import { mergeTailwindClasses } from "@/utils";
import {
  Table as DataTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@heroui/react";
import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";
import type { JSX } from "react";
import { DataGridSkeleton } from "./DataGridSkeleton";
import { TruncatedText } from "./TruncatedText";
import type { DataGridProps } from "@/types/datagrid";
import { GRID_VARIANTS } from "./variants";
import { useInfiniteScroll } from "@/hooks";

export function DataGrid<T extends { id: string | number }>({
  rows,
  columns,
  onSortChange,
  variant = "unstyled",
  isLoading = false,
  isFetching = false,
  hasMoreData = true,
  fetchNextPage,
  childrenProps,
  skeletonRowsCount,
  classNames,
  ...props
}: DataGridProps<T>): JSX.Element {
  const {
    sortConfig,
    processedColumns,
    formatSortHeader,
    extractCellValue,
    extractColumnHeader,
    onSort,
  } = useDataGridState({
    onSortChange,
    columns,
  });

  const { loaderRef, scrollContainerRef } = useInfiniteScroll({
    hasMore: hasMoreData,
    onLoadMore: (): void => {
      fetchNextPage?.();
    },
  });

  const variantClasses = GRID_VARIANTS[variant];

  if (isLoading) {
    return (
      <DataGridSkeleton
        columns={columns.length}
        checkboxSelection={props.showSelectionCheckboxes}
        variant={variant}
        rows={skeletonRowsCount ?? 10}
        className={classNames?.base as string}
      />
    );
  }

  return (
    <DataTable
      {...props}
      aria-label="data-grid"
      aria-labelledby="data-grid"
      checkboxesProps={{
        classNames: {},
        color: "danger",
      }}
      className={mergeTailwindClasses(
        "overflow-hidden rounded-xl border border-border/60 dark:bg-background/95 backdrop-blur-sm shadow-sm",
        "p-4 transition-all duration-300 hover:shadow-md hover:border-border/70",
        "!pr-1.5",
        props.className,
      )}
      shadow={props.shadow ?? "none"}
      radius={props.radius ?? "none"}
      baseRef={scrollContainerRef}
      classNames={{
        wrapper: mergeTailwindClasses(
          "bg-white/80 backdrop-blur-sm border-0 p-0 dark:bg-background/90",
          "rounded-lg transition-colors duration-300",
          "!pr-1.5",
          classNames?.wrapper,
        ),
        th: mergeTailwindClasses(
          variantClasses.th,
          props.showSelectionCheckboxes && "first:w-12 first:min-w-12",
          classNames?.th,
        ),
        tr: mergeTailwindClasses(variantClasses.tr, classNames?.tr),
        td: mergeTailwindClasses(
          variantClasses.td,
          props.showSelectionCheckboxes &&
            "first:w-12 first:min-w-12 first:max-w-12",
          classNames?.td,
        ),
        base: mergeTailwindClasses(
          "w-full relative overflow-auto bg-white/90 dark:bg-background/90",
          "table-fixed backdrop-blur-sm rounded-lg",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border/20",
          "hover:scrollbar-thumb-border/30 transition-all duration-300",
          classNames?.base,
        ),
      }}
      bottomContent={
        hasMoreData ? (
          <div className="flex w-full justify-center py-4">
            <div className="flex items-center gap-3 rounded-full bg-muted/20 px-6 py-3 backdrop-blur-sm">
              <Spinner
                ref={loaderRef}
                size="sm"
                color="primary"
                className={mergeTailwindClasses(
                  "transition-all duration-500",
                  isFetching ? "opacity-100 scale-100" : "opacity-0 scale-75",
                )}
              />
              <span
                className={mergeTailwindClasses(
                  "text-sm text-muted-foreground transition-all duration-500",
                  isFetching ? "opacity-100" : "opacity-70",
                )}
              >
                {isFetching ? "Chargement..." : "Scroll pour plus"}
              </span>
            </div>
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/10 px-4 py-2 text-success">
              <div className="size-2 animate-pulse rounded-full bg-success" />
              <span className="text-sm font-medium">
                Toutes les données ont été chargées
              </span>
            </div>
          </div>
        )
      }
    >
      <TableHeader
        aria-label="table header"
        aria-labelledby="table header"
        columns={processedColumns}
        className={variantClasses.thead}
        {...childrenProps?.tableHeaderProps}
      >
        {(column): JSX.Element => (
          <TableColumn
            aria-labelledby="table header"
            key={column.key}
            aria-label={extractColumnHeader(column)}
            className={mergeTailwindClasses(
              "relative",
              childrenProps?.tableColumnProps?.className,
              column.className,
            )}
            {...childrenProps?.tableColumnProps}
          >
            <div
              className={mergeTailwindClasses(
                "flex min-w-0 w-max items-center gap-2 transition-all duration-300",
                "opacity-80 hover:opacity-100",
                column.sortable !== false
                  ? "cursor-pointer px-2 py-1 -mx-2 -my-1"
                  : "",
                sortConfig.field === column.key ? "opacity-100" : "",
              )}
              onClick={
                column.sortable !== false
                  ? (): void => onSort(column)
                  : undefined
              }
              role={column.sortable !== false ? "button" : undefined}
              aria-label={
                column.sortable !== false
                  ? formatSortHeader(column.header)
                  : undefined
              }
            >
              <TruncatedText
                className={mergeTailwindClasses(
                  "truncate text-sm font-semibold text-foreground transition-all duration-200",
                  sortConfig.field === column.key
                    ? "opacity-80 font-bold"
                    : "group-hover:opacity-100",
                )}
                tooltipClassName="border border-border/50 px-3 py-2 shadow-xl backdrop-blur-md bg-white/95 dark:bg-background/95 rounded-lg"
                placement="top"
              >
                {column.header}
              </TruncatedText>
              {column.sortable !== false && (
                <div className="flex size-5 flex-shrink-0 flex-col items-center justify-center">
                  <IconCaretUpFilled
                    size={14}
                    className={mergeTailwindClasses(
                      "transition-all duration-300 -mb-0.5",
                      sortConfig.field === column.key &&
                        sortConfig.direction === "asc"
                        ? "opacity-100 drop-shadow-sm"
                        : "opacity-40 hover:opacity-60",
                    )}
                  />
                  <IconCaretDownFilled
                    size={14}
                    className={mergeTailwindClasses(
                      "transition-all duration-300 -mt-0.5",
                      sortConfig.field === column.key &&
                        sortConfig.direction === "desc"
                        ? "opacity-100 scale-110 drop-shadow-sm"
                        : "opacity-40 hover:opacity-60",
                    )}
                  />
                </div>
              )}
            </div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={rows}
        aria-label="table body"
        aria-labelledby="table body"
        loadingContent={<Spinner ref={loaderRef} size="sm" color="primary" />}
        {...childrenProps?.tableBodyProps}
      >
        {(row: T): JSX.Element => {
          return (
            <TableRow
              aria-label="row"
              aria-labelledby="row"
              key={row.id}
              {...childrenProps?.tableRowProps}
              className={mergeTailwindClasses(
                variantClasses.tr,
                childrenProps?.tableRowProps?.className,
              )}
            >
              {(columnKey): JSX.Element => (
                <TableCell
                  {...childrenProps?.tableCellProps}
                  className={mergeTailwindClasses(
                    "relative min-w-0",
                    childrenProps?.tableCellProps?.className,
                    columns.find((col): boolean => col.field === columnKey)
                      ?.className,
                  )}
                  aria-label="cell"
                >
                  <TruncatedText
                    className="w-full truncate text-sm font-medium text-foreground/90 transition-colors duration-200 group-hover:text-foreground"
                    tooltipClassName="border border-border/50 px-3 py-2 shadow-xl backdrop-blur-md bg-white/95 dark:bg-background/95 rounded-lg"
                    placement="top"
                  >
                    {extractCellValue(columnKey, row, columns)}
                  </TruncatedText>
                </TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </DataTable>
  );
}
