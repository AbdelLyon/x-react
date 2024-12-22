/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as C, useEffect as D } from "react";
import { cn as b } from "../utils/x-react.es.js";
import { Table as $, TableHeader as z, TableColumn as B, Checkbox as T, TableBody as E, TableRow as G, TableCell as H } from "@nextui-org/react";
import { IconChevronUp as R, IconChevronDown as V } from "@tabler/icons-react";
const U = (x, n, u) => {
  const [o, k] = C([]), [j, v] = C(!1), [e, a] = C({
    key: null,
    direction: "asc"
  });
  return D(() => {
    v(o.length === x.length && x.length > 0);
  }, [o, x]), {
    selectedRows: o,
    isAllChecked: j,
    sortConfig: e,
    handleCheckboxChange: (d) => {
      const r = o.some((h) => h.id === d.id);
      let S;
      r ? S = o.filter((h) => h.id !== d.id) : S = [...o, d], k(S), n == null || n(S);
    },
    handleSelectAll: (d) => {
      const r = d ? [...x] : [];
      k(r), n == null || n(r);
    },
    handleSort: (d, r) => {
      a({ key: d, direction: r }), u == null || u(d, r);
    },
    isRowSelected: (d) => o.some((r) => r.id === d.id)
  };
}, q = {
  bordered: {
    table: "border border-divider",
    header: "border-b border-divider",
    column: "border-r border-divider last:border-r-0",
    row: "border-b border-divider last:border-b-0",
    cell: "border-r border-default-200 last:border-r-0"
  },
  striped: {
    table: "",
    header: "bg-content2",
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
function W({
  rows: x,
  columns: n,
  caption: u,
  className: o,
  onCheckedRowsChange: k,
  onSort: j,
  checkboxSelection: v = !0,
  classNames: e,
  variant: a = "unstyled",
  props: i
}) {
  const {
    isAllChecked: A,
    sortConfig: y,
    handleCheckboxChange: P,
    handleSelectAll: d,
    handleSort: r,
    isRowSelected: S
  } = U(x, k, j), h = q[a], I = [
    ...v ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...n.map((t, f) => ({
      ...t,
      key: String(t.field || f),
      label: t.header
    }))
  ];
  return /* @__PURE__ */ l.jsxs(
    $,
    {
      "aria-label": u,
      className: b(h.table, e == null ? void 0 : e.base, o),
      ...i == null ? void 0 : i.tableProps,
      children: [
        /* @__PURE__ */ l.jsx(
          z,
          {
            columns: I,
            className: b(h.header, e == null ? void 0 : e.thead),
            ...i == null ? void 0 : i.tableHeaderProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              B,
              {
                "aria-label": String(t.label || t.key),
                className: b("py-4", h.column, e == null ? void 0 : e.th),
                ...i == null ? void 0 : i.tableColumnProps,
                children: t.key === "checkbox" ? /* @__PURE__ */ l.jsx(
                  T,
                  {
                    isSelected: A,
                    onValueChange: d,
                    "aria-label": "Select all rows",
                    className: e == null ? void 0 : e.checkbox
                  }
                ) : /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    className: b(
                      "flex items-center gap-2",
                      e == null ? void 0 : e.headerContent
                    ),
                    children: [
                      t.label,
                      t.sortable && /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          className: b(
                            "relative w-4 h-4 cursor-pointer",
                            e == null ? void 0 : e.sortIcon
                          ),
                          onClick: () => {
                            var c;
                            const f = (c = n.find(
                              (g) => String(g.field) === t.key
                            )) == null ? void 0 : c.field;
                            f && f !== "actions" && r(
                              f,
                              y.direction === "asc" ? "desc" : "asc"
                            );
                          },
                          role: "button",
                          "aria-label": `Sort by ${t.label}`,
                          children: [
                            /* @__PURE__ */ l.jsx(
                              R,
                              {
                                size: 16,
                                className: b(
                                  "absolute -top-1",
                                  y.key === t.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                                )
                              }
                            ),
                            /* @__PURE__ */ l.jsx(
                              V,
                              {
                                size: 16,
                                className: b(
                                  "absolute top-1",
                                  y.key === t.key && y.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ l.jsx(
          E,
          {
            items: x,
            className: b(e == null ? void 0 : e.tbody),
            ...i == null ? void 0 : i.tableBodyProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              G,
              {
                "aria-label": `Row ${t.id}`,
                className: b(h.row, e == null ? void 0 : e.tr),
                ...i == null ? void 0 : i.tableRowProps,
                children: (f) => /* @__PURE__ */ l.jsx(
                  H,
                  {
                    className: b(h.cell, e == null ? void 0 : e.td),
                    ...i == null ? void 0 : i.tableCellProps,
                    children: f === "checkbox" ? /* @__PURE__ */ l.jsx(
                      T,
                      {
                        isSelected: S(t),
                        onValueChange: () => P(t),
                        "aria-label": `Select row ${t.id}`,
                        className: e == null ? void 0 : e.checkbox
                      }
                    ) : /* @__PURE__ */ l.jsx("div", { className: e == null ? void 0 : e.cellContent, children: (() => {
                      const c = n.find(
                        (g) => String(g.field) === f
                      );
                      return c ? c.cell ? c.cell(t) : c.field && c.field in t ? String(t[c.field]) : null : null;
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
  W as DataGrid
};
