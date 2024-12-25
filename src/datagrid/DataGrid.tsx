import { useDataGridState } from "@/hooks/useDataGridState";
import { cn } from "@/utils";
import { useEffect, type Key } from "react";
import {
  Table as DataTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from "@nextui-org/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import type { JSX } from "react";
import { DataGridSkeleton } from "./DataGridSkeleton";
import { useInView } from "react-intersection-observer";
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
  onEndReached,
  onSelectionChange,
  onSortChange,
  showSelectionCheckboxes = true,
  classNames,
  variant = "unstyled",
  isLoading = false,
  childrenProps,
  ...props
}: DataGridProps<T>): JSX.Element {
  const {
    allRowsSelected,
    sortConfiguration,
    toggleAllRowsSelection,
    toggleRowSelection,
    updateSort,
    selectedRows,
  } = useDataGridState({
    rows,
    onSelectionChange,
    onSortChange,
  });

  const { inView } = useInView({ threshold: 0.5, rootMargin: "100px" });

  useEffect(() => {
    if (inView) {
      onEndReached?.();
    }
  }, [inView, onEndReached]);

  if (isLoading) {
    return (
      <DataGridSkeleton
        columns={columns.length}
        checkboxSelection={showSelectionCheckboxes}
        variant={variant}
        rows={rows.length}
      />
    );
  }

  const variantClasses = GRID_VARIANTS[variant];

  const preparedColumns: ExtendedColumn<T>[] = [
    ...(showSelectionCheckboxes === true
      ? [
          {
            key: "checkbox",
            label: "",
            header: "",
          } as ExtendedColumn<T>,
        ]
      : []),
    ...columns.map((col, index) => ({
      ...col,
      key: typeof col.field === "string" ? String(col.field) : String(index),
      label: col.header,
    })),
  ];

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
      columnField !== null &&
      columnField !== "actions"
    ) {
      updateSort(
        columnField,
        sortConfiguration.direction === "asc" ? "desc" : "asc",
      );
    }
  };

  return (
    <DataTable aria-label="data-grid" {...props}>
      <TableHeader
        columns={preparedColumns}
        className={cn(variantClasses.header)}
        {...childrenProps?.tableHeaderProps}
      >
        {(column) => (
          <TableColumn
            key={column.key}
            aria-label={getColumnLabel(column)}
            className={cn(variantClasses.column)}
            {...childrenProps?.tableColumnProps}
          >
            {column.key === "checkbox" && showSelectionCheckboxes ? (
              <Checkbox
                isSelected={allRowsSelected}
                onValueChange={toggleAllRowsSelection}
                aria-label="Select all rows"
                className={classNames?.checkbox}
              />
            ) : (
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
            )}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows} {...childrenProps?.tableBodyProps}>
        {(row: T) => (
          <TableRow
            key={row.id}
            className={cn(variantClasses.row)}
            {...childrenProps?.tableRowProps}
          >
            {(columnKey) => (
              <TableCell {...childrenProps?.tableCellProps}>
                {columnKey === "checkbox" && showSelectionCheckboxes ? (
                  <Checkbox
                    isSelected={selectedRows?.has(row)}
                    onValueChange={() => toggleRowSelection?.(row)}
                    aria-label={`Select row ${row.id}`}
                    className={classNames?.checkbox}
                  />
                ) : (
                  <div className={classNames?.cellContent}>
                    {getCellValue(columnKey, row, columns)}
                  </div>
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </DataTable>
  );
}
