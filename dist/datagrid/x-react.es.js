/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as a, useEffect as I } from "react";
import { cn as o } from "../utils/x-react.es.js";
import { Table as D, TableHeader as $, TableColumn as z, Checkbox as T, TableBody as B, TableRow as E, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as H, IconChevronDown as R } from "@tabler/icons-react";
const V = (f, r, S) => {
  const [c, u] = a([]), [k, e] = a(!1), [j, l] = a({
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
      const n = c.some((g) => g.id === d.id);
      let b;
      n ? b = c.filter((g) => g.id !== d.id) : b = [...c, d], u(b), r == null || r(b);
    },
    handleSelectAll: (d) => {
      const n = d ? [...f] : [];
      u(n), r == null || r(n);
    },
    handleSort: (d, n) => {
      l({ key: d, direction: n }), S == null || S(d, n);
    },
    isRowSelected: (d) => c.some((n) => n.id === d.id)
  };
}, w = {
  bordered: {
    table: "border border-divider rounded-xl p-0 shadow-lg",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "border-b border-divider last:border-b-0 hover:bg-content2",
    cell: ""
  },
  striped: {
    table: "rounded-xl shadow-lg",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "even:bg-content2 hover:bg-content2",
    cell: ""
  },
  unstyled: {
    table: "rounded-xl shadow-lg",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "hover:bg-content2",
    cell: ""
  }
};
function O({
  rows: f,
  columns: r,
  caption: S,
  onCheckedRowsChange: c,
  onSort: u,
  checkboxSelection: k = !0,
  classNames: e,
  variant: j = "unstyled",
  props: l
}) {
  const {
    isAllChecked: C,
    sortConfig: y,
    handleCheckboxChange: A,
    handleSelectAll: P,
    handleSort: d,
    isRowSelected: n
  } = V(f, c, u), b = w[j], g = [
    ...k ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...r.map((t, x) => ({
      ...t,
      key: String(t.field || x),
      label: t.header
    }))
  ];
  return /* @__PURE__ */ i.jsxs(
    D,
    {
      "aria-label": S,
      className: o(b.table, e == null ? void 0 : e.base),
      ...l == null ? void 0 : l.tableProps,
      children: [
        /* @__PURE__ */ i.jsx(
          $,
          {
            columns: g,
            className: o(b.header, e == null ? void 0 : e.thead),
            ...l == null ? void 0 : l.tableHeaderProps,
            children: (t) => /* @__PURE__ */ i.jsx(
              z,
              {
                "aria-label": String(t.label || t.key),
                className: o(b.column, e == null ? void 0 : e.th),
                ...l == null ? void 0 : l.tableColumnProps,
                children: t.key === "checkbox" ? /* @__PURE__ */ i.jsx(
                  T,
                  {
                    isSelected: C,
                    onValueChange: P,
                    "aria-label": "Select all rows",
                    className: e == null ? void 0 : e.checkbox
                  }
                ) : /* @__PURE__ */ i.jsxs(
                  "div",
                  {
                    className: o(
                      "flex items-center gap-2",
                      e == null ? void 0 : e.headerContent
                    ),
                    children: [
                      t.label,
                      t.sortable && /* @__PURE__ */ i.jsxs(
                        "div",
                        {
                          className: o(
                            "relative w-4 h-4 cursor-pointer",
                            e == null ? void 0 : e.sortIcon
                          ),
                          onClick: () => {
                            var h;
                            const x = (h = r.find(
                              (v) => String(v.field) === t.key
                            )) == null ? void 0 : h.field;
                            x && x !== "actions" && d(
                              x,
                              y.direction === "asc" ? "desc" : "asc"
                            );
                          },
                          role: "button",
                          "aria-label": `Sort by ${t.label}`,
                          children: [
                            /* @__PURE__ */ i.jsx(
                              H,
                              {
                                size: 16,
                                className: o(
                                  "absolute -top-1",
                                  y.key === t.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                                )
                              }
                            ),
                            /* @__PURE__ */ i.jsx(
                              R,
                              {
                                size: 16,
                                className: o(
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
        /* @__PURE__ */ i.jsx(
          B,
          {
            items: f,
            className: o(e == null ? void 0 : e.tbody),
            ...l == null ? void 0 : l.tableBodyProps,
            children: (t) => /* @__PURE__ */ i.jsx(
              E,
              {
                "aria-label": `Row ${t.id}`,
                className: o(b.row, e == null ? void 0 : e.tr),
                ...l == null ? void 0 : l.tableRowProps,
                children: (x) => /* @__PURE__ */ i.jsx(
                  G,
                  {
                    className: o(b.cell, e == null ? void 0 : e.td),
                    ...l == null ? void 0 : l.tableCellProps,
                    children: x === "checkbox" ? /* @__PURE__ */ i.jsx(
                      T,
                      {
                        isSelected: n(t),
                        onValueChange: () => A(t),
                        "aria-label": `Select row ${t.id}`,
                        className: e == null ? void 0 : e.checkbox
                      }
                    ) : /* @__PURE__ */ i.jsx("div", { className: e == null ? void 0 : e.cellContent, children: (() => {
                      const h = r.find(
                        (v) => String(v.field) === x
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
  O as DataGrid
};
