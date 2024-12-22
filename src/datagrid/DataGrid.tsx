import { useDataGridState } from "@/hooks/useDataGrid";
import { cn } from "@/utils";
import {
  Table as TableRoot,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  TableBodyProps,
  TableProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  TableColumnProps,
} from "@nextui-org/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

// Types
export type SortConfig<T> = {
  key: keyof T | null;
  direction: "asc" | "desc";
};

export type ColumnDefinition<T> = {
  header: React.ReactNode;
  footer?: (data: T[]) => React.ReactNode;
  className?: string;
  sortable?: boolean;
} & (
  | {
      field: keyof T;
      cell?: (row: T) => React.ReactNode;
    }
  | {
      field?: "actions";
      cell: (row: T) => React.ReactNode;
    }
);

export interface DataGridComponentProps<T> {
  tableProps?: TableProps;
  tableHeaderProps?: Omit<TableHeaderProps<T>, "columns" | "children">;
  tableBodyProps?: Omit<TableBodyProps<T>, "items" | "children">;
  tableRowProps?: Omit<TableRowProps, "children">;
  tableCellProps?: Omit<TableCellProps, "children">;
  tableColumnProps?: Omit<TableColumnProps<T>, "key" | "children">;
}

export interface DataGridProps<T extends { id: string | number }> {
  props?: DataGridComponentProps<T>;
  rows: T[];
  columns: ColumnDefinition<T>[];
  caption?: string;
  className?: string;
  footerContent?: React.ReactNode;
  onCheckedRowsChange?: (rows: T[]) => void;
  onSort?: (column: keyof T, direction: "asc" | "desc") => void;
  checkboxSelection?: boolean;
  classNames?: {
    base?: string;
    table?: string;
    thead?: string;
    tbody?: string;
    tr?: string;
    th?: string;
    td?: string;
    checkbox?: string;
    sortIcon?: string;
    headerContent?: string;
    cellContent?: string;
  };
  variant?: "bordered" | "striped" | "unstyled";
}

// Styles des variantes
const variantStyles = {
  bordered: {
    table: "border border-divider",
    header: "bg-content1",
    column: "",
    row: "border-b border-divider last:border-b-0",
    cell: "",
  },
  striped: {
    table: "",
    header: "bg-content2",
    column: "",
    row: "even:bg-default-50",
    cell: "",
  },
  unstyled: {
    table: "",
    header: "",
    column: "",
    row: "",
    cell: "",
  },
};

export function DataGrid<T extends { id: string | number }>({
  rows,
  columns,
  caption,
  className,
  onCheckedRowsChange,
  onSort,
  checkboxSelection = true,
  classNames,
  variant = "unstyled",
  props,
}: DataGridProps<T>) {
  const {
    isAllChecked,
    sortConfig,
    handleCheckboxChange,
    handleSelectAll,
    handleSort,
    isRowSelected,
  } = useDataGridState(rows, onCheckedRowsChange, onSort);

  type ExtendedColumn = ColumnDefinition<T> & {
    key: string;
    label: React.ReactNode;
  };

  const variantClasses = variantStyles[variant];

  const preparedColumns: ExtendedColumn[] = [
    ...(checkboxSelection
      ? [
          {
            key: "checkbox",
            label: "",
            header: "",
          } as ExtendedColumn,
        ]
      : []),
    ...columns.map((col, index) => ({
      ...col,
      key: String(col.field || index),
      label: col.header,
    })),
  ];

  return (
    <TableRoot
      aria-label={caption}
      className={cn(variantClasses.table, classNames?.base, className)}
      {...props?.tableProps}
    >
      <TableHeader
        columns={preparedColumns}
        className={cn(variantClasses.header, classNames?.thead)}
        {...props?.tableHeaderProps}
      >
        {(column) => (
          <TableColumn
            key={column.key}
            aria-label={String(column.label || column.key)}
            className={cn("py-4", variantClasses.column, classNames?.th)}
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
              <div
                className={cn(
                  "flex items-center gap-2",
                  classNames?.headerContent,
                )}
              >
                {column.label}
                {column.sortable && (
                  <div
                    className={cn(
                      "relative w-4 h-4 cursor-pointer",
                      classNames?.sortIcon,
                    )}
                    onClick={() => {
                      const field = columns.find(
                        (c) => String(c.field) === column.key,
                      )?.field;
                      if (field && field !== "actions") {
                        handleSort(
                          field,
                          sortConfig.direction === "asc" ? "desc" : "asc",
                        );
                      }
                    }}
                    role="button"
                    aria-label={`Sort by ${column.label}`}
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

      <TableBody
        items={rows}
        className={cn(classNames?.tbody)}
        {...props?.tableBodyProps}
      >
        {(row) => (
          <TableRow
            key={row.id}
            aria-label={`Row ${row.id}`}
            className={cn(variantClasses.row, classNames?.tr)}
            {...props?.tableRowProps}
          >
            {(columnKey) => (
              <TableCell
                className={cn(variantClasses.cell, classNames?.td)}
                {...props?.tableCellProps}
              >
                {columnKey === "checkbox" ? (
                  <Checkbox
                    isSelected={isRowSelected(row)}
                    onValueChange={() => handleCheckboxChange(row)}
                    aria-label={`Select row ${row.id}`}
                    className={classNames?.checkbox}
                  />
                ) : (
                  <div className={classNames?.cellContent}>
                    {(() => {
                      const column = columns.find(
                        (c) => String(c.field) === columnKey,
                      );
                      if (!column) return null;

                      return column.cell
                        ? column.cell(row)
                        : column.field && column.field in row
                        ? String(row[column.field as keyof typeof row])
                        : null;
                    })()}
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
