import { Skeleton } from "@nextui-org/skeleton";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { cn } from "@/utils";
import type { JSX } from "react";
import { GRID_VARIANTS } from "@/data/default";

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
  const variantClasses = GRID_VARIANTS[variant];
  const actualColumns = checkboxSelection ? columns + 1 : columns;

  return (
    <Table radius="sm" aria-label="Loading data" className={className}>
      <TableHeader className={cn(variantClasses.thead)}>
        {Array(actualColumns)
          .fill(null)
          .map(
            (_, index): JSX.Element => (
              <TableColumn key={index} className={cn(variantClasses.th)}>
                {index === 0 && checkboxSelection ? (
                  <Skeleton className="size-4 rounded-md" />
                ) : (
                  <Skeleton className="h-4 w-24 rounded-md" />
                )}
              </TableColumn>
            ),
          )}
      </TableHeader>

      <TableBody>
        {Array(rows)
          .fill(null)
          .map(
            (_, rowIndex): JSX.Element => (
              <TableRow key={rowIndex} className={cn(variantClasses.tr)}>
                {Array(actualColumns)
                  .fill(null)
                  .map(
                    (_, colIndex): JSX.Element => (
                      <TableCell key={colIndex}>
                        {colIndex === 0 && checkboxSelection ? (
                          <Skeleton className="size-4 rounded-md" />
                        ) : (
                          <Skeleton className="h-4 w-full max-w-[200px] rounded-md" />
                        )}
                      </TableCell>
                    ),
                  )}
              </TableRow>
            ),
          )}
      </TableBody>
    </Table>
  );
};
