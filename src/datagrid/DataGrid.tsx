import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from "@nextui-org/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useDataGridState } from "@/hooks/useDataGrid";

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
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onCheckedRowsChange?: (rows: T[]) => void;
  onSort?: (column: keyof T, direction: "asc" | "desc") => void;
  checkboxSelection?: boolean;
};

type PreparedColumn<T> = {
  key: string;
  label: React.ReactNode;
  field?: keyof T | "actions";
  cell?: (row: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
};

export function DataGrid<T extends { id: string | number }>({
  rows,
  columns,
  caption,
  className,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
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

  const preparedColumns: PreparedColumn<T>[] = [
    ...(checkboxSelection
      ? [
          {
            key: "checkbox",
            label: "",
            sortable: false,
          },
        ]
      : []),
    ...columns.map((col) => ({
      ...col,
      key: String(col.field || `column-${col.header}`),
      label: col.header,
    })),
  ];

  return (
    <Table
      aria-label={ariaLabel || caption || "Data Grid"}
      aria-labelledby={ariaLabelledBy}
      classNames={{
        base: className,
        table: "min-h-[200px]",
      }}
      selectionMode="multiple"
      selectionBehavior="toggle"
    >
      <TableHeader>
        {preparedColumns.map((column) => (
          <TableColumn
            key={column.key}
            allowsSorting={column.sortable}
            aria-label={String(column.label || column.key)}
            className={column.className}
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
                      if (column.field && column.field !== "actions") {
                        handleSort(
                          column.field,
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
                        sortConfig.key === column.field &&
                        sortConfig.direction === "asc"
                          ? "opacity-100"
                          : "opacity-30"
                      }`}
                    />
                    <IconChevronDown
                      size={16}
                      className={`absolute top-1 ${
                        sortConfig.key === column.field &&
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
        ))}
      </TableHeader>

      <TableBody items={rows} emptyContent="No rows to display">
        {(row) => (
          <TableRow key={row.id} aria-label={`Row ${row.id}`}>
            {(columnKey) => {
              const column = preparedColumns.find((c) => c.key === columnKey);

              return (
                <TableCell>
                  {columnKey === "checkbox" ? (
                    <Checkbox
                      isSelected={isRowSelected(row)}
                      onValueChange={() => handleCheckboxChange(row)}
                      aria-label={`Select row ${row.id}`}
                    />
                  ) : column?.cell ? (
                    column.cell(row)
                  ) : column?.field && column.field !== "actions" ? (
                    String(row[column.field])
                  ) : null}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
