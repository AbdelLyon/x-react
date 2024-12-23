import { useDataGridState } from "@/hooks/useDataGrid";
import { cn } from "@/utils";
import type {
  TableBodyProps,
  TableProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  TableColumnProps,
} from "@nextui-org/react";
import type { Key } from "react";
import {
  Table as TableRoot,
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

// Types
export interface SortConfig<T> {
  key: keyof T | null;
  direction: "asc" | "desc";
}

interface ColumnBase<T> {
  header: React.ReactNode;
  footer?: (data: T[]) => React.ReactNode;
  className?: string;
  sortable?: boolean;
}

interface FieldColumn<T> extends ColumnBase<T> {
  field: keyof T;
  cell?: (row: T) => React.ReactNode;
}

interface ActionColumn<T> extends ColumnBase<T> {
  field?: "actions";
  cell: (row: T) => React.ReactNode;
}

export type ColumnDefinition<T> = FieldColumn<T> | ActionColumn<T>;

interface DataGridComponentProps<T> {
  tableProps?: TableProps;
  tableHeaderProps?: Omit<TableHeaderProps<T>, "columns" | "children">;
  tableBodyProps?: Omit<TableBodyProps<T>, "items" | "children">;
  tableRowProps?: Omit<TableRowProps, "children">;
  tableCellProps?: Omit<TableCellProps, "children">;
  tableColumnProps?: Omit<TableColumnProps<T>, "key" | "children">;
}

interface DataGridProps<T extends { id: string | number }> {
  props?: DataGridComponentProps<T>;
  rows: T[];
  columns: ColumnDefinition<T>[];
  className?: string;
  footerContent?: React.ReactNode;
  onCheckedRowsChange?: (rows: T[]) => void;
  onSort?: (column: keyof T, direction: "asc" | "desc") => void;
  checkboxSelection?: boolean;
  classNames?: {
    checkbox?: string;
    sortIcon?: string;
    cellContent?: string;
  };
  variant?: "bordered" | "striped" | "unstyled";
  isLoading?: boolean;
}

export const GRIDVARIANT = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2 h-12",
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 even:bg-content2 h-12",
  },
  unstyled: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 hover:bg-content2 h-12",
  },
} as const;

type ExtendedColumn<T> = ColumnDefinition<T> & {
  key: string;
  label: React.ReactNode;
};

function getColumnAriaLabel<T extends object>(
  column: ExtendedColumn<T>,
): string {
  if (typeof column.label === "string" && column.label.length > 0) {
    return column.label;
  }
  if (typeof column.key === "string" && column.key.length > 0) {
    return column.key;
  }
  return "Column";
}

function getSortAriaLabel(label: React.ReactNode): string {
  if (typeof label === "string" && label.length > 0) {
    return `Sort by ${label}`;
  }
  return "Sort column";
}

function getCellContent<T extends object>(
  columnKey: Key,
  row: T,
  columns: ColumnDefinition<T>[],
): React.ReactNode {
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
}

export function DataGrid<T extends { id: string | number }>({
  rows,
  columns,

  onCheckedRowsChange,
  onSort,
  checkboxSelection = true,
  classNames,
  variant = "unstyled",
  isLoading = false,
  props,
}: DataGridProps<T>): JSX.Element {
  const {
    isAllChecked,
    sortConfig,
    handleCheckboxChange,
    handleSelectAll,
    handleSort,
    isRowSelected,
  } = useDataGridState({
    rows,
    onCheckedRowsChange,
    onSort,
  });

  if (isLoading) {
    return (
      <DataGridSkeleton
        columns={columns.length}
        checkboxSelection={checkboxSelection}
        variant={variant}
        rows={rows.length}
      />
    );
  }

  const variantClasses = GRIDVARIANT[variant];

  const preparedColumns: ExtendedColumn<T>[] = [
    ...(checkboxSelection === true
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

  const handleColumnSort = (column: ExtendedColumn<T>): void => {
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
      handleSort(columnField, sortConfig.direction === "asc" ? "desc" : "asc");
    }
  };

  return (
    <TableRoot
      aria-label="data-grid"
      aria-labelledby="data-grid"
      {...props?.tableProps}
      radius="sm"
    >
      <TableHeader
        aria-label="data-grid-header"
        aria-labelledby="data-grid-header"
        columns={preparedColumns}
        className={cn(variantClasses.header)}
        {...props?.tableHeaderProps}
      >
        {(column) => (
          <TableColumn
            key={column.key}
            aria-labelledby={column.key}
            aria-label={getColumnAriaLabel(column)}
            className={cn(variantClasses.column)}
            {...props?.tableColumnProps}
          >
            {column.key === "checkbox" ? (
              <Checkbox
                isSelected={isAllChecked}
                onValueChange={handleSelectAll}
                aria-label="Select all rows"
                className={classNames?.checkbox}
              />
            ) : (
              <div className={cn("flex items-center gap-2")}>
                {column.label}
                {column.sortable === true && (
                  <div
                    className={cn(
                      "relative size-4 cursor-pointer",
                      classNames?.sortIcon,
                    )}
                    onClick={() => handleColumnSort(column)}
                    role="button"
                    aria-label={getSortAriaLabel(column.label)}
                  >
                    <IconChevronUp
                      size={16}
                      className={cn(
                        "absolute -top-1",
                        sortConfig.key === column.key &&
                          sortConfig.direction === "asc"
                          ? "opacity-100"
                          : "opacity-30",
                      )}
                    />
                    <IconChevronDown
                      size={16}
                      className={cn(
                        "absolute top-1",
                        sortConfig.key === column.key &&
                          sortConfig.direction === "desc"
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

      <TableBody items={rows} {...props?.tableBodyProps}>
        {(row) => (
          <TableRow
            key={row.id}
            aria-label={`Row ${row.id}`}
            aria-labelledby={`Row ${row.id}`}
            className={cn(variantClasses.row)}
            {...props?.tableRowProps}
          >
            {(columnKey) => (
              <TableCell {...props?.tableCellProps}>
                {columnKey === "checkbox" ? (
                  <Checkbox
                    checked={isRowSelected(row)}
                    onValueChange={() => handleCheckboxChange(row)}
                    aria-label={`Select row ${row.id}`}
                    className={classNames?.checkbox}
                  />
                ) : (
                  <div className={classNames?.cellContent}>
                    {getCellContent(columnKey, row, columns)}
                  </div>
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </TableRoot>
  );
}
