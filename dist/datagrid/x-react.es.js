/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as C, useEffect as I } from "react";
import { cn as o } from "../utils/x-react.es.js";
import { Table as D, TableHeader as $, TableColumn as z, Checkbox as T, TableBody as B, TableRow as E, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as H, IconChevronDown as R } from "@tabler/icons-react";
const V = (f, r, u) => {
  const [c, g] = C([]), [k, e] = C(!1), [j, i] = C({
    key: null,
    direction: "asc"
  });
  return I(() => {
    e(c.length === f.length && f.length > 0);
  }, [c, f]), {
    selectedRows: c,
    isAllChecked: k,
    sortConfig: j,
    handleCheckboxChange: (d) => {
      const n = c.some((S) => S.id === d.id);
      let b;
      n ? b = c.filter((S) => S.id !== d.id) : b = [...c, d], g(b), r == null || r(b);
    },
    handleSelectAll: (d) => {
      const n = d ? [...f] : [];
      g(n), r == null || r(n);
    },
    handleSort: (d, n) => {
      i({ key: d, direction: n }), u == null || u(d, n);
    },
    isRowSelected: (d) => c.some((n) => n.id === d.id)
  };
}, U = {
  bordered: {
    table: "rounded-none",
    header: "bg-content2 border border-divider",
    column: "bg-content2 py-4",
    row: "py-4 border-b border-divider last:border-b-0 hover:bg-content2",
    cell: ""
  },
  striped: {
    table: "rounded-none",
    header: "bg-content2 border border-divider",
    column: "bg-content2 py-4",
    row: "py-4 even:bg-content2",
    cell: ""
  },
  unstyled: {
    table: "rounded-none",
    header: "bg-content2 border border-divider",
    column: "bg-content2 py-4",
    row: "py-4 hover:bg-content2",
    cell: ""
  }
};
function Q({
  rows: f,
  columns: r,
  caption: u,
  onCheckedRowsChange: c,
  onSort: g,
  checkboxSelection: k = !0,
  classNames: e,
  variant: j = "unstyled",
  props: i
}) {
  const {
    isAllChecked: a,
    sortConfig: x,
    handleCheckboxChange: A,
    handleSelectAll: P,
    handleSort: d,
    isRowSelected: n
  } = V(f, c, g), b = U[j], S = [
    ...k ? [
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
    D,
    {
      "aria-label": u,
      className: o(b.table, e == null ? void 0 : e.table),
      ...i == null ? void 0 : i.tableProps,
      radius: "sm",
      children: [
        /* @__PURE__ */ l.jsx(
          $,
          {
            columns: S,
            className: o(b.header, e == null ? void 0 : e.header),
            ...i == null ? void 0 : i.tableHeaderProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              z,
              {
                "aria-label": String(t.label || t.key),
                className: o(b.column, e == null ? void 0 : e.column),
                ...i == null ? void 0 : i.tableColumnProps,
                children: t.key === "checkbox" ? /* @__PURE__ */ l.jsx(
                  T,
                  {
                    isSelected: a,
                    onValueChange: P,
                    "aria-label": "Select all rows",
                    className: e == null ? void 0 : e.checkbox
                  }
                ) : /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    className: o(
                      "flex items-center gap-2",
                      e == null ? void 0 : e.headerContent
                    ),
                    children: [
                      t.label,
                      t.sortable && /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          className: o(
                            "relative w-4 h-4 cursor-pointer",
                            e == null ? void 0 : e.sortIcon
                          ),
                          onClick: () => {
                            var h;
                            const y = (h = r.find(
                              (v) => String(v.field) === t.key
                            )) == null ? void 0 : h.field;
                            y && y !== "actions" && d(
                              y,
                              x.direction === "asc" ? "desc" : "asc"
                            );
                          },
                          role: "button",
                          "aria-label": `Sort by ${t.label}`,
                          children: [
                            /* @__PURE__ */ l.jsx(
                              H,
                              {
                                size: 16,
                                className: o(
                                  "absolute -top-1",
                                  x.key === t.key && x.direction === "asc" ? "opacity-100" : "opacity-30"
                                )
                              }
                            ),
                            /* @__PURE__ */ l.jsx(
                              R,
                              {
                                size: 16,
                                className: o(
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
          B,
          {
            items: f,
            className: o(e == null ? void 0 : e.tbody),
            ...i == null ? void 0 : i.tableBodyProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              E,
              {
                "aria-label": `Row ${t.id}`,
                className: o(b.row, e == null ? void 0 : e.row),
                ...i == null ? void 0 : i.tableRowProps,
                children: (y) => /* @__PURE__ */ l.jsx(
                  G,
                  {
                    className: o(b.cell, e == null ? void 0 : e.cell),
                    ...i == null ? void 0 : i.tableCellProps,
                    children: y === "checkbox" ? /* @__PURE__ */ l.jsx(
                      T,
                      {
                        isSelected: n(t),
                        onValueChange: () => A(t),
                        "aria-label": `Select row ${t.id}`,
                        className: e == null ? void 0 : e.checkbox
                      }
                    ) : /* @__PURE__ */ l.jsx("div", { className: e == null ? void 0 : e.cellContent, children: (() => {
                      const h = r.find(
                        (v) => String(v.field) === y
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
  Q as DataGrid
};
