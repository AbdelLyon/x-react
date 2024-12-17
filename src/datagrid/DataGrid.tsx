import { forwardRef, useEffect, useState } from "react";
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
import { useDataGridState } from "@/hooks/useDataGrid";

export type SortConfig<T> = { key: keyof T | null; direction: "asc" | "desc" };

export type ColumnDefinition<T> = {
  header: React.ReactNode;
  field?: keyof T;
  cell?: (row: T) => React.ReactNode;
  footer?: (data: T[]) => React.ReactNode;
  className?: string;
  sortable?: boolean;
};

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

export const DataGrid = forwardRef<
  HTMLTableElement,
  DataGridProps<{ id: string | number }>
>(function DataGrid<T extends { id: string | number }>(
  {
    rows,
    columns,
    caption,
    className,
    onCheckedRowsChange,
    onSort,
    checkboxSelection = true,
  }: DataGridProps<T>,
  ref: React.Ref<HTMLTableElement>,
) {
  const {
    isAllChecked,
    sortConfig,
    handleCheckboxChange,
    handleSelectAll,
    handleSort,
    isRowChecked,
  } = useDataGridState(rows, onCheckedRowsChange, onSort);

  const [rowSelected, setRowSelected] = useState<T | undefined>();

  useEffect(() => {
    if (rowSelected) isRowChecked(rowSelected as T);
  }, [rowSelected, isRowChecked]);

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
    <NextUITable aria-label={caption} className={className} ref={ref}>
      <TableHeader columns={preparedColumns}>
        {(column) => (
          <TableColumn key={column.key}>
            {column.key === "checkbox" ? (
              <Checkbox
                isSelected={isAllChecked}
                onValueChange={(checked) => handleSelectAll(checked)}
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
                      if (field) {
                        handleSort(
                          field,
                          sortConfig.direction === "asc" ? "desc" : "asc",
                        );
                      }
                    }}
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
          <TableRow key={row.id}>
            {(columnKey) => {
              return (
                <TableCell>
                  {columnKey === "checkbox" ? (
                    <Checkbox
                      isSelected={rowSelected?.id === row.id}
                      onValueChange={() => {
                        handleCheckboxChange(row);
                        setRowSelected(row);
                      }}
                    />
                  ) : (
                    (() => {
                      const column = columns.find(
                        (c) => String(c.field) === columnKey,
                      );
                      if (!column) return null;

                      return column.cell
                        ? column.cell(row)
                        : column.field
                        ? String(row[column.field])
                        : null;
                    })()
                  )}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </NextUITable>
  );
});
DataGrid.displayName = "DataGrid";
