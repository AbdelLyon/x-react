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
import { GRIDVARIANT } from "./DataGrid";

interface DataGridSkeletonProps {
  columns: number;
  rows: number;
  checkboxSelection?: boolean;
  variant?: "bordered" | "striped" | "unstyled";
  className?: string;
}

export const DataGridSkeleton = ({
  columns = 5,
  rows = 5,
  checkboxSelection = true,
  variant = "unstyled",
  className,
}: DataGridSkeletonProps): JSX.Element => {
  const variantClasses = GRIDVARIANT[variant];
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
