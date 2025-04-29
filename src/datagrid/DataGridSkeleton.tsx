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
  rows = 10,
  checkboxSelection = true,
  variant = "unstyled",
  className,
}: DataGridSkeletonProps): JSX.Element => {
  const variantClasses = GRID_VARIANTS[variant];

  return (
    <Table
      radius="sm"
      aria-label="Loading data"
      className={mergeTailwindClasses(
        "w-full relative overflow-hidden",
        className,
      )}
    >
      <TableHeader className={mergeTailwindClasses(variantClasses.thead)}>
        {Array(8)
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
        {Array(rows - 1)
          .fill(null)
          .map(
            (_, rowIndex): JSX.Element => (
              <TableRow
                key={rowIndex}
                className={mergeTailwindClasses(variantClasses.tr)}
              >
                {Array(8)
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
                          <Skeleton className="my-2 h-4 w-24 rounded-md" />
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
