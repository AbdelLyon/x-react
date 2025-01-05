import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { useDataGridState as v } from "../../useDataGridState/datagrid/useDataGridState.es.js";
import { cn as o } from "../../../utils/utils.es.js";
import { Table as D, TableHeader as G, TableColumn as H, TableBody as I, TableRow as R, TableCell as w } from "@nextui-org/react";
import { IconChevronUp as z, IconChevronDown as j } from "@tabler/icons-react";
import { DataGridSkeleton as A } from "../../DataGridSkeleton/datagrid/DataGridSkeleton.es.js";
import { GRID_VARIANTS as B } from "../../../data/default/data/default.es.js";
function K({
  rows: b,
  columns: i,
  onSortChange: n,
  variant: r = "unstyled",
  isLoading: y = !1,
  onGridScrollEnd: d,
  childrenProps: e,
  ...l
}) {
  var C, c;
  const {
    sortConfig: s,
    processedColumns: N,
    formatSortHeader: S,
    extractCellValue: u,
    extractColumnHeader: x,
    onSort: k,
    handleGridScroll: T
  } = v({
    onSortChange: n,
    columns: i,
    onGridScrollEnd: d
  }), f = B[r];
  return y ? /* @__PURE__ */ t(
    A,
    {
      columns: i.length,
      checkboxSelection: l.showSelectionCheckboxes,
      variant: r,
      rows: b.length
    }
  ) : /* @__PURE__ */ m(
    D,
    {
      "aria-label": "data-grid",
      ...l,
      classNames: {
        ...l.classNames,
        th: o(f.th, (C = l.classNames) == null ? void 0 : C.th),
        tr: o(f.tr, (c = l.classNames) == null ? void 0 : c.tr)
      },
      onScroll: T,
      children: [
        /* @__PURE__ */ t(
          G,
          {
            columns: N,
            ...e == null ? void 0 : e.tableHeaderProps,
            children: (a) => /* @__PURE__ */ t(
              H,
              {
                "aria-label": x(a),
                ...e == null ? void 0 : e.tableColumnProps,
                children: /* @__PURE__ */ m("div", { className: "flex items-center gap-2", children: [
                  a.header,
                  a.sortable !== !1 && /* @__PURE__ */ m(
                    "div",
                    {
                      className: o("relative size-4 cursor-pointer"),
                      onClick: () => k(a),
                      role: "button",
                      "aria-label": S(a.header),
                      children: [
                        /* @__PURE__ */ t(
                          z,
                          {
                            size: 16,
                            className: o(
                              "absolute -top-1",
                              s.field === a.key && s.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ t(
                          j,
                          {
                            size: 16,
                            className: o(
                              "absolute top-1",
                              s.field === a.key && s.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              a.key
            )
          }
        ),
        /* @__PURE__ */ t(I, { items: b, ...e == null ? void 0 : e.tableBodyProps, children: (a) => /* @__PURE__ */ t(R, { ...e == null ? void 0 : e.tableRowProps, children: (g) => /* @__PURE__ */ t(w, { ...e == null ? void 0 : e.tableCellProps, children: u(g, a, i) }) }, a.id) })
      ]
    }
  );
}
export {
  K as DataGrid
};
