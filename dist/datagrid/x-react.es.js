/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as C, useEffect as D } from "react";
import { cn as b } from "../utils/x-react.es.js";
import { Table as $, TableHeader as z, TableColumn as B, Checkbox as T, TableBody as E, TableRow as G, TableCell as H } from "@nextui-org/react";
import { IconChevronUp as R, IconChevronDown as V } from "@tabler/icons-react";
const U = (f, r, u) => {
  const [o, g] = C([]), [k, j] = C(!1), [e, v] = C({
    key: null,
    direction: "asc"
  });
  return D(() => {
    j(o.length === f.length && f.length > 0);
  }, [o, f]), {
    selectedRows: o,
    isAllChecked: k,
    sortConfig: e,
    handleCheckboxChange: (d) => {
      const n = o.some((c) => c.id === d.id);
      let S;
      n ? S = o.filter((c) => c.id !== d.id) : S = [...o, d], g(S), r == null || r(S);
    },
    handleSelectAll: (d) => {
      const n = d ? [...f] : [];
      g(n), r == null || r(n);
    },
    handleSort: (d, n) => {
      v({ key: d, direction: n }), u == null || u(d, n);
    },
    isRowSelected: (d) => o.some((n) => n.id === d.id)
  };
}, q = {
  bordered: {
    table: "border border-divider rounded-lg",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "border-b border-divider last:border-b-0 hover:opacity-80",
    cell: ""
  },
  striped: {
    table: "",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "even:bg-content2 hover:opacity-80",
    cell: ""
  },
  unstyled: {
    table: "",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "hover:opacity-80",
    cell: ""
  }
};
function W({
  rows: f,
  columns: r,
  caption: u,
  className: o,
  onCheckedRowsChange: g,
  onSort: k,
  checkboxSelection: j = !0,
  classNames: e,
  variant: v = "unstyled",
  props: i
}) {
  const {
    isAllChecked: A,
    sortConfig: x,
    handleCheckboxChange: P,
    handleSelectAll: d,
    handleSort: n,
    isRowSelected: S
  } = U(f, g, k), c = q[v], I = [
    ...j ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...r.map((t, y) => ({
      ...t,
      key: String(t.field || y),
      label: t.header
    }))
  ];
  return /* @__PURE__ */ l.jsxs(
    $,
    {
      "aria-label": u,
      className: b(c.table, e == null ? void 0 : e.base, o),
      ...i == null ? void 0 : i.tableProps,
      radius: "lg",
      children: [
        /* @__PURE__ */ l.jsx(
          z,
          {
            columns: I,
            className: b(c.header, e == null ? void 0 : e.thead),
            ...i == null ? void 0 : i.tableHeaderProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              B,
              {
                "aria-label": String(t.label || t.key),
                className: b(c.column, e == null ? void 0 : e.th),
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
                            var h;
                            const y = (h = r.find(
                              (a) => String(a.field) === t.key
                            )) == null ? void 0 : h.field;
                            y && y !== "actions" && n(
                              y,
                              x.direction === "asc" ? "desc" : "asc"
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
                                  x.key === t.key && x.direction === "asc" ? "opacity-100" : "opacity-30"
                                )
                              }
                            ),
                            /* @__PURE__ */ l.jsx(
                              V,
                              {
                                size: 16,
                                className: b(
                                  "absolute top-1",
                                  x.key === t.key && x.direction === "desc" ? "opacity-100" : "opacity-30"
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
            items: f,
            className: b(e == null ? void 0 : e.tbody),
            ...i == null ? void 0 : i.tableBodyProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              G,
              {
                "aria-label": `Row ${t.id}`,
                className: b(c.row, e == null ? void 0 : e.tr),
                ...i == null ? void 0 : i.tableRowProps,
                children: (y) => /* @__PURE__ */ l.jsx(
                  H,
                  {
                    className: b(c.cell, e == null ? void 0 : e.td),
                    ...i == null ? void 0 : i.tableCellProps,
                    children: y === "checkbox" ? /* @__PURE__ */ l.jsx(
                      T,
                      {
                        isSelected: S(t),
                        onValueChange: () => P(t),
                        "aria-label": `Select row ${t.id}`,
                        className: e == null ? void 0 : e.checkbox
                      }
                    ) : /* @__PURE__ */ l.jsx("div", { className: e == null ? void 0 : e.cellContent, children: (() => {
                      const h = r.find(
                        (a) => String(a.field) === y
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
  W as DataGrid
};
