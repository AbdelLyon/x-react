import { useDataGridState } from "@/hooks/useDataGrid";
import {
  Table as NextUITable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from "@nextui-org/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export type SortConfig<T> = { key: keyof T | null; direction: "asc" | "desc" };

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

export type DataGridProps<T extends { id: string | number }> = {
  rows: T[];
  columns: ColumnDefinition<T>[];
  caption?: string;
  className?: string;
  footerContent?: React.ReactNode;
  onCheckedRowsChange?: (rows: T[]) => void;
  onSort?: (column: keyof T, direction: "asc" | "desc") => void;
  checkboxSelection?: boolean;
};

export function DataGrid<T extends { id: string | number }>({
  rows,
  columns,
  caption,
  className,
  onCheckedRowsChange,
  onSort,
  checkboxSelection = true,
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
    <NextUITable
      aria-label={caption}
      className={className}
      aria-labelledby="table"
    >
      <TableHeader columns={preparedColumns}>
        {(column) => (
          <TableColumn
            key={column.key}
            aria-label={String(column.label || column.key)}
          >
            {column.key === "checkbox" ? (
              <Checkbox
                isSelected={isAllChecked}
                onValueChange={handleSelectAll}
                aria-label="Select all rows"
              />
            ) : (
              <div className="flex items-center gap-2">
                {column.label}
                {column.sortable && (
                  <div
                    className="relative w-4 h-4 cursor-pointer"
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
                      className={`absolute -top-1 ${
                        sortConfig.key === column.key &&
                        sortConfig.direction === "asc"
                          ? "opacity-100"
                          : "opacity-30"
                      }`}
                    />
                    <IconChevronDown
                      size={16}
                      className={`absolute top-1 ${
                        sortConfig.key === column.key &&
                        sortConfig.direction === "desc"
                          ? "opacity-100"
                          : "opacity-30"
                      }`}
                    />
                  </div>
                )}
              </div>
            )}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody items={rows}>
        {(row) => (
          <TableRow key={row.id} aria-label={`Row ${row.id}`}>
            {(columnKey) => (
              <TableCell>
                {columnKey === "checkbox" ? (
                  <Checkbox
                    isSelected={isRowSelected(row)}
                    onValueChange={() => handleCheckboxChange(row)}
                    aria-label={`Select row ${row.id}`}
                  />
                ) : (
                  (() => {
                    const column = columns.find(
                      (c) => String(c.field) === columnKey,
                    );
                    if (!column) return null;

                    return column.cell
                      ? column.cell(row)
                      : column.field && column.field in row
                      ? String(row[column.field as keyof typeof row])
                      : null;
                  })()
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </NextUITable>
  );
}
