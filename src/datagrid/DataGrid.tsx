// DataGrid.tsx
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
import { useInfiniteScroll2 } from "@/hooks/useInfiniteScroll2";

export function DataGrid<T extends { id: string | number }>({
  rows,
  columns,
  onSortChange,
  variant = "unstyled",
  isLoading = false,
  isLoadingMore = false,
  hasMoreData = false,
  onGridScrollEnd,
  fetchNextPage,
  childrenProps,
  ...props
}: DataGridProps<T>): JSX.Element {
  const {
    sortConfig,
    processedColumns,
    formatSortHeader,
    extractCellValue,
    extractColumnHeader,
    onSort,
    handleGridScroll,
  } = useDataGridState({
    onSortChange,
    columns,
    onGridScrollEnd,
  });

  // Utilisation du hook useInfiniteScroll
  const { ref, containerRef } = useInfiniteScroll2({
    hasMore: hasMoreData,
    isEnabled: !isLoading && !isLoadingMore,
    threshold: 0.1,
    rootMargin: "0px 0px 250px 0px",
    debounceTime: 100,
    onLoadMore: (): void => {
      console.log("DataGrid: InfiniteScroll triggered");
      fetchNextPage?.();
    },
  });

  const variantClasses = GRID_VARIANTS[variant];

  if (isLoading && rows.length === 0) {
    return (
      <DataGridSkeleton
        columns={columns.length}
        checkboxSelection={props.showSelectionCheckboxes}
        variant={variant}
        rows={5}
      />
    );
  }

  return (
    <div
      className="relative flex flex-col"
      ref={containerRef as React.RefObject<HTMLDivElement>}
    >
      <DataTable
        aria-label="data-grid"
        {...props}
        classNames={{
          ...props.classNames,
          th: mergeTailwindClasses(variantClasses.th, props.classNames?.th),
          tr: mergeTailwindClasses(variantClasses.tr, props.classNames?.tr),
          base: mergeTailwindClasses("w-full relative", props.classNames?.base),
        }}
        onScroll={handleGridScroll}
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
        <TableBody items={rows} {...childrenProps?.tableBodyProps}>
          {(row: T): JSX.Element => {
            return (
              <TableRow key={row.id} {...childrenProps?.tableRowProps}>
                {(columnKey): JSX.Element => (
                  <TableCell {...childrenProps?.tableCellProps}>
                    {extractCellValue(columnKey, row, columns)}
                  </TableCell>
                )}
              </TableRow>
            );
          }}
        </TableBody>
      </DataTable>

      {isLoadingMore && (
        <div className="flex w-full justify-center p-2">
          <Spinner color="primary" size="sm" />
        </div>
      )}

      {/* Utiliser la référence du hook useInfiniteScroll */}
      {hasMoreData && (
        <div
          ref={ref}
          className="h-10 w-full"
          aria-hidden="true"
          data-testid="infinite-scroll-trigger"
        />
      )}

      {!hasMoreData && rows.length > 0 && (
        <div className="py-2 text-center text-sm text-gray-500">
          Toutes les données ont été chargées
        </div>
      )}
    </div>
  );
}
