/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as g, useEffect as $ } from "react";
import { cn as C } from "../utils/x-react.es.js";
import { Table as I, TableHeader as D, TableColumn as z, Checkbox as T, TableBody as B, TableRow as E, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as H, IconChevronDown as R } from "@tabler/icons-react";
const V = (x, b, y) => {
  const [r, c] = g([]), [k, j] = g(!1), [e, i] = g({
    key: null,
    direction: "asc"
  });
  return $(() => {
    j(r.length === x.length && x.length > 0);
  }, [r, x]), {
    selectedRows: r,
    isAllChecked: k,
    sortConfig: e,
    handleCheckboxChange: (d) => {
      const n = r.some((t) => t.id === d.id);
      let o;
      n ? o = r.filter((t) => t.id !== d.id) : o = [...r, d], c(o), b == null || b(o);
    },
    handleSelectAll: (d) => {
      const n = d ? [...x] : [];
      c(n), b == null || b(n);
    },
    handleSort: (d, n) => {
      i({ key: d, direction: n }), y == null || y(d, n);
    },
    isRowSelected: (d) => r.some((n) => n.id === d.id)
  };
};
function O({
  rows: x,
  columns: b,
  caption: y,
  className: r,
  onCheckedRowsChange: c,
  onSort: k,
  checkboxSelection: j = !0,
  classNames: e,
  props: i
}) {
  const {
    isAllChecked: v,
    sortConfig: S,
    handleCheckboxChange: A,
    handleSelectAll: P,
    handleSort: d,
    isRowSelected: n
  } = V(x, c, k), o = [
    ...j ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...b.map((t, f) => ({
      ...t,
      key: String(t.field || f),
      label: t.header
    }))
  ];
  return /* @__PURE__ */ l.jsxs(
    I,
    {
      "aria-label": y,
      className: C(e == null ? void 0 : e.base, r),
      "aria-labelledby": "table",
      ...i == null ? void 0 : i.tableProps,
      children: [
        /* @__PURE__ */ l.jsx(
          D,
          {
            columns: o,
            className: e == null ? void 0 : e.thead,
            ...i == null ? void 0 : i.tableHeaderProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              z,
              {
                "aria-label": String(t.label || t.key),
                className: e == null ? void 0 : e.th,
                ...i == null ? void 0 : i.tableColumnProps,
                children: t.key === "checkbox" ? /* @__PURE__ */ l.jsx(
                  T,
                  {
                    isSelected: v,
                    onValueChange: P,
                    "aria-label": "Select all rows",
                    className: e == null ? void 0 : e.checkbox
                  }
                ) : /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    className: C(
                      "flex items-center gap-2",
                      e == null ? void 0 : e.headerContent
                    ),
                    children: [
                      t.label,
                      t.sortable && /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          className: C(
                            "relative w-4 h-4 cursor-pointer",
                            e == null ? void 0 : e.sortIcon
                          ),
                          onClick: () => {
                            var h;
                            const f = (h = b.find(
                              (u) => String(u.field) === t.key
                            )) == null ? void 0 : h.field;
                            f && f !== "actions" && d(
                              f,
                              S.direction === "asc" ? "desc" : "asc"
                            );
                          },
                          role: "button",
                          "aria-label": `Sort by ${t.label}`,
                          children: [
                            /* @__PURE__ */ l.jsx(
                              H,
                              {
                                size: 16,
                                className: `absolute -top-1 ${S.key === t.key && S.direction === "asc" ? "opacity-100" : "opacity-30"}`
                              }
                            ),
                            /* @__PURE__ */ l.jsx(
                              R,
                              {
                                size: 16,
                                className: `absolute top-1 ${S.key === t.key && S.direction === "desc" ? "opacity-100" : "opacity-30"}`
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
            className: e == null ? void 0 : e.tbody,
            ...i == null ? void 0 : i.tableBodyProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              E,
              {
                "aria-label": `Row ${t.id}`,
                className: e == null ? void 0 : e.tr,
                ...i == null ? void 0 : i.tableRowProps,
                children: (f) => /* @__PURE__ */ l.jsx(G, { className: e == null ? void 0 : e.td, ...i == null ? void 0 : i.tableCellProps, children: f === "checkbox" ? /* @__PURE__ */ l.jsx(
                  T,
                  {
                    isSelected: n(t),
                    onValueChange: () => A(t),
                    "aria-label": `Select row ${t.id}`,
                    className: e == null ? void 0 : e.checkbox
                  }
                ) : /* @__PURE__ */ l.jsx("div", { className: e == null ? void 0 : e.cellContent, children: (() => {
                  const h = b.find(
                    (u) => String(u.field) === f
                  );
                  return h ? h.cell ? h.cell(t) : h.field && h.field in t ? String(t[h.field]) : null : null;
                })() }) })
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
