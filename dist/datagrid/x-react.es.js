/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as C, useEffect as I } from "react";
import { cn as o } from "../utils/x-react.es.js";
import { Table as D, TableHeader as $, TableColumn as z, Checkbox as T, TableBody as B, TableRow as E, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as H, IconChevronDown as R } from "@tabler/icons-react";
const V = (x, r, S) => {
  const [c, u] = C([]), [k, e] = C(!1), [j, i] = C({
    key: null,
    direction: "asc"
  });
  return I(() => {
    e(c.length === x.length && x.length > 0);
  }, [c, x]), {
    selectedRows: c,
    isAllChecked: k,
    sortConfig: j,
    handleCheckboxChange: (n) => {
      const d = c.some((g) => g.id === n.id);
      let b;
      d ? b = c.filter((g) => g.id !== n.id) : b = [...c, n], u(b), r == null || r(b);
    },
    handleSelectAll: (n) => {
      const d = n ? [...x] : [];
      u(d), r == null || r(d);
    },
    handleSort: (n, d) => {
      i({ key: n, direction: d }), S == null || S(n, d);
    },
    isRowSelected: (n) => c.some((d) => d.id === n.id)
  };
}, U = {
  bordered: {
    table: "border border-divider",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "border-b border-divider last:border-b-0 hover:bg-content2",
    cell: ""
  },
  striped: {
    table: "",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "even:bg-content2 hover:bg-content2",
    cell: ""
  },
  unstyled: {
    table: "",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "hover:bg-content2",
    cell: ""
  }
};
function Q({
  rows: x,
  columns: r,
  caption: S,
  onCheckedRowsChange: c,
  onSort: u,
  checkboxSelection: k = !0,
  classNames: e,
  variant: j = "unstyled",
  props: i
}) {
  const {
    isAllChecked: a,
    sortConfig: y,
    handleCheckboxChange: A,
    handleSelectAll: P,
    handleSort: n,
    isRowSelected: d
  } = V(x, c, u), b = U[j], g = [
    ...k ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...r.map((t, f) => ({
      ...t,
      key: String(t.field || f),
      label: t.header
    }))
  ];
  return /* @__PURE__ */ l.jsxs(
    D,
    {
      "aria-label": S,
      className: o(b.table, e == null ? void 0 : e.base),
      ...i == null ? void 0 : i.tableProps,
      radius: "lg",
      children: [
        /* @__PURE__ */ l.jsx(
          $,
          {
            columns: g,
            className: o(b.header, e == null ? void 0 : e.thead),
            ...i == null ? void 0 : i.tableHeaderProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              z,
              {
                "aria-label": String(t.label || t.key),
                className: o(b.column, e == null ? void 0 : e.th),
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
                            const f = (h = r.find(
                              (v) => String(v.field) === t.key
                            )) == null ? void 0 : h.field;
                            f && f !== "actions" && n(
                              f,
                              y.direction === "asc" ? "desc" : "asc"
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
                                  y.key === t.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                                )
                              }
                            ),
                            /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsx(
          B,
          {
            items: x,
            className: o(e == null ? void 0 : e.tbody),
            ...i == null ? void 0 : i.tableBodyProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              E,
              {
                "aria-label": `Row ${t.id}`,
                className: o(b.row, e == null ? void 0 : e.tr),
                ...i == null ? void 0 : i.tableRowProps,
                children: (f) => /* @__PURE__ */ l.jsx(
                  G,
                  {
                    className: o(b.cell, e == null ? void 0 : e.td),
                    ...i == null ? void 0 : i.tableCellProps,
                    children: f === "checkbox" ? /* @__PURE__ */ l.jsx(
                      T,
                      {
                        isSelected: d(t),
                        onValueChange: () => A(t),
                        "aria-label": `Select row ${t.id}`,
                        className: e == null ? void 0 : e.checkbox
                      }
                    ) : /* @__PURE__ */ l.jsx("div", { className: e == null ? void 0 : e.cellContent, children: (() => {
                      const h = r.find(
                        (v) => String(v.field) === f
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
