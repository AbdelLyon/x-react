import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import { Table, TableHeader, TableColumn, Skeleton, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { cn } from "../../utils/x-react.es.js";
import { GRID_VARIANTS } from "../../data/default/x-react.es.js";
const DataGridSkeleton = ({
  columns = 5,
  rows = 5,
  checkboxSelection = true,
  variant = "unstyled",
  className
}) => {
  const variantClasses = GRID_VARIANTS[variant];
  const actualColumns = checkboxSelection ? columns + 1 : columns;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { radius: "sm", "aria-label": "Loading data", className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { className: cn(variantClasses.thead), children: Array(actualColumns).fill(null).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableColumn, { className: cn(variantClasses.th), children: index === 0 && checkboxSelection ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-4 rounded-md" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24 rounded-md" }) }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: Array(rows).fill(null).map((_, rowIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: cn(variantClasses.tr), children: Array(actualColumns).fill(null).map((_2, colIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: colIndex === 0 && checkboxSelection ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-4 rounded-md" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, colIndex)) }, rowIndex)) })
  ] });
};
export {
  DataGridSkeleton
};
//# sourceMappingURL=x-react.es.js.map
