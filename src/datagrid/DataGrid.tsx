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
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import type { JSX } from "react";
import { DataGridSkeleton } from "./DataGridSkeleton";
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

  const [loaderRef, scrollerRef] = useInfiniteScroll({
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
      className={mergeTailwindClasses(
        "overflow-hidden rounded-md border border-border dark:bg-background p-3",
        "!pr-1.5",
        props.className,
      )}
      shadow={props.shadow ?? "none"}
      radius={props.radius ?? "none"}
      baseRef={scrollerRef}
      classNames={{
        wrapper: mergeTailwindClasses(
          "bg-white border-0 p-0 dark:bg-background",
          "!pr-1.5",
          classNames?.wrapper,
        ),
        th: mergeTailwindClasses(variantClasses.th, classNames?.th),
        tr: mergeTailwindClasses(variantClasses.tr, "border-0", classNames?.tr),
        base: mergeTailwindClasses(
          "w-full relative overflow-auto bg-white dark:bg-background",
          classNames?.base,
        ),
      }}
      bottomContent={
        hasMoreData ? (
          <div className="flex w-full justify-center">
            <Spinner
              ref={loaderRef}
              size="sm"
              color="primary"
              className={mergeTailwindClasses(
                isFetching ? "opacity-100" : "opacity-0",
              )}
            />
          </div>
        ) : (
          <div className="p-3 text-center text-gray-500">
            Toutes les données ont été chargées
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
              childrenProps?.tableColumnProps?.className,
            )}
            {...childrenProps?.tableColumnProps}
          >
            <div
              className={mergeTailwindClasses(
                "flex items-center gap-2",
                column.className,
              )}
            >
              <p>{column.header}</p>
              {column.sortable !== false && (
                <div
                  className={mergeTailwindClasses(
                    "relative size-4 cursor-pointer",
                  )}
                  onClick={(): void => onSort(column)}
                  role="button"
                  aria-label={formatSortHeader(column.header)}
                >
                  <IconChevronUp
                    size={16}
                    className={mergeTailwindClasses(
                      "absolute -top-1",
                      sortConfig.field === column.key &&
                        sortConfig.direction === "asc"
                        ? "opacity-100"
                        : "opacity-30",
                    )}
                  />
                  <IconChevronDown
                    size={16}
                    className={mergeTailwindClasses(
                      "absolute top-1",
                      sortConfig.field === column.key &&
                        sortConfig.direction === "desc"
                        ? "opacity-100"
                        : "opacity-30",
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
                    childrenProps?.tableCellProps?.className,
                    columns.find((col): boolean => col.field === columnKey)
                      ?.className,
                  )}
                  aria-label="cell"
                >
                  {extractCellValue(columnKey, row, columns)}
                </TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </DataTable>
  );
}
