/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as C, useEffect as D } from "react";
import { cn as b } from "../utils/x-react.es.js";
import { Table as $, TableHeader as z, TableColumn as B, Checkbox as T, TableBody as E, TableRow as G, TableCell as H } from "@nextui-org/react";
import { IconChevronUp as R, IconChevronDown as V } from "@tabler/icons-react";
const U = {
  key: null,
  direction: "asc"
}, q = ({
  rows: x,
  onCheckedRowsChange: r,
  onSort: S
}) => {
  const [o, y] = C([]), [k, j] = C(!1), [e, g] = C(U);
  return D(() => {
    j(o.length === x.length && x.length > 0);
  }, [o, x]), {
    selectedRows: o,
    isAllChecked: k,
    sortConfig: e,
    handleCheckboxChange: (d) => {
      const a = o.some((f) => f.id === d.id) ? o.filter((f) => f.id !== d.id) : [...o, d];
      y(a), r == null || r(a);
    },
    handleSelectAll: (d) => {
      const n = d ? [...x] : [];
      y(n), r == null || r(n);
    },
    handleSort: (d, n) => {
      g({ key: d, direction: n }), S == null || S(d, n);
    },
    isRowSelected: (d) => o.some((n) => n.id === d.id)
  };
}, F = {
  bordered: {
    table: "border border-default-200",
    header: "border-b border-default-200",
    column: "border-r border-default-200 last:border-r-0",
    row: "border-b border-default-200 last:border-b-0",
    cell: "border-r border-default-200 last:border-r-0"
  },
  striped: {
    table: "",
    header: "bg-default-100",
    column: "",
    row: "even:bg-default-50",
    cell: ""
  },
  unstyled: {
    table: "",
    header: "",
    column: "",
    row: "",
    cell: ""
  }
};
function X({
  rows: x,
  columns: r,
  caption: S,
  className: o,
  onCheckedRowsChange: y,
  onSort: k,
  checkboxSelection: j = !0,
  classNames: e,
  variant: g = "unstyled",
  props: l
}) {
  const {
    isAllChecked: A,
    sortConfig: u,
    handleCheckboxChange: P,
    handleSelectAll: d,
    handleSort: n,
    isRowSelected: a
  } = q({ rows: x, onCheckedRowsChange: y, onSort: k }), f = F[g], I = [
    ...j ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...r.map((t, c) => ({
      ...t,
      key: String(t.field ?? c),
      label: t.header
    }))
  ];
  return /* @__PURE__ */ i.jsxs(
    $,
    {
      "aria-label": S,
      className: b(f.table, e == null ? void 0 : e.base, o),
      ...l == null ? void 0 : l.tableProps,
      children: [
        /* @__PURE__ */ i.jsx(
          z,
          {
            columns: I,
            className: b(f.header, e == null ? void 0 : e.thead),
            ...l == null ? void 0 : l.tableHeaderProps,
            children: (t) => /* @__PURE__ */ i.jsx(
              B,
              {
                "aria-label": String(t.label || t.key),
                className: b("py-4", f.column, e == null ? void 0 : e.th),
                ...l == null ? void 0 : l.tableColumnProps,
                children: t.key === "checkbox" ? /* @__PURE__ */ i.jsx(
                  T,
                  {
                    isSelected: A,
                    onValueChange: d,
                    "aria-label": "Select all rows",
                    className: e == null ? void 0 : e.checkbox
                  }
                ) : /* @__PURE__ */ i.jsxs(
                  "div",
                  {
                    className: b(
                      "flex items-center gap-2",
                      e == null ? void 0 : e.headerContent
                    ),
                    children: [
                      t.label,
                      t.sortable && /* @__PURE__ */ i.jsxs(
                        "div",
                        {
                          className: b(
                            "relative w-4 h-4 cursor-pointer",
                            e == null ? void 0 : e.sortIcon
                          ),
                          onClick: () => {
                            var h;
                            const c = (h = r.find(
                              (v) => String(v.field) === t.key
                            )) == null ? void 0 : h.field;
                            c && c !== "actions" && n(
                              c,
                              u.direction === "asc" ? "desc" : "asc"
                            );
                          },
                          role: "button",
                          "aria-label": `Sort by ${t.label}`,
                          children: [
                            /* @__PURE__ */ i.jsx(
                              R,
                              {
                                size: 16,
                                className: b(
                                  "absolute -top-1",
                                  u.key === t.key && u.direction === "asc" ? "opacity-100" : "opacity-30"
                                )
                              }
                            ),
                            /* @__PURE__ */ i.jsx(
                              V,
                              {
                                size: 16,
                                className: b(
                                  "absolute top-1",
                                  u.key === t.key && u.direction === "desc" ? "opacity-100" : "opacity-30"
                                )
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              },
              t.key
            )
          }
        ),
        /* @__PURE__ */ i.jsx(
          E,
          {
            items: x,
            className: b(e == null ? void 0 : e.tbody),
            ...l == null ? void 0 : l.tableBodyProps,
            children: (t) => /* @__PURE__ */ i.jsx(
              G,
              {
                "aria-label": `Row ${t.id}`,
                className: b(f.row, e == null ? void 0 : e.tr),
                ...l == null ? void 0 : l.tableRowProps,
                children: (c) => /* @__PURE__ */ i.jsx(
                  H,
                  {
                    className: b(f.cell, e == null ? void 0 : e.td),
                    ...l == null ? void 0 : l.tableCellProps,
                    children: c === "checkbox" ? /* @__PURE__ */ i.jsx(
                      T,
                      {
                        isSelected: a(t),
                        onValueChange: () => P(t),
                        "aria-label": `Select row ${t.id}`,
                        className: e == null ? void 0 : e.checkbox
                      }
                    ) : /* @__PURE__ */ i.jsx("div", { className: e == null ? void 0 : e.cellContent, children: (() => {
                      const h = r.find(
                        (v) => String(v.field) === c
                      );
                      return h ? h.cell ? h.cell(t) : h.field && h.field in t ? String(t[h.field]) : null : null;
                    })() })
                  }
                )
              },
              t.id
            )
          }
        )
      ]
    }
  );
}
export {
  X as DataGrid
};
