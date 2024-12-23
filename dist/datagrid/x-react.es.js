/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as T } from "react";
import { cn as f } from "../utils/x-react.es.js";
import { Table as m, TableHeader as I, TableColumn as z, Checkbox as P, TableBody as D, TableRow as $, TableCell as B } from "@nextui-org/react";
import { IconChevronUp as E, IconChevronDown as G } from "@tabler/icons-react";
const H = {
  key: null,
  direction: "asc"
}, R = ({
  rows: o,
  onCheckedRowsChange: d,
  onSort: x
}) => {
  const [a, u] = j([]), [g, l] = j(!1), [s, t] = j(H);
  return T(() => {
    l(a.length === o.length && o.length > 0);
  }, [a, o]), {
    selectedRows: a,
    isAllChecked: g,
    sortConfig: s,
    handleCheckboxChange: (n) => {
      const y = a.some((S) => S.id === n.id) ? a.filter((S) => S.id !== n.id) : [...a, n];
      u(y), d == null || d(y);
    },
    handleSelectAll: (n) => {
      const r = n ? [...o] : [];
      u(r), d == null || d(r);
    },
    handleSort: (n, r) => {
      t({ key: n, direction: r }), x == null || x(n, r);
    },
    isRowSelected: (n) => a.some((r) => r.id === n.id)
  };
}, V = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2"
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 even:bg-content2"
  },
  unstyled: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 hover:bg-content2"
  }
};
function O({
  rows: o,
  columns: d,
  caption: x,
  onCheckedRowsChange: a,
  onSort: u,
  checkboxSelection: g = !0,
  classNames: l,
  variant: s = "unstyled",
  props: t
}) {
  const {
    isAllChecked: v,
    sortConfig: h,
    handleCheckboxChange: C,
    handleSelectAll: A,
    handleSort: n,
    isRowSelected: r
  } = R({
    rows: o,
    onCheckedRowsChange: a,
    onSort: u
  }), y = V[s], S = [
    ...g ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...d.map((e, b) => ({
      ...e,
      key: String(e.field || b),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ i.jsxs(m, { "aria-label": x, ...t == null ? void 0 : t.tableProps, radius: "sm", children: [
    /* @__PURE__ */ i.jsx(
      I,
      {
        columns: S,
        className: f(y.header),
        ...t == null ? void 0 : t.tableHeaderProps,
        children: (e) => /* @__PURE__ */ i.jsx(
          z,
          {
            "aria-label": String(e.label || e.key),
            className: f(y.column),
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
                    var c;
                    const b = (c = d.find(
                      (k) => String(k.field) === e.key
                    )) == null ? void 0 : c.field;
                    b && b !== "actions" && n(
                      b,
                      h.direction === "asc" ? "desc" : "asc"
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
                          h.key === e.key && h.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ i.jsx(
                      G,
                      {
                        size: 16,
                        className: f(
                          "absolute top-1",
                          h.key === e.key && h.direction === "desc" ? "opacity-100" : "opacity-30"
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
    /* @__PURE__ */ i.jsx(D, { items: o, ...t == null ? void 0 : t.tableBodyProps, children: (e) => /* @__PURE__ */ i.jsx(
      $,
      {
        "aria-label": `Row ${e.id}`,
        className: f(y.row),
        ...t == null ? void 0 : t.tableRowProps,
        children: (b) => /* @__PURE__ */ i.jsx(B, { ...t == null ? void 0 : t.tableCellProps, children: b === "checkbox" ? /* @__PURE__ */ i.jsx(
          P,
          {
            isSelected: r(e),
            onValueChange: () => C(e),
            "aria-label": `Select row ${e.id}`,
            className: l == null ? void 0 : l.checkbox
          }
        ) : /* @__PURE__ */ i.jsx("div", { className: l == null ? void 0 : l.cellContent, children: (() => {
          const c = d.find(
            (k) => String(k.field) === b
          );
          return c ? c.cell ? c.cell(e) : c.field && c.field in e ? String(e[c.field]) : null : null;
        })() }) })
      },
      e.id
    ) })
  ] });
}
export {
  O as DataGrid
};
