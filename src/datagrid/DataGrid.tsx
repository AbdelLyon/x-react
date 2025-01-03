import { useDataGridState } from "@/hooks/useDataGridState";
import { cn } from "@/utils";
import { type Key } from "react";
import {
  Table as DataTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import type { JSX } from "react";
import { DataGridSkeleton } from "./DataGridSkeleton";
import type {
  ColumnDefinition,
  DataGridProps,
  ExtendedColumn,
} from "@/types/datagrid";
import { GRID_VARIANTS } from "@/data/default";

const getColumnLabel = <T extends object>(
  column: ExtendedColumn<T>,
): string => {
  return typeof column.label === "string" && column.label.length > 0
    ? column.label
    : typeof column.key === "string" && column.key.length > 0
      ? column.key
      : "Column";
};

const getSortLabel = (label: React.ReactNode): string => {
  return typeof label === "string" && label.length > 0
    ? `Sort by ${label}`
    : "Sort column";
};

const getCellValue = <T extends object>(
  columnKey: Key,
  row: T,
  columns: ColumnDefinition<T>[],
): React.ReactNode => {
  const column = columns.find(
    (c) => typeof c.field === "string" && String(c.field) === String(columnKey),
  );

  if (column === undefined) {
    return null;
  }

  if (column.cell !== undefined) {
    return column.cell(row);
  }

  if (
    typeof column.field === "string" &&
    column.field.length > 0 &&
    column.field in row
  ) {
    const value = row[column.field as keyof T];
    return typeof value === "string" || typeof value === "number"
      ? String(value)
      : null;
  }

  return null;
};

export function DataGrid<T extends { id: string | number }>({
  rows,
  columns,
  onSortChange,
  variant = "unstyled",
  isLoading = false,
  onRowsScrollEnd,
  childrenProps,
  ...props
}: DataGridProps<T>): JSX.Element {
  const { sortConfiguration, updateSort } = useDataGridState({
    rows,
    onSortChange,
  });

  const preparedColumns = columns.map((col, index) => ({
    ...col,
    key: typeof col.field === "string" ? String(col.field) : String(index),
    label: col.header,
  }));

  const handleSort = (column: ExtendedColumn<T>): void => {
    const matchingColumn = columns.find(
      (c) =>
        typeof c.field === "string" &&
        c.field.length > 0 &&
        String(c.field) === column.key,
    );

    const columnField = matchingColumn?.field;

    if (
      columnField !== undefined &&
      columnField !== undefined &&
      columnField !== "actions"
    ) {
      updateSort(
        columnField,
        sortConfiguration.direction === "asc" ? "desc" : "asc",
      );
    }
  };

  const variantClasses = GRID_VARIANTS[variant];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>): void => {
    const element = e.currentTarget;

    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
      onRowsScrollEnd?.();
    }
  };
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
        th: cn(variantClasses.th, props.classNames?.th),
        tr: cn(variantClasses.tr, props.classNames?.tr),
      }}
      onScroll={handleScroll}
    >
      <TableHeader
        columns={preparedColumns}
        {...childrenProps?.tableHeaderProps}
      >
        {(column) => (
          <TableColumn
            key={column.key}
            aria-label={getColumnLabel(column)}
            {...childrenProps?.tableColumnProps}
          >
            <div className="flex items-center gap-2">
              {column.label}
              {column.sortable !== false && (
                <div
                  className={cn("relative size-4 cursor-pointer")}
                  onClick={() => handleSort(column)}
                  role="button"
                  aria-label={getSortLabel(column.label)}
                >
                  <IconChevronUp
                    size={16}
                    className={cn(
                      "absolute -top-1",
                      sortConfiguration.key === column.key &&
                        sortConfiguration.direction === "asc"
                        ? "opacity-100"
                        : "opacity-30",
                    )}
                  />
                  <IconChevronDown
                    size={16}
                    className={cn(
                      "absolute top-1",
                      sortConfiguration.key === column.key &&
                        sortConfiguration.direction === "desc"
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
        {(row: T) => {
          return (
            <TableRow key={row.id} {...childrenProps?.tableRowProps}>
              {(columnKey) => (
                <TableCell {...childrenProps?.tableCellProps}>
                  {getCellValue(columnKey, row, columns)}
                </TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </DataTable>
  );
}
