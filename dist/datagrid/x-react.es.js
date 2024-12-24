/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { useState as k, useEffect as q } from "react";
import { cn as f } from "../utils/x-react.es.js";
import { Table as J, TableHeader as O, TableColumn as P, Checkbox as R, TableBody as Q, TableRow as W, TableCell as X, Pagination as Y } from "@nextui-org/react";
import { IconChevronUp as Z, IconChevronDown as _ } from "@tabler/icons-react";
const K = {
  key: null,
  direction: "asc"
}, w = ({
  rows: l,
  onCheckedRowsChange: d,
  onSort: c
}) => {
  const [n, a] = k([]), [j, i] = k(!1), [v, s] = k(K);
  return q(() => {
    i(n.length === l.length && l.length > 0);
  }, [n, l]), {
    selectedRows: n,
    isAllChecked: j,
    sortConfig: v,
    handleCheckboxChange: (e) => {
      const x = n.some((u) => u.id === e.id) ? n.filter((u) => u.id !== e.id) : [...n, e];
      a(x), d == null || d(x);
    },
    handleSelectAll: (e) => {
      const o = e ? [...l] : [];
      a(o), d == null || d(o);
    },
    handleSort: (e, o) => {
      s({ key: e, direction: o }), c == null || c(e, o);
    },
    isRowSelected: (e) => n.some((o) => o.id === e.id)
  };
}, p = {
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
function N(l) {
  return typeof l.label == "string" && l.label.length > 0 ? l.label : typeof l.key == "string" && l.key.length > 0 ? l.key : "Column";
}
function ee(l) {
  return typeof l == "string" && l.length > 0 ? `Sort by ${l}` : "Sort column";
}
function te(l, d, c) {
  const n = c.find(
    (a) => typeof a.field == "string" && String(a.field) === String(l)
  );
  if (n === void 0)
    return null;
  if (n.cell !== void 0)
    return n.cell(d);
  if (typeof n.field == "string" && n.field.length > 0 && n.field in d) {
    const a = d[n.field];
    return typeof a == "string" || typeof a == "number" ? String(a) : null;
  }
  return null;
}
function ae({
  rows: l,
  columns: d,
  caption: c,
  onCheckedRowsChange: n,
  onSort: a,
  checkboxSelection: j = !0,
  classNames: i,
  variant: v = "unstyled",
  isPaginated: s = !1,
  initialPage: T = 1,
  itemsPerPage: y = 10,
  onPageChange: g,
  paginationProps: z,
  props: e
}) {
  const [o, x] = k(T), u = l.length, I = Math.ceil(u / y), $ = {
    page: o,
    lastPage: I,
    total: u,
    itemsPerPage: y
  }, D = (o - 1) * y, B = D + y, E = s ? l.slice(D, B) : l, G = (t) => {
    x(t), g == null || g({
      ...$,
      page: t
    });
  }, {
    isAllChecked: H,
    sortConfig: h,
    handleCheckboxChange: L,
    handleSelectAll: V,
    handleSort: m,
    isRowSelected: F
  } = w({
    rows: E,
    onCheckedRowsChange: n,
    onSort: a
  }), C = p[v], M = [
    ...j === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...d.map((t, b) => ({
      ...t,
      key: typeof t.field == "string" ? String(t.field) : String(b),
      label: t.header
    }))
  ], U = (t) => {
    const b = d.find(
      (A) => typeof A.field == "string" && A.field.length > 0 && String(A.field) === t.key
    ), S = b == null ? void 0 : b.field;
    S != null && S !== "actions" && m(S, h.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ r.jsxs(
      J,
      {
        "aria-label": typeof c == "string" ? c : void 0,
        ...e == null ? void 0 : e.tableProps,
        radius: "sm",
        children: [
          /* @__PURE__ */ r.jsx(
            O,
            {
              columns: M,
              className: f(C.header),
              ...e == null ? void 0 : e.tableHeaderProps,
              children: (t) => /* @__PURE__ */ r.jsx(
                P,
                {
                  "aria-label": N(t),
                  className: f(C.column),
                  ...e == null ? void 0 : e.tableColumnProps,
                  children: t.key === "checkbox" ? /* @__PURE__ */ r.jsx(
                    R,
                    {
                      isSelected: H,
                      onValueChange: V,
                      "aria-label": "Select all rows",
                      className: i == null ? void 0 : i.checkbox
                    }
                  ) : /* @__PURE__ */ r.jsxs("div", { className: f("flex items-center gap-2"), children: [
                    t.label,
                    t.sortable === !0 && /* @__PURE__ */ r.jsxs(
                      "div",
                      {
                        className: f(
                          "relative size-4 cursor-pointer",
                          i == null ? void 0 : i.sortIcon
                        ),
                        onClick: () => U(t),
                        role: "button",
                        "aria-label": ee(t.label),
                        children: [
                          /* @__PURE__ */ r.jsx(
                            Z,
                            {
                              size: 16,
                              className: f(
                                "absolute -top-1",
                                h.key === t.key && h.direction === "asc" ? "opacity-100" : "opacity-30"
                              )
                            }
                          ),
                          /* @__PURE__ */ r.jsx(
                            _,
                            {
                              size: 16,
                              className: f(
                                "absolute top-1",
                                h.key === t.key && h.direction === "desc" ? "opacity-100" : "opacity-30"
                              )
                            }
                          )
                        ]
                      }
                    )
                  ] })
                },
                t.key
              )
            }
          ),
          /* @__PURE__ */ r.jsx(Q, { items: l, ...e == null ? void 0 : e.tableBodyProps, children: (t) => /* @__PURE__ */ r.jsx(
            W,
            {
              "aria-label": `Row ${t.id}`,
              className: f(C.row),
              ...e == null ? void 0 : e.tableRowProps,
              children: (b) => /* @__PURE__ */ r.jsx(X, { ...e == null ? void 0 : e.tableCellProps, children: b === "checkbox" ? /* @__PURE__ */ r.jsx(
                R,
                {
                  isSelected: F(t),
                  onValueChange: () => L(t),
                  "aria-label": `Select row ${t.id}`,
                  className: i == null ? void 0 : i.checkbox
                }
              ) : /* @__PURE__ */ r.jsx("div", { className: i == null ? void 0 : i.cellContent, children: te(b, t, d) }) })
            },
            t.id
          ) })
        ]
      }
    ),
    s && u > 0 && /* @__PURE__ */ r.jsx(
      Y,
      {
        total: I,
        page: o,
        onChange: G,
        className: f("self-start", i == null ? void 0 : i.pagination),
        showControls: !0,
        color: "primary",
        size: "sm",
        ...z
      }
    )
  ] });
}
export {
  ae as DataGrid
};
