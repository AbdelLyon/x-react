/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as C, useEffect as $ } from "react";
import { cn as k } from "../utils/x-react.es.js";
import { Table as I, TableHeader as D, TableColumn as z, Checkbox as T, TableBody as B, TableRow as E, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as H, IconChevronDown as R } from "@tabler/icons-react";
const V = (x, b, y) => {
  const [r, c] = C([]), [j, u] = C(!1), [e, i] = C({
    key: null,
    direction: "asc"
  });
  return $(() => {
    u(r.length === x.length && x.length > 0);
  }, [r, x]), {
    selectedRows: r,
    isAllChecked: j,
    sortConfig: e,
    handleCheckboxChange: (d) => {
      const n = r.some((t) => t.id === d.id);
      let S;
      n ? S = r.filter((t) => t.id !== d.id) : S = [...r, d], c(S), b == null || b(S);
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
  onSort: j,
  checkboxSelection: u = !0,
  classNames: e,
  props: i
}) {
  const {
    isAllChecked: v,
    sortConfig: o,
    handleCheckboxChange: A,
    handleSelectAll: P,
    handleSort: d,
    isRowSelected: n
  } = V(x, c, j), S = [
    ...u ? [
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
      className: k(e == null ? void 0 : e.base, r),
      "aria-labelledby": "table",
      ...i == null ? void 0 : i.tableProps,
      children: [
        /* @__PURE__ */ l.jsx(
          D,
          {
            columns: S,
            className: e == null ? void 0 : e.thead,
            ...i == null ? void 0 : i.tableHeaderProps,
            children: (t) => /* @__PURE__ */ l.jsx(
              z,
              {
                "aria-label": String(t.label || t.key),
                className: k("py-3 bg-background", e == null ? void 0 : e.th),
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
                    className: k(
                      "flex items-center gap-2",
                      e == null ? void 0 : e.headerContent
                    ),
                    children: [
                      t.label,
                      t.sortable && /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          className: k(
                            "relative w-4 h-4 cursor-pointer",
                            e == null ? void 0 : e.sortIcon
                          ),
                          onClick: () => {
                            var h;
                            const f = (h = b.find(
                              (g) => String(g.field) === t.key
                            )) == null ? void 0 : h.field;
                            f && f !== "actions" && d(
                              f,
                              o.direction === "asc" ? "desc" : "asc"
                            );
                          },
                          role: "button",
                          "aria-label": `Sort by ${t.label}`,
                          children: [
                            /* @__PURE__ */ l.jsx(
                              H,
                              {
                                size: 16,
                                className: `absolute -top-1 ${o.key === t.key && o.direction === "asc" ? "opacity-100" : "opacity-30"}`
                              }
                            ),
                            /* @__PURE__ */ l.jsx(
                              R,
                              {
                                size: 16,
                                className: `absolute top-1 ${o.key === t.key && o.direction === "desc" ? "opacity-100" : "opacity-30"}`
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
                    (g) => String(g.field) === f
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
