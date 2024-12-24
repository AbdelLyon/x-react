/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { useState as C, useEffect as _ } from "react";
import { cn as s } from "../utils/x-react.es.js";
import { Table as T, TableHeader as w, TableColumn as z, Skeleton as k, TableBody as D, TableRow as $, TableCell as G, Checkbox as P } from "@nextui-org/react";
import { IconChevronUp as B, IconChevronDown as E } from "@tabler/icons-react";
const H = {
  key: null,
  direction: "asc"
}, R = ({
  rows: t,
  onCheckedRowsChange: i,
  onSort: o
}) => {
  const [r, a] = C([]), [f, d] = C(!1), [g, u] = C(H);
  return _(() => {
    d(r.length === t.length && t.length > 0);
  }, [r, t]), {
    selectedRows: r,
    isAllChecked: f,
    sortConfig: g,
    handleCheckboxChange: (c) => {
      const j = r.some((h) => h.id === c.id) ? r.filter((h) => h.id !== c.id) : [...r, c];
      a(j), i == null || i(j);
    },
    handleSelectAll: (c) => {
      const b = c ? [...t] : [];
      a(b), i == null || i(b);
    },
    handleSort: (c, b) => {
      u({ key: c, direction: b }), o == null || o(c, b);
    },
    isRowSelected: (c) => r.some((b) => b.id === c.id)
  };
}, V = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 border-b border-default-200 last:border-b-0"
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4 even:bg-content2"
  },
  unstyled: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4",
    row: "py-4"
  }
}, F = ({
  columns: t = 5,
  rows: i = 5,
  checkboxSelection: o = !0,
  variant: r = "unstyled",
  className: a
}) => {
  const f = V[r], d = o ? t + 1 : t;
  return /* @__PURE__ */ e.jsxs(T, { radius: "sm", "aria-label": "Loading data", className: a, children: [
    /* @__PURE__ */ e.jsx(w, { className: s(f.header), children: Array(d).fill(null).map((g, u) => /* @__PURE__ */ e.jsx(z, { className: s(f.column), children: u === 0 && o ? /* @__PURE__ */ e.jsx(k, { className: "size-4 rounded-sm" }) : /* @__PURE__ */ e.jsx(k, { className: "h-4 w-24 rounded-sm" }) }, u)) }),
    /* @__PURE__ */ e.jsx(D, { children: Array(i).fill(null).map((g, u) => /* @__PURE__ */ e.jsx($, { className: s(f.row), children: Array(d).fill(null).map((n, S) => /* @__PURE__ */ e.jsx(G, { children: S === 0 && o ? /* @__PURE__ */ e.jsx(k, { className: "size-4 rounded-sm" }) : /* @__PURE__ */ e.jsx(k, { className: "h-4 w-full max-w-[200px] rounded-sm" }) }, S)) }, u)) })
  ] });
}, U = {
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
function q(t) {
  return typeof t.label == "string" && t.label.length > 0 ? t.label : typeof t.key == "string" && t.key.length > 0 ? t.key : "Column";
}
function J(t) {
  return typeof t == "string" && t.length > 0 ? `Sort by ${t}` : "Sort column";
}
function M(t, i, o) {
  const r = o.find(
    (a) => typeof a.field == "string" && String(a.field) === String(t)
  );
  if (r === void 0)
    return null;
  if (r.cell !== void 0)
    return r.cell(i);
  if (typeof r.field == "string" && r.field.length > 0 && r.field in i) {
    const a = i[r.field];
    return typeof a == "string" || typeof a == "number" ? String(a) : null;
  }
  return null;
}
function K({
  rows: t,
  columns: i,
  caption: o,
  onCheckedRowsChange: r,
  onSort: a,
  checkboxSelection: f = !0,
  classNames: d,
  variant: g = "unstyled",
  isLoading: u = !1,
  props: n
}) {
  const {
    isAllChecked: S,
    sortConfig: x,
    handleCheckboxChange: A,
    handleSelectAll: c,
    handleSort: b,
    isRowSelected: j
  } = R({
    rows: t,
    onCheckedRowsChange: r,
    onSort: a
  });
  if (u)
    return /* @__PURE__ */ e.jsx(
      F,
      {
        columns: i.length,
        checkboxSelection: f,
        variant: g,
        rows: 10
      }
    );
  const h = U[g], I = [
    ...f === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...i.map((l, y) => ({
      ...l,
      key: typeof l.field == "string" ? String(l.field) : String(y),
      label: l.header
    }))
  ], L = (l) => {
    const y = i.find(
      (v) => typeof v.field == "string" && v.field.length > 0 && String(v.field) === l.key
    ), m = y == null ? void 0 : y.field;
    m != null && m !== "actions" && b(m, x.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ e.jsxs(
    T,
    {
      "aria-label": typeof o == "string" ? o : void 0,
      ...n == null ? void 0 : n.tableProps,
      radius: "sm",
      children: [
        /* @__PURE__ */ e.jsx(
          w,
          {
            columns: I,
            className: s(h.header),
            ...n == null ? void 0 : n.tableHeaderProps,
            children: (l) => /* @__PURE__ */ e.jsx(
              z,
              {
                "aria-label": q(l),
                className: s(h.column),
                ...n == null ? void 0 : n.tableColumnProps,
                children: l.key === "checkbox" ? /* @__PURE__ */ e.jsx(
                  P,
                  {
                    isSelected: S,
                    onValueChange: c,
                    "aria-label": "Select all rows",
                    className: d == null ? void 0 : d.checkbox
                  }
                ) : /* @__PURE__ */ e.jsxs("div", { className: s("flex items-center gap-2"), children: [
                  l.label,
                  l.sortable === !0 && /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: s(
                        "relative size-4 cursor-pointer",
                        d == null ? void 0 : d.sortIcon
                      ),
                      onClick: () => L(l),
                      role: "button",
                      "aria-label": J(l.label),
                      children: [
                        /* @__PURE__ */ e.jsx(
                          B,
                          {
                            size: 16,
                            className: s(
                              "absolute -top-1",
                              x.key === l.key && x.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          E,
                          {
                            size: 16,
                            className: s(
                              "absolute top-1",
                              x.key === l.key && x.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              l.key
            )
          }
        ),
        /* @__PURE__ */ e.jsx(D, { items: t, ...n == null ? void 0 : n.tableBodyProps, children: (l) => /* @__PURE__ */ e.jsx(
          $,
          {
            "aria-label": `Row ${l.id}`,
            className: s(h.row),
            ...n == null ? void 0 : n.tableRowProps,
            children: (y) => /* @__PURE__ */ e.jsx(G, { ...n == null ? void 0 : n.tableCellProps, children: y === "checkbox" ? /* @__PURE__ */ e.jsx(
              P,
              {
                checked: j(l),
                onValueChange: () => A(l),
                "aria-label": `Select row ${l.id}`,
                className: d == null ? void 0 : d.checkbox
              }
            ) : /* @__PURE__ */ e.jsx("div", { className: d == null ? void 0 : d.cellContent, children: M(y, l, i) }) })
          },
          l.id
        ) })
      ]
    }
  );
}
export {
  K as DataGrid
};
