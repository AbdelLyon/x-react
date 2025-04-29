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
    <div className="w-full overflow-hidden rounded-md border border-border dark:bg-background">
      <DataTable
        aria-label="data-grid"
        {...props}
        baseRef={scrollerRef}
        classNames={{
          ...props.classNames,
          wrapper: mergeTailwindClasses(
            "dark:bg-background border-0 p-0",
            props.classNames?.wrapper,
          ),
          th: mergeTailwindClasses(
            variantClasses.th,
            props.classNames?.th,
            "sticky top-0 z-10",
          ),
          tr: mergeTailwindClasses(variantClasses.tr, props.classNames?.tr),
          base: mergeTailwindClasses("w-full relative", props.classNames?.base),
        }}
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

        <div
          className="overflow-auto"
          style={{ maxHeight: "calc(100vh - 350px)" }}
        >
          <TableBody
            isLoading={isLoading}
            items={rows}
            loadingContent={<Spinner color="primary" />}
            {...childrenProps?.tableBodyProps}
          >
            {(row: T): JSX.Element => {
              return (
                <TableRow key={row.id} {...childrenProps?.tableRowProps}>
                  {(columnKey): JSX.Element => (
                    <TableCell
                      {...childrenProps?.tableCellProps}
                      className={mergeTailwindClasses(
                        variantClasses.td,
                        childrenProps?.tableCellProps?.className,
                      )}
                    >
                      {extractCellValue(columnKey, row, columns)}
                    </TableCell>
                  )}
                </TableRow>
              );
            }}
          </TableBody>
        </div>
      </DataTable>

      {hasMoreData ? (
        <div className="flex w-full justify-center border-t border-border/70 p-2">
          <Spinner
            ref={loaderRef}
            color="primary"
            className={mergeTailwindClasses(
              isFetching ? "opacity-100" : "opacity-0",
              "h-8 w-8",
            )}
          />
        </div>
      ) : (
        <div className="border-t border-border/70 p-3 text-center text-gray-500">
          Toutes les données ont été chargées
        </div>
      )}
    </div>
  );
}
