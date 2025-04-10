import { useDataGridState } from "@/datagrid/useDataGridState";
import { mergeTailwindClasses } from "@/utils";
import {
  Table as DataTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import type { JSX } from "react";
import { DataGridSkeleton } from "./DataGridSkeleton";
import type { DataGridProps } from "@/types/datagrid";
import { GRID_VARIANTS } from "./variants";

export function DataGrid<T extends { id: string | number }>({
  rows,
  columns,
  onSortChange,
  variant = "unstyled",
  isLoading = false,
  onGridScrollEnd,
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

  const variantClasses = GRID_VARIANTS[variant];

  if (isLoading) {
    return (
      <DataGridSkeleton
        columns={columns.length}
        checkboxSelection={props.showSelectionCheckboxes}
        variant={variant}
        rows={rows.length}
      />
    );
  }

  return (
    <DataTable
      aria-label="data-grid"
      {...props}
      classNames={{
        ...props.classNames,
        th: mergeTailwindClasses(variantClasses.th, props.classNames?.th),
        tr: mergeTailwindClasses(variantClasses.tr, props.classNames?.tr),
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
  );
}
