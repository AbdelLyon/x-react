import { Skeleton } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { cn } from "@/utils";
import type { JSX } from "react";

interface DataGridSkeletonProps {
  columns: number;
  rows: number;
  checkboxSelection?: boolean;
  variant?: "bordered" | "striped" | "unstyled";
  className?: string;
}

const variantStyles = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 border-b border-default-200 last:border-b-0",
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 even:bg-content2",
  },
  unstyled: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4",
  },
} as const;

export const DataGridSkeleton = ({
  columns = 5,
  rows = 5,
  checkboxSelection = true,
  variant = "unstyled",
  className,
}: DataGridSkeletonProps): JSX.Element => {
  const variantClasses = variantStyles[variant];
  const actualColumns = checkboxSelection ? columns + 1 : columns;

  return (
    <Table radius="sm" aria-label="Loading data" className={className}>
      <TableHeader className={cn(variantClasses.header)}>
        {Array(actualColumns)
          .fill(null)
          .map((_, index) => (
            <TableColumn key={index} className={cn(variantClasses.column)}>
              {index === 0 && checkboxSelection ? (
                <Skeleton className="size-4 rounded-sm" />
              ) : (
                <Skeleton className="h-4 w-24 rounded-sm" />
              )}
            </TableColumn>
          ))}
      </TableHeader>

      <TableBody>
        {Array(rows)
          .fill(null)
          .map((_, rowIndex) => (
            <TableRow key={rowIndex} className={cn(variantClasses.row)}>
              {Array(actualColumns)
                .fill(null)
                .map((_, colIndex) => (
                  <TableCell key={colIndex}>
                    {colIndex === 0 && checkboxSelection ? (
                      <Skeleton className="size-4 rounded-sm" />
                    ) : (
                      <Skeleton className="h-4 w-full max-w-[200px] rounded-sm" />
                    )}
                  </TableCell>
                ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
