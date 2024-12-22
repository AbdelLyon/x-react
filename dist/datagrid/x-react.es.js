/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as T } from "react";
import { cn as f } from "../utils/x-react.es.js";
import { Table as m, TableHeader as I, TableColumn as z, Checkbox as P, TableBody as D, TableRow as $, TableCell as B } from "@nextui-org/react";
import { IconChevronUp as E, IconChevronDown as G } from "@tabler/icons-react";
const H = (h, r, x) => {
  const [c, u] = j([]), [g, l] = j(!1), [k, t] = j({
    key: null,
    direction: "asc"
  });
  return T(() => {
    l(c.length === h.length && h.length > 0);
  }, [c, h]), {
    selectedRows: c,
    isAllChecked: g,
    sortConfig: k,
    handleCheckboxChange: (d) => {
      const n = c.some((S) => S.id === d.id);
      let b;
      n ? b = c.filter((S) => S.id !== d.id) : b = [...c, d], u(b), r == null || r(b);
    },
    handleSelectAll: (d) => {
      const n = d ? [...h] : [];
      u(n), r == null || r(n);
    },
    handleSort: (d, n) => {
      t({ key: d, direction: n }), x == null || x(d, n);
    },
    isRowSelected: (d) => c.some((n) => n.id === d.id)
  };
}, R = {
  bordered: {
    header: "bg-content2 border border-divider",
    column: "bg-content2 py-4",
    row: "py-4 border-b border-divider last:border-b-0 hover:bg-content2"
  },
  striped: {
    header: "bg-content2 border border-divider",
    column: "bg-content2 py-4",
    row: "py-4 even:bg-content2"
  },
  unstyled: {
    header: "bg-content2 border border-divider",
    column: "bg-content2 py-4",
    row: "py-4 hover:bg-content2"
  }
};
function M({
  rows: h,
  columns: r,
  caption: x,
  onCheckedRowsChange: c,
  onSort: u,
  checkboxSelection: g = !0,
  classNames: l,
  variant: k = "unstyled",
  props: t
}) {
  const {
    isAllChecked: v,
    sortConfig: y,
    handleCheckboxChange: C,
    handleSelectAll: A,
    handleSort: d,
    isRowSelected: n
  } = H(h, c, u), b = R[k], S = [
    ...g ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...r.map((e, o) => ({
      ...e,
      key: String(e.field || o),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ i.jsxs(m, { "aria-label": x, ...t == null ? void 0 : t.tableProps, radius: "sm", children: [
    /* @__PURE__ */ i.jsx(
      I,
      {
        columns: S,
        className: f(b.header),
        ...t == null ? void 0 : t.tableHeaderProps,
        children: (e) => /* @__PURE__ */ i.jsx(
          z,
          {
            "aria-label": String(e.label || e.key),
            className: f(b.column),
            ...t == null ? void 0 : t.tableColumnProps,
            children: e.key === "checkbox" ? /* @__PURE__ */ i.jsx(
              P,
              {
                isSelected: v,
                onValueChange: A,
                "aria-label": "Select all rows",
                className: l == null ? void 0 : l.checkbox
              }
            ) : /* @__PURE__ */ i.jsxs("div", { className: f("flex items-center gap-2"), children: [
              e.label,
              e.sortable && /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: f(
                    "relative size-4 cursor-pointer",
                    l == null ? void 0 : l.sortIcon
                  ),
                  onClick: () => {
                    var a;
                    const o = (a = r.find(
                      (s) => String(s.field) === e.key
                    )) == null ? void 0 : a.field;
                    o && o !== "actions" && d(
                      o,
                      y.direction === "asc" ? "desc" : "asc"
                    );
                  },
                  role: "button",
                  "aria-label": `Sort by ${e.label}`,
                  children: [
                    /* @__PURE__ */ i.jsx(
                      E,
                      {
                        size: 16,
                        className: f(
                          "absolute -top-1",
                          y.key === e.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ i.jsx(
                      G,
                      {
                        size: 16,
                        className: f(
                          "absolute top-1",
                          y.key === e.key && y.direction === "desc" ? "opacity-100" : "opacity-30"
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
    /* @__PURE__ */ i.jsx(D, { items: h, ...t == null ? void 0 : t.tableBodyProps, children: (e) => /* @__PURE__ */ i.jsx(
      $,
      {
        "aria-label": `Row ${e.id}`,
        className: f(b.row),
        ...t == null ? void 0 : t.tableRowProps,
        children: (o) => /* @__PURE__ */ i.jsx(B, { ...t == null ? void 0 : t.tableCellProps, children: o === "checkbox" ? /* @__PURE__ */ i.jsx(
          P,
          {
            isSelected: n(e),
            onValueChange: () => C(e),
            "aria-label": `Select row ${e.id}`,
            className: l == null ? void 0 : l.checkbox
          }
        ) : /* @__PURE__ */ i.jsx("div", { className: l == null ? void 0 : l.cellContent, children: (() => {
          const a = r.find(
            (s) => String(s.field) === o
          );
          return a ? a.cell ? a.cell(e) : a.field && a.field in e ? String(e[a.field]) : null : null;
        })() }) })
      },
      e.id
    ) })
  ] });
}
export {
  M as DataGrid
};
