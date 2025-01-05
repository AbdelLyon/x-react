import { jsxs, jsx } from "react/jsx-runtime";
import { Skeleton } from "@nextui-org/skeleton";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { cn } from "../../utils/index.es.js";
import { GRID_VARIANTS } from "../../data/default/index.es.js";
const DataGridSkeleton = ({
  columns = 5,
  rows = 5,
  checkboxSelection = true,
  variant = "unstyled",
  className
}) => {
  const variantClasses = GRID_VARIANTS[variant];
  const actualColumns = checkboxSelection ? columns + 1 : columns;
  return /* @__PURE__ */ jsxs(Table, { radius: "sm", "aria-label": "Loading data", className, children: [
    /* @__PURE__ */ jsx(TableHeader, { className: cn(variantClasses.thead), children: Array(actualColumns).fill(null).map((_, index) => /* @__PURE__ */ jsx(TableColumn, { className: cn(variantClasses.th), children: index === 0 && checkboxSelection ? /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md" }) : /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24 rounded-md" }) }, index)) }),
    /* @__PURE__ */ jsx(TableBody, { children: Array(rows).fill(null).map((_, rowIndex) => /* @__PURE__ */ jsx(TableRow, { className: cn(variantClasses.tr), children: Array(actualColumns).fill(null).map((_2, colIndex) => /* @__PURE__ */ jsx(TableCell, { children: colIndex === 0 && checkboxSelection ? /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md" }) : /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, colIndex)) }, rowIndex)) })
  ] });
};
export {
  DataGridSkeleton
};
