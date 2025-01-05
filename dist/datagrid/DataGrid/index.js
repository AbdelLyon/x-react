import { jsx as a, jsxs as i } from "react/jsx-runtime";
import { useDataGridState as x } from "../useDataGridState/index.js";
import { cn as l } from "../../utils/index.js";
import { Table as k, TableHeader as T, TableColumn as g, TableBody as v, TableRow as D, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as H, IconChevronDown as I } from "@tabler/icons-react";
import { DataGridSkeleton as R } from "../DataGridSkeleton/index.js";
import { GRID_VARIANTS as w } from "../../data/default/index.js";
function _({
  rows: c,
  columns: s,
  onSortChange: m,
  variant: n = "unstyled",
  isLoading: b = !1,
  onGridScrollEnd: h,
  childrenProps: t,
  ...r
}) {
  const {
    sortConfig: o,
    processedColumns: f,
    formatSortHeader: C,
    extractCellValue: p,
    extractColumnHeader: y,
    onSort: N,
    handleGridScroll: S
  } = x({
    onSortChange: m,
    columns: s,
    onGridScrollEnd: h
  }), d = w[n];
  return b ? /* @__PURE__ */ a(
    R,
    {
      columns: s.length,
      checkboxSelection: r.showSelectionCheckboxes,
      variant: n,
      rows: c.length
    }
  ) : /* @__PURE__ */ i(
    k,
    {
      "aria-label": "data-grid",
      ...r,
      classNames: {
        ...r.classNames,
        th: l(d.th, r.classNames?.th),
        tr: l(d.tr, r.classNames?.tr)
      },
      onScroll: S,
      children: [
        /* @__PURE__ */ a(
          T,
          {
            columns: f,
            ...t?.tableHeaderProps,
            children: (e) => /* @__PURE__ */ a(
              g,
              {
                "aria-label": y(e),
                ...t?.tableColumnProps,
                children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                  e.header,
                  e.sortable !== !1 && /* @__PURE__ */ i(
                    "div",
                    {
                      className: l("relative size-4 cursor-pointer"),
                      onClick: () => N(e),
                      role: "button",
                      "aria-label": C(e.header),
                      children: [
                        /* @__PURE__ */ a(
                          H,
                          {
                            size: 16,
                            className: l(
                              "absolute -top-1",
                              o.field === e.key && o.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ a(
                          I,
                          {
                            size: 16,
                            className: l(
                              "absolute top-1",
                              o.field === e.key && o.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              e.key
            )
          }
        ),
        /* @__PURE__ */ a(v, { items: c, ...t?.tableBodyProps, children: (e) => /* @__PURE__ */ a(D, { ...t?.tableRowProps, children: (u) => /* @__PURE__ */ a(G, { ...t?.tableCellProps, children: p(u, e, s) }) }, e.id) })
      ]
    }
  );
}
export {
  _ as DataGrid
};
//# sourceMappingURL=index.js.map
