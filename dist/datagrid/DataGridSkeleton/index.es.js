import { jsxs, jsx } from "react/jsx-runtime";
import { mergeTailwindClasses } from "../../utils/index.es.js";
import { GRID_VARIANTS } from "../variants/index.es.js";
import { Table, TableHeader, TableColumn, Skeleton, TableBody, TableRow, TableCell } from "@heroui/react";
const DataGridSkeleton = ({
  columns = 5,
  rows = 10,
  checkboxSelection = true,
  variant = "unstyled",
  className
}) => {
  const variantClasses = GRID_VARIANTS[variant];
  const actualColumns = checkboxSelection ? columns + 1 : columns;
  return /* @__PURE__ */ jsxs(
    Table,
    {
      radius: "sm",
      "aria-label": "Loading data",
      className: mergeTailwindClasses(
        "w-full relative overflow-hidden",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(TableHeader, { className: mergeTailwindClasses(variantClasses.thead), children: Array(actualColumns).fill(null).map(
          (_, index) => /* @__PURE__ */ jsx(
            TableColumn,
            {
              className: mergeTailwindClasses(variantClasses.th),
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                index === 0 && checkboxSelection ? /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md" }) : /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24 rounded-md" }),
                /* @__PURE__ */ jsxs("div", { className: "relative size-4 opacity-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-1", children: /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md opacity-30" }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-1", children: /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md opacity-30" }) })
                ] })
              ] })
            },
            index
          )
        ) }),
        /* @__PURE__ */ jsx(TableBody, { children: Array(rows - 1).fill(null).map(
          (_, rowIndex) => /* @__PURE__ */ jsx(
            TableRow,
            {
              className: mergeTailwindClasses(variantClasses.tr),
              children: Array(actualColumns).fill(null).map(
                (_2, colIndex) => /* @__PURE__ */ jsx(
                  TableCell,
                  {
                    className: mergeTailwindClasses(variantClasses.td),
                    children: colIndex === 0 && checkboxSelection ? /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md" }) : /* @__PURE__ */ jsx(Skeleton, { className: "my-2 h-4 w-full max-w-[150px] rounded-md" })
                  },
                  colIndex
                )
              )
            },
            rowIndex
          )
        ) })
      ]
    }
  );
};
export {
  DataGridSkeleton
};
