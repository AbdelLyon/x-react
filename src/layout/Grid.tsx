import type { ReactNode, ForwardedRef, JSX } from "react";
import { forwardRef } from "react";
import { cn } from "@/utils";

// Types pour les données du tableau
export type GridData = {
  id: string | number;
  content: ReactNode;
  colSpan?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
};

interface GridProps {
  children?: ReactNode;
  data?: GridData[];
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: {
    x?: number;
    y?: number;
  };
  className?: string;
}

export const Grid = forwardRef(
  (
    {
      children,
      data,
      columns = {
        default: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
      },
      gap = {
        x: 4,
        y: 4,
      },
      className,
    }: GridProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const gridClasses = cn(
      "grid",
      `grid-cols-${columns.default}`,
      columns.sm !== undefined && `sm:grid-cols-${columns.sm}`,
      columns.md !== undefined && `md:grid-cols-${columns.md}`,
      columns.lg !== undefined && `lg:grid-cols-${columns.lg}`,
      columns.xl !== undefined && `xl:grid-cols-${columns.xl}`,
      gap.x !== undefined && `gap-x-${gap.x}`,
      gap.y !== undefined && `gap-y-${gap.y}`,
      className,
    );

    return (
      <div ref={ref} className={gridClasses}>
        {data
          ? data.map(
              (item): JSX.Element => (
                <GridItem key={item.id} colSpan={item.colSpan}>
                  {item.content}
                </GridItem>
              ),
            )
          : children}
      </div>
    );
  },
);

Grid.displayName = "Grid";

interface GridItemProps {
  children: ReactNode;
  colSpan?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  className?: string;
}

export const GridItem = forwardRef(
  (
    { children, colSpan, className }: GridItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const itemClasses = cn(
      colSpan?.default !== undefined && `col-span-${colSpan.default}`,
      colSpan?.sm !== undefined && `sm:col-span-${colSpan.sm}`,
      colSpan?.md !== undefined && `md:col-span-${colSpan.md}`,
      colSpan?.lg !== undefined && `lg:col-span-${colSpan.lg}`,
      colSpan?.xl !== undefined && `xl:col-span-${colSpan.xl}`,
      className,
    );

    return (
      <div ref={ref} className={itemClasses}>
        {children}
      </div>
    );
  },
);

GridItem.displayName = "GridItem";
