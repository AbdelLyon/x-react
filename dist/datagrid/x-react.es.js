/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import { useState as C, useEffect as I } from "react";
import { cn as o } from "../utils/x-react.es.js";
import { Table as D, TableHeader as $, TableColumn as z, Checkbox as T, TableBody as B, TableRow as E, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as H, IconChevronDown as R } from "@tabler/icons-react";
const V = (f, r, S) => {
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
    handleCheckboxChange: (n) => {
      const l = c.some((u) => u.id === n.id);
      let b;
      l ? b = c.filter((u) => u.id !== n.id) : b = [...c, n], g(b), r == null || r(b);
    },
    handleSelectAll: (n) => {
      const l = n ? [...f] : [];
      g(l), r == null || r(l);
    },
    handleSort: (n, l) => {
      i({ key: n, direction: l }), S == null || S(n, l);
    },
    isRowSelected: (n) => c.some((l) => l.id === n.id)
  };
}, U = {
  bordered: {
    table: "rounded-none",
    header: "bg-content2",
    column: "bg-content2 py-4 border border-divider",
    row: "py-4 border-b border-divider last:border-b-0 hover:bg-content2",
    cell: ""
  },
  striped: {
    table: "rounded-none",
    header: "bg-content2",
    column: "bg-content2 py-4 border border-divider",
    row: "py-4 even:bg-content2",
    cell: ""
  },
  unstyled: {
    table: "rounded-none",
    header: "bg-content2",
    column: "bg-content2 py-4 border border-divider",
    row: "py-4 hover:bg-content2",
    cell: ""
  }
};
function Q({
  rows: f,
  columns: r,
  caption: S,
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
    handleSort: n,
    isRowSelected: l
  } = V(f, c, g), b = U[j], u = [
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
  return /* @__PURE__ */ d.jsxs(
    D,
    {
      "aria-label": S,
      className: o(b.table, e == null ? void 0 : e.base),
      ...i == null ? void 0 : i.tableProps,
      radius: "sm",
      children: [
        /* @__PURE__ */ d.jsx(
          $,
          {
            columns: u,
            className: o(b.header, e == null ? void 0 : e.thead),
            ...i == null ? void 0 : i.tableHeaderProps,
            children: (t) => /* @__PURE__ */ d.jsx(
              z,
              {
                "aria-label": String(t.label || t.key),
                className: o(b.column, e == null ? void 0 : e.th),
                ...i == null ? void 0 : i.tableColumnProps,
                children: t.key === "checkbox" ? /* @__PURE__ */ d.jsx(
                  T,
                  {
                    isSelected: a,
                    onValueChange: P,
                    "aria-label": "Select all rows",
                    className: e == null ? void 0 : e.checkbox
                  }
                ) : /* @__PURE__ */ d.jsxs(
                  "div",
                  {
                    className: o(
                      "flex items-center gap-2",
                      e == null ? void 0 : e.headerContent
                    ),
                    children: [
                      t.label,
                      t.sortable && /* @__PURE__ */ d.jsxs(
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
                            y && y !== "actions" && n(
                              y,
                              x.direction === "asc" ? "desc" : "asc"
                            );
                          },
                          role: "button",
                          "aria-label": `Sort by ${t.label}`,
                          children: [
                            /* @__PURE__ */ d.jsx(
                              H,
                              {
                                size: 16,
                                className: o(
                                  "absolute -top-1",
                                  x.key === t.key && x.direction === "asc" ? "opacity-100" : "opacity-30"
                                )
                              }
                            ),
                            /* @__PURE__ */ d.jsx(
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
        /* @__PURE__ */ d.jsx(
          B,
          {
            items: f,
            className: o(e == null ? void 0 : e.tbody),
            ...i == null ? void 0 : i.tableBodyProps,
            children: (t) => /* @__PURE__ */ d.jsx(
              E,
              {
                "aria-label": `Row ${t.id}`,
                className: o(b.row, e == null ? void 0 : e.tr),
                ...i == null ? void 0 : i.tableRowProps,
                children: (y) => /* @__PURE__ */ d.jsx(
                  G,
                  {
                    className: o(b.cell, e == null ? void 0 : e.td),
                    ...i == null ? void 0 : i.tableCellProps,
                    children: y === "checkbox" ? /* @__PURE__ */ d.jsx(
                      T,
                      {
                        isSelected: l(t),
                        onValueChange: () => A(t),
                        "aria-label": `Select row ${t.id}`,
                        className: e == null ? void 0 : e.checkbox
                      }
                    ) : /* @__PURE__ */ d.jsx("div", { className: e == null ? void 0 : e.cellContent, children: (() => {
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
