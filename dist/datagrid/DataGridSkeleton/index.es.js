import { jsx } from "react/jsx-runtime";
import { mergeTailwindClasses } from "../../utils/index.es.js";
import { GRID_VARIANTS } from "../variants/index.es.js";
import { TableBody, TableRow, TableCell, Skeleton } from "@heroui/react";
const DataGridSkeleton = ({
  rows = 10,
  checkboxSelection = true,
  variant = "unstyled"
}) => {
  const variantClasses = GRID_VARIANTS[variant];
  return /* @__PURE__ */ jsx(TableBody, { children: Array(rows - 1).fill(null).map(
    (_, rowIndex) => /* @__PURE__ */ jsx(
      TableRow,
      {
        className: mergeTailwindClasses(variantClasses.tr),
        children: Array(8).fill(null).map(
          (_2, colIndex) => /* @__PURE__ */ jsx(
            TableCell,
            {
              className: mergeTailwindClasses(variantClasses.td),
              children: colIndex === 0 && checkboxSelection ? /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md" }) : /* @__PURE__ */ jsx(Skeleton, { className: "my-2 h-4 w-24 rounded-md" })
            },
            colIndex
          )
        )
      },
      rowIndex
    )
  ) });
};
export {
  DataGridSkeleton
};
