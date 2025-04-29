import { mergeTailwindClasses } from "@/utils";
import type { JSX } from "react";
import { GRID_VARIANTS } from "./variants";
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

interface DataGridSkeletonProps {
  columns: number;
  rows: number;
  checkboxSelection?: boolean;
  variant?: "bordered" | "striped" | "unstyled";
  className?: string;
}

export const DataGridSkeleton = ({
  columns = 5,
  rows = 10,
  checkboxSelection = true,
  variant = "unstyled",
  className,
}: DataGridSkeletonProps): JSX.Element => {
  const variantClasses = GRID_VARIANTS[variant];
  const actualColumns = checkboxSelection ? columns + 1 : columns;

  return (
    <Table
      radius="sm"
      aria-label="Loading data"
      className={mergeTailwindClasses(
        "w-full relative overflow-auto",
        className,
      )}
    >
      <TableHeader className={mergeTailwindClasses(variantClasses.thead)}>
        {Array(actualColumns)
          .fill(null)
          .map(
            (_, index): JSX.Element => (
              <TableColumn
                key={index}
                className={mergeTailwindClasses(variantClasses.th)}
              >
                <div className="flex items-center gap-2">
                  {index === 0 && checkboxSelection ? (
                    <Skeleton className="size-4 rounded-md" />
                  ) : (
                    <Skeleton className="h-4 w-24 rounded-md" />
                  )}
                  <div className="relative size-4 opacity-0">
                    <div className="absolute -top-1">
                      <Skeleton className="size-4 rounded-md opacity-30" />
                    </div>
                    <div className="absolute top-1">
                      <Skeleton className="size-4 rounded-md opacity-30" />
                    </div>
                  </div>
                </div>
              </TableColumn>
            ),
          )}
      </TableHeader>

      <TableBody>
        {Array(rows)
          .fill(null)
          .map(
            (_, rowIndex): JSX.Element => (
              <TableRow
                key={rowIndex}
                className={mergeTailwindClasses(variantClasses.tr)}
              >
                {Array(actualColumns)
                  .fill(null)
                  .map(
                    (_, colIndex): JSX.Element => (
                      <TableCell
                        key={colIndex}
                        className={mergeTailwindClasses(variantClasses.td)}
                      >
                        {colIndex === 0 && checkboxSelection ? (
                          <Skeleton className="size-4 rounded-md" />
                        ) : (
                          <Skeleton className="my-4 h-4 w-full max-w-[200px] rounded-md" />
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
