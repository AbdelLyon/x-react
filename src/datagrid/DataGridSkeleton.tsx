import { mergeTailwindClasses } from "@/utils";
import type { JSX } from "react";
import { GRID_VARIANTS } from "./variants";
import { Skeleton, TableBody, TableCell, TableRow } from "@heroui/react";

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
}: DataGridSkeletonProps): JSX.Element => {
  const variantClasses = GRID_VARIANTS[variant];

  return (
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
  );
};
