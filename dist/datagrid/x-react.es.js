/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { useState as k, useEffect as q } from "react";
import { Table as J, TableHeader as O, TableColumn as P, Checkbox as $, TableBody as Q, TableRow as W, TableCell as X, Pagination as Y } from "@nextui-org/react";
import { IconChevronUp as Z, IconChevronDown as _ } from "@tabler/icons-react";
import { cn as y } from "../utils/x-react.es.js";
const w = {
  key: null,
  direction: "asc"
}, K = ({
  rows: t,
  onCheckedRowsChange: d,
  onSort: b
}) => {
  const [n, c] = k([]), [v, i] = k(!1), [j, l] = k(w);
  return q(() => {
    i(n.length === t.length && t.length > 0);
  }, [n, t]), {
    selectedRows: n,
    isAllChecked: v,
    sortConfig: j,
    handleCheckboxChange: (o) => {
      const x = n.some((s) => s.id === o.id) ? n.filter((s) => s.id !== o.id) : [...n, o];
      c(x), d == null || d(x);
    },
    handleSelectAll: (o) => {
      const a = o ? [...t] : [];
      c(a), d == null || d(a);
    },
    handleSort: (o, a) => {
      l({ key: o, direction: a }), b == null || b(o, a);
    },
    isRowSelected: (o) => n.some((a) => a.id === o.id)
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
function N(t) {
  return typeof t.label == "string" && t.label.length > 0 ? t.label : typeof t.key == "string" && t.key.length > 0 ? t.key : "Column";
}
function ee(t) {
  return typeof t == "string" && t.length > 0 ? `Sort by ${t}` : "Sort column";
}
function te(t, d, b) {
  const n = b.find(
    (c) => typeof c.field == "string" && String(c.field) === String(t)
  );
  if (n === void 0)
    return null;
  if (n.cell !== void 0)
    return n.cell(d);
  if (typeof n.field == "string" && n.field.length > 0 && n.field in d) {
    const c = d[n.field];
    return typeof c == "string" || typeof c == "number" ? String(c) : null;
  }
  return null;
}
function ae({
  rows: t,
  columns: d,
  caption: b,
  onCheckedRowsChange: n,
  onSort: c,
  checkboxSelection: v = !0,
  classNames: i,
  variant: j = "unstyled",
  props: l,
  isPaginated: C = !1,
  initialPage: z = 1,
  itemsPerPage: u = 10,
  onPageChange: g,
  paginationProps: o
}) {
  const [a, x] = k(z), s = t.length, I = Math.ceil(s / u), B = {
    page: a,
    lastPage: I,
    total: s,
    itemsPerPage: u
  }, D = (a - 1) * u, E = D + u, R = C ? t.slice(D, E) : t, G = (e) => {
    x(e), g == null || g({
      ...B,
      page: e
    });
  }, {
    isAllChecked: H,
    sortConfig: h,
    handleCheckboxChange: L,
    handleSelectAll: V,
    handleSort: F,
    isRowSelected: M
  } = K({
    rows: R,
    onCheckedRowsChange: n,
    onSort: c
  }), A = p[j], U = [
    ...v ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...d.map((e, f) => ({
      ...e,
      key: typeof e.field == "string" ? String(e.field) : String(f),
      label: e.header
    }))
  ], m = (e) => {
    const f = d.find(
      (T) => typeof T.field == "string" && T.field.length > 0 && String(T.field) === e.key
    ), S = f == null ? void 0 : f.field;
    S != null && S !== "actions" && F(S, h.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ r.jsxs(
      J,
      {
        "aria-label": typeof b == "string" ? b : void 0,
        ...l == null ? void 0 : l.tableProps,
        radius: "sm",
        children: [
          /* @__PURE__ */ r.jsx(
            O,
            {
              columns: U,
              className: y(A.header),
              ...l == null ? void 0 : l.tableHeaderProps,
              children: (e) => /* @__PURE__ */ r.jsx(
                P,
                {
                  "aria-label": N(e),
                  className: y(A.column),
                  ...l == null ? void 0 : l.tableColumnProps,
                  children: e.key === "checkbox" ? /* @__PURE__ */ r.jsx(
                    $,
                    {
                      isSelected: H,
                      onValueChange: V,
                      "aria-label": "Select all rows",
                      className: i == null ? void 0 : i.checkbox
                    }
                  ) : /* @__PURE__ */ r.jsxs("div", { className: y("flex items-center gap-2"), children: [
                    e.label,
                    e.sortable !== void 0 && e.sortable && /* @__PURE__ */ r.jsxs(
                      "div",
                      {
                        className: y(
                          "relative size-4 cursor-pointer",
                          i == null ? void 0 : i.sortIcon
                        ),
                        onClick: () => m(e),
                        role: "button",
                        "aria-label": ee(e.label),
                        children: [
                          /* @__PURE__ */ r.jsx(
                            Z,
                            {
                              size: 16,
                              className: y(
                                "absolute -top-1",
                                h.key === e.key && h.direction === "asc" ? "opacity-100" : "opacity-30"
                              )
                            }
                          ),
                          /* @__PURE__ */ r.jsx(
                            _,
                            {
                              size: 16,
                              className: y(
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
          /* @__PURE__ */ r.jsx(Q, { items: R, ...l == null ? void 0 : l.tableBodyProps, children: (e) => /* @__PURE__ */ r.jsx(
            W,
            {
              "aria-label": `Row ${e.id}`,
              className: y(A.row),
              ...l == null ? void 0 : l.tableRowProps,
              children: (f) => /* @__PURE__ */ r.jsx(X, { ...l == null ? void 0 : l.tableCellProps, children: f === "checkbox" ? /* @__PURE__ */ r.jsx(
                $,
                {
                  isSelected: M(e),
                  onValueChange: () => L(e),
                  "aria-label": `Select row ${e.id}`,
                  className: i == null ? void 0 : i.checkbox
                }
              ) : /* @__PURE__ */ r.jsx("div", { className: i == null ? void 0 : i.cellContent, children: te(f, e, d) }) })
            },
            e.id
          ) })
        ]
      }
    ),
    C && s > 0 && /* @__PURE__ */ r.jsx(
      Y,
      {
        total: I,
        page: a,
        onChange: G,
        className: y("self-center", i == null ? void 0 : i.pagination),
        showControls: !0,
        color: "primary",
        size: "sm",
        ...o
      }
    )
  ] });
}
export {
  ae as DataGrid
};
