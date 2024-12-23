/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as T } from "react";
import { cn as h } from "../utils/x-react.es.js";
import { Table as m, TableHeader as I, TableColumn as z, Checkbox as P, TableBody as D, TableRow as $, TableCell as B } from "@nextui-org/react";
import { IconChevronUp as E, IconChevronDown as G } from "@tabler/icons-react";
const H = (f, r, x) => {
  const [a, S] = j([]), [g, l] = j(!1), [k, t] = j({
    key: null,
    direction: "asc"
  });
  return T(() => {
    l(a.length === f.length && f.length > 0);
  }, [a, f]), {
    selectedRows: a,
    isAllChecked: g,
    sortConfig: k,
    handleCheckboxChange: (n) => {
      const d = a.some((u) => u.id === n.id);
      let b;
      d ? b = a.filter((u) => u.id !== n.id) : b = [...a, n], S(b), r == null || r(b);
    },
    handleSelectAll: (n) => {
      const d = n ? [...f] : [];
      S(d), r == null || r(d);
    },
    handleSort: (n, d) => {
      t({ key: n, direction: d }), x == null || x(n, d);
    },
    isRowSelected: (n) => a.some((d) => d.id === n.id)
  };
}, R = {
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
function M({
  rows: f,
  columns: r,
  caption: x,
  onCheckedRowsChange: a,
  onSort: S,
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
    handleSort: n,
    isRowSelected: d
  } = H(f, a, S), b = R[k], u = [
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
        columns: u,
        className: h(b.header),
        ...t == null ? void 0 : t.tableHeaderProps,
        children: (e) => /* @__PURE__ */ i.jsx(
          z,
          {
            "aria-label": String(e.label || e.key),
            className: h(b.column),
            ...t == null ? void 0 : t.tableColumnProps,
            children: e.key === "checkbox" ? /* @__PURE__ */ i.jsx(
              P,
              {
                isSelected: v,
                onValueChange: A,
                "aria-label": "Select all rows",
                className: l == null ? void 0 : l.checkbox
              }
            ) : /* @__PURE__ */ i.jsxs("div", { className: h("flex items-center gap-2"), children: [
              e.label,
              e.sortable && /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: h(
                    "relative size-4 cursor-pointer",
                    l == null ? void 0 : l.sortIcon
                  ),
                  onClick: () => {
                    var c;
                    const o = (c = r.find(
                      (s) => String(s.field) === e.key
                    )) == null ? void 0 : c.field;
                    o && o !== "actions" && n(
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
                        className: h(
                          "absolute -top-1",
                          y.key === e.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ i.jsx(
                      G,
                      {
                        size: 16,
                        className: h(
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
    /* @__PURE__ */ i.jsx(D, { items: f, ...t == null ? void 0 : t.tableBodyProps, children: (e) => /* @__PURE__ */ i.jsx(
      $,
      {
        "aria-label": `Row ${e.id}`,
        className: h(b.row),
        ...t == null ? void 0 : t.tableRowProps,
        children: (o) => /* @__PURE__ */ i.jsx(B, { ...t == null ? void 0 : t.tableCellProps, children: o === "checkbox" ? /* @__PURE__ */ i.jsx(
          P,
          {
            isSelected: d(e),
            onValueChange: () => C(e),
            "aria-label": `Select row ${e.id}`,
            className: l == null ? void 0 : l.checkbox
          }
        ) : /* @__PURE__ */ i.jsx("div", { className: l == null ? void 0 : l.cellContent, children: (() => {
          const c = r.find(
            (s) => String(s.field) === o
          );
          return c ? c.cell ? c.cell(e) : c.field && c.field in e ? String(e[c.field]) : null : null;
        })() }) })
      },
      e.id
    ) })
  ] });
}
export {
  M as DataGrid
};
