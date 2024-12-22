/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as a, useEffect as D } from "react";
import { cn as b } from "../utils/x-react.es.js";
import { Table as $, TableHeader as z, TableColumn as B, Checkbox as T, TableBody as E, TableRow as G, TableCell as H } from "@nextui-org/react";
import { IconChevronUp as R, IconChevronDown as V } from "@tabler/icons-react";
const U = (x, r, g) => {
  const [o, u] = a([]), [k, j] = a(!1), [e, v] = a({
    key: null,
    direction: "asc"
  });
  return D(() => {
    j(o.length === x.length && x.length > 0);
  }, [o, x]), {
    selectedRows: o,
    isAllChecked: k,
    sortConfig: e,
    handleCheckboxChange: (n) => {
      const d = o.some((c) => c.id === n.id);
      let S;
      d ? S = o.filter((c) => c.id !== n.id) : S = [...o, n], u(S), r == null || r(S);
    },
    handleSelectAll: (n) => {
      const d = n ? [...x] : [];
      u(d), r == null || r(d);
    },
    handleSort: (n, d) => {
      v({ key: n, direction: d }), g == null || g(n, d);
    },
    isRowSelected: (n) => o.some((d) => d.id === n.id)
  };
}, q = {
  bordered: {
    table: "border border-divider rounded-lg",
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
function W({
  rows: x,
  columns: r,
  caption: g,
  className: o,
  onCheckedRowsChange: u,
  onSort: k,
  checkboxSelection: j = !0,
  classNames: e,
  variant: v = "unstyled",
  props: i
}) {
  const {
    isAllChecked: A,
    sortConfig: y,
    handleCheckboxChange: P,
    handleSelectAll: n,
    handleSort: d,
    isRowSelected: S
  } = U(x, u, k), c = q[v], I = [
    ...j ? [
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
    $,
    {
      "aria-label": g,
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
                    onValueChange: n,
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
                            const f = (h = r.find(
                              (C) => String(C.field) === t.key
                            )) == null ? void 0 : h.field;
                            f && f !== "actions" && d(
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
                className: b(c.row, e == null ? void 0 : e.tr),
                ...i == null ? void 0 : i.tableRowProps,
                children: (f) => /* @__PURE__ */ l.jsx(
                  H,
                  {
                    className: b(c.cell, e == null ? void 0 : e.td),
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
                      const h = r.find(
                        (C) => String(C.field) === f
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
