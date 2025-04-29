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
        className={props.classNames?.base as string}
      />
    );
  }

  return (
    <DataTable
      aria-label="data-grid"
      {...props}
      baseRef={scrollerRef}
      classNames={{
        ...props.classNames,
        wrapper: mergeTailwindClasses(
          "dark:bg-background border border-border p-0",
          props.classNames?.th,
        ),
        th: mergeTailwindClasses(variantClasses.th, props.classNames?.th),
        tr: mergeTailwindClasses(variantClasses.tr, props.classNames?.tr),
        base: mergeTailwindClasses(
          "w-full relative overflow-auto",
          props.classNames?.base,
        ),
      }}
      bottomContent={
        hasMoreData ? (
          <div className="flex w-full justify-center p-2">
            <Spinner
              ref={loaderRef}
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
        columns={processedColumns}
        {...childrenProps?.tableHeaderProps}
      >
        {(column): JSX.Element => (
          <TableColumn
            key={column.key}
            aria-label={extractColumnHeader(column)}
            {...childrenProps?.tableColumnProps}
          >
            <div className="flex items-center gap-2">
              {column.header}
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
        loadingContent={<Spinner ref={loaderRef} color="primary" />}
        {...childrenProps?.tableBodyProps}
      >
        {(row: T): JSX.Element => {
          return (
            <TableRow key={row.id} {...childrenProps?.tableRowProps}>
              {(columnKey): JSX.Element => (
                <TableCell
                  {...childrenProps?.tableCellProps}
                  className={mergeTailwindClasses(
                    childrenProps?.tableCellProps?.className,
                    columns[rows.indexOf(row)].className,
                  )}
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
