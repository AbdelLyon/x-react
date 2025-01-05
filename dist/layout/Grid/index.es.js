import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/index.es.js";
const Grid = forwardRef(
  ({
    children,
    data,
    columns = {
      default: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4
    },
    gap = {
      x: 4,
      y: 4
    },
    className
  }, ref) => {
    const gridClasses = cn(
      "grid",
      `grid-cols-${columns.default}`,
      columns.sm !== void 0 && `sm:grid-cols-${columns.sm}`,
      columns.md !== void 0 && `md:grid-cols-${columns.md}`,
      columns.lg !== void 0 && `lg:grid-cols-${columns.lg}`,
      columns.xl !== void 0 && `xl:grid-cols-${columns.xl}`,
      gap.x !== void 0 && `gap-x-${gap.x}`,
      gap.y !== void 0 && `gap-y-${gap.y}`,
      className
    );
    return /* @__PURE__ */ jsx("div", { ref, className: gridClasses, children: data ? data.map(
      (item) => /* @__PURE__ */ jsx(GridItem, { colSpan: item.colSpan, children: item.content }, item.id)
    ) : children });
  }
);
Grid.displayName = "Grid";
const GridItem = forwardRef(
  ({ children, colSpan, className }, ref) => {
    const itemClasses = cn(
      (colSpan == null ? void 0 : colSpan.default) !== void 0 && `col-span-${colSpan.default}`,
      (colSpan == null ? void 0 : colSpan.sm) !== void 0 && `sm:col-span-${colSpan.sm}`,
      (colSpan == null ? void 0 : colSpan.md) !== void 0 && `md:col-span-${colSpan.md}`,
      (colSpan == null ? void 0 : colSpan.lg) !== void 0 && `lg:col-span-${colSpan.lg}`,
      (colSpan == null ? void 0 : colSpan.xl) !== void 0 && `xl:col-span-${colSpan.xl}`,
      className
    );
    return /* @__PURE__ */ jsx("div", { ref, className: itemClasses, children });
  }
);
GridItem.displayName = "GridItem";
export {
  Grid,
  GridItem
};
