/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as C, useEffect as I } from "react";
import { cn as o } from "../utils/x-react.es.js";
import { Table as D, TableHeader as $, TableColumn as z, Checkbox as T, TableBody as B, TableRow as E, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as H, IconChevronDown as R } from "@tabler/icons-react";
const V = (x, r, S) => {
  const [c, g] = C([]), [k, e] = C(!1), [j, n] = C({
    key: null,
    direction: "asc"
  });
  return I(() => {
    e(c.length === x.length && x.length > 0);
  }, [c, x]), {
    selectedRows: c,
    isAllChecked: k,
    sortConfig: j,
    handleCheckboxChange: (l) => {
      const d = c.some((u) => u.id === l.id);
      let b;
      d ? b = c.filter((u) => u.id !== l.id) : b = [...c, l], g(b), r == null || r(b);
    },
    handleSelectAll: (l) => {
      const d = l ? [...x] : [];
      g(d), r == null || r(d);
    },
    handleSort: (l, d) => {
      n({ key: l, direction: d }), S == null || S(l, d);
    },
    isRowSelected: (l) => c.some((d) => d.id === l.id)
  };
}, U = {
  bordered: {
    table: "rounded-none",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "border-b border-divider last:border-b-0 hover:bg-content2",
    cell: ""
  },
  striped: {
    table: "rounded-none",
    header: "bg-content2",
    column: "bg-content2 py-4",
    row: "even:bg-content2",
    cell: ""
  },
  unstyled: {
    table: "rounded-none",
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
  onSort: g,
  checkboxSelection: k = !0,
  classNames: e,
  variant: j = "unstyled",
  props: n
}) {
  const {
    isAllChecked: a,
    sortConfig: y,
    handleCheckboxChange: A,
    handleSelectAll: P,
    handleSort: l,
    isRowSelected: d
  } = V(x, c, g), b = U[j], u = [
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
  return /* @__PURE__ */ i.jsxs(
    D,
    {
      "aria-label": S,
      className: o(b.table, e == null ? void 0 : e.base),
      ...n == null ? void 0 : n.tableProps,
      radius: "none",
      children: [
        /* @__PURE__ */ i.jsx(
          $,
          {
            columns: u,
            className: o(b.header, e == null ? void 0 : e.thead),
            ...n == null ? void 0 : n.tableHeaderProps,
            children: (t) => /* @__PURE__ */ i.jsx(
              z,
              {
                "aria-label": String(t.label || t.key),
                className: o(b.column, e == null ? void 0 : e.th),
                ...n == null ? void 0 : n.tableColumnProps,
                children: t.key === "checkbox" ? /* @__PURE__ */ i.jsx(
                  T,
                  {
                    isSelected: a,
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
                            const f = (h = r.find(
                              (v) => String(v.field) === t.key
                            )) == null ? void 0 : h.field;
                            f && f !== "actions" && l(
                              f,
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
            items: x,
            className: o(e == null ? void 0 : e.tbody),
            ...n == null ? void 0 : n.tableBodyProps,
            children: (t) => /* @__PURE__ */ i.jsx(
              E,
              {
                "aria-label": `Row ${t.id}`,
                className: o(b.row, e == null ? void 0 : e.tr),
                ...n == null ? void 0 : n.tableRowProps,
                children: (f) => /* @__PURE__ */ i.jsx(
                  G,
                  {
                    className: o(b.cell, e == null ? void 0 : e.td),
                    ...n == null ? void 0 : n.tableCellProps,
                    children: f === "checkbox" ? /* @__PURE__ */ i.jsx(
                      T,
                      {
                        isSelected: d(t),
                        onValueChange: () => A(t),
                        "aria-label": `Select row ${t.id}`,
                        className: e == null ? void 0 : e.checkbox
                      }
                    ) : /* @__PURE__ */ i.jsx("div", { className: e == null ? void 0 : e.cellContent, children: (() => {
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
