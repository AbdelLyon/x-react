// components/DataGrid/DataGrid.tsx
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
  hasMoreData = true, // Ajout d'une prop hasMoreData
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
  } = useDataGridState({
    onSortChange,
    columns,
  });

  // CORRECTION 1: Utiliser hasMoreData au lieu de isFetching pour hasMore
  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore: hasMoreData,
    onLoadMore: (): void => {
      console.log("Infinite scroll triggered - Loading more data");
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
    <DataTable
      aria-label="data-grid"
      {...props}
      baseRef={scrollerRef} // Utiliser scrollerRef comme baseRef
      classNames={{
        ...props.classNames,
        th: mergeTailwindClasses(variantClasses.th, props.classNames?.th),
        tr: mergeTailwindClasses(variantClasses.tr, props.classNames?.tr),
        base: mergeTailwindClasses(
          "w-full relative max-h-[600px] overflow-auto",
          props.classNames?.base,
        ),
      }}
      bottomContent={
        hasMoreData ? (
          <div className="flex w-full justify-center p-2">
            <Spinner
              ref={loaderRef}
              color="primary"
              className={isFetching ? "opacity-100" : "opacity-0"}
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
        isLoading={isLoading && rows.length > 0}
        items={rows}
        loadingContent={<Spinner color="primary" />}
        {...childrenProps?.tableBodyProps}
      >
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
  );
}
