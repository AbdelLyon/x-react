import { useDataGridState } from "@/hooks/useDataGridState";
import { cn } from "@/utils";
import { useEffect, type Key } from "react";
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
import { useInView } from "react-intersection-observer";
import type {
  ColumnDefinition,
  DataGridProps,
  ExtendedColumn,
} from "@/types/datagrid";
import { GRID_VARIANTS } from "@/data/default";

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
    isAllChecked,
    sortConfig,
    handleSelectionChange,
    handleSelectAll,
    handleSortChange,
    checkedRows,
  } = useDataGridState({
    rows,
    onSelectionChange,
    onSortChange,
  });

  const { inView } = useInView({
    threshold: 0.5,
    rootMargin: "100px",
  });

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
      handleSortChange(
        columnField,
        sortConfig.direction === "asc" ? "desc" : "asc",
      );
    }
  };

  return (
    <TableRoot aria-label="data-grid" aria-labelledby="data-grid" {...props}>
      <TableHeader
        aria-label="data-grid-header"
        aria-labelledby="data-grid-header"
        columns={preparedColumns}
        className={cn(variantClasses.header)}
        {...childrenProps?.tableHeaderProps}
      >
        {(column) => (
          <TableColumn
            key={column.key}
            aria-labelledby={column.key}
            aria-label={getColumnAriaLabel(column)}
            className={cn(variantClasses.column)}
            {...childrenProps?.tableColumnProps}
          >
            {column.key === "checkbox" && showSelectionCheckboxes ? (
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
      <TableBody items={rows} {...childrenProps?.tableBodyProps}>
        {(row: T) => {
          return (
            <TableRow
              key={row.id}
              aria-label={`Row ${row.id}`}
              aria-labelledby={`Row ${row.id}`}
              className={cn(variantClasses.row)}
              {...childrenProps?.tableRowProps}
            >
              {(columnKey) => {
                console.log(checkedRows.has(row));

                return (
                  <TableCell {...childrenProps?.tableCellProps}>
                    {columnKey === "checkbox" && showSelectionCheckboxes ? (
                      <Checkbox
                        checked={checkedRows.has(row)}
                        onValueChange={() => {
                          handleSelectionChange(row);
                        }}
                        aria-label={`Select row ${row.id}`}
                        className={classNames?.checkbox}
                      />
                    ) : (
                      <div className={classNames?.cellContent}>
                        {getCellContent(columnKey, row, columns)}
                      </div>
                    )}
                  </TableCell>
                );
              }}
            </TableRow>
          );
        }}
      </TableBody>
    </TableRoot>
  );
}
