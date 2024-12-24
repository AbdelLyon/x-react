/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { useState as C, useEffect as $ } from "react";
import { cn as b } from "../utils/x-react.es.js";
import { Table as P, TableHeader as z, TableColumn as D, Skeleton as k, TableBody as I, TableRow as G, TableCell as R, Checkbox as T } from "@nextui-org/react";
import { IconChevronUp as B, IconChevronDown as E } from "@tabler/icons-react";
const H = {
  key: null,
  direction: "asc"
}, w = ({
  rows: e,
  onCheckedRowsChange: r,
  onSort: o
}) => {
  const [i, a] = C([]), [f, d] = C(!1), [g, u] = C(H);
  return $(() => {
    d(i.length === e.length && e.length > 0);
  }, [i, e]), {
    selectedRows: i,
    isAllChecked: f,
    sortConfig: g,
    handleCheckboxChange: (c) => {
      const S = i.some((y) => y.id === c.id) ? i.filter((y) => y.id !== c.id) : [...i, c];
      a(S), r == null || r(S);
    },
    handleSelectAll: (c) => {
      const s = c ? [...e] : [];
      a(s), r == null || r(s);
    },
    handleSort: (c, s) => {
      u({ key: c, direction: s }), o == null || o(c, s);
    },
    isRowSelected: (c) => i.some((s) => s.id === c.id)
  };
}, F = ({
  columns: e = 5,
  rows: r = 5,
  checkboxSelection: o = !0,
  variant: i = "unstyled",
  className: a
}) => {
  const f = L[i], d = o ? e + 1 : e;
  return /* @__PURE__ */ t.jsxs(P, { radius: "sm", "aria-label": "Loading data", className: a, children: [
    /* @__PURE__ */ t.jsx(z, { className: b(f.header), children: Array(d).fill(null).map((g, u) => /* @__PURE__ */ t.jsx(D, { className: b(f.column), children: u === 0 && o ? /* @__PURE__ */ t.jsx(k, { className: "size-4 rounded-md" }) : /* @__PURE__ */ t.jsx(k, { className: "h-4 w-24 rounded-md" }) }, u)) }),
    /* @__PURE__ */ t.jsx(I, { children: Array(r).fill(null).map((g, u) => /* @__PURE__ */ t.jsx(G, { className: b(f.row), children: Array(d).fill(null).map((n, j) => /* @__PURE__ */ t.jsx(R, { children: j === 0 && o ? /* @__PURE__ */ t.jsx(k, { className: "size-4 rounded-md" }) : /* @__PURE__ */ t.jsx(k, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, j)) }, u)) })
  ] });
}, L = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2 h-12"
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 even:bg-content2 h-12"
  },
  unstyled: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 hover:bg-content2 h-12"
  }
};
function U(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function q(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function J(e, r, o) {
  const i = o.find(
    (a) => typeof a.field == "string" && String(a.field) === String(e)
  );
  if (i === void 0)
    return null;
  if (i.cell !== void 0)
    return i.cell(r);
  if (typeof i.field == "string" && i.field.length > 0 && i.field in r) {
    const a = r[i.field];
    return typeof a == "string" || typeof a == "number" ? String(a) : null;
  }
  return null;
}
function Z({
  rows: e,
  columns: r,
  caption: o,
  onCheckedRowsChange: i,
  onSort: a,
  checkboxSelection: f = !0,
  classNames: d,
  variant: g = "unstyled",
  isLoading: u = !1,
  props: n
}) {
  const {
    isAllChecked: j,
    sortConfig: x,
    handleCheckboxChange: A,
    handleSelectAll: c,
    handleSort: s,
    isRowSelected: S
  } = w({
    rows: e,
    onCheckedRowsChange: i,
    onSort: a
  });
  if (u)
    return /* @__PURE__ */ t.jsx(
      F,
      {
        columns: r.length,
        checkboxSelection: f,
        variant: g,
        rows: e.length
      }
    );
  const y = L[g], V = [
    ...f === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...r.map((l, h) => ({
      ...l,
      key: typeof l.field == "string" ? String(l.field) : String(h),
      label: l.header
    }))
  ], _ = (l) => {
    const h = r.find(
      (v) => typeof v.field == "string" && v.field.length > 0 && String(v.field) === l.key
    ), m = h == null ? void 0 : h.field;
    m != null && m !== "actions" && s(m, x.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ t.jsxs(
    P,
    {
      "aria-label": typeof o == "string" ? o : void 0,
      ...n == null ? void 0 : n.tableProps,
      radius: "sm",
      children: [
        /* @__PURE__ */ t.jsx(
          z,
          {
            columns: V,
            className: b(y.header),
            ...n == null ? void 0 : n.tableHeaderProps,
            children: (l) => /* @__PURE__ */ t.jsx(
              D,
              {
                "aria-label": U(l),
                className: b(y.column),
                ...n == null ? void 0 : n.tableColumnProps,
                children: l.key === "checkbox" ? /* @__PURE__ */ t.jsx(
                  T,
                  {
                    isSelected: j,
                    onValueChange: c,
                    "aria-label": "Select all rows",
                    className: d == null ? void 0 : d.checkbox
                  }
                ) : /* @__PURE__ */ t.jsxs("div", { className: b("flex items-center gap-2"), children: [
                  l.label,
                  l.sortable === !0 && /* @__PURE__ */ t.jsxs(
                    "div",
                    {
                      className: b(
                        "relative size-4 cursor-pointer",
                        d == null ? void 0 : d.sortIcon
                      ),
                      onClick: () => _(l),
                      role: "button",
                      "aria-label": q(l.label),
                      children: [
                        /* @__PURE__ */ t.jsx(
                          B,
                          {
                            size: 16,
                            className: b(
                              "absolute -top-1",
                              x.key === l.key && x.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ t.jsx(
                          E,
                          {
                            size: 16,
                            className: b(
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
        /* @__PURE__ */ t.jsx(I, { items: e, ...n == null ? void 0 : n.tableBodyProps, children: (l) => /* @__PURE__ */ t.jsx(
          G,
          {
            "aria-label": `Row ${l.id}`,
            className: b(y.row),
            ...n == null ? void 0 : n.tableRowProps,
            children: (h) => /* @__PURE__ */ t.jsx(R, { ...n == null ? void 0 : n.tableCellProps, children: h === "checkbox" ? /* @__PURE__ */ t.jsx(
              T,
              {
                checked: S(l),
                onValueChange: () => A(l),
                "aria-label": `Select row ${l.id}`,
                className: d == null ? void 0 : d.checkbox
              }
            ) : /* @__PURE__ */ t.jsx("div", { className: d == null ? void 0 : d.cellContent, children: J(h, l, r) }) })
          },
          l.id
        ) })
      ]
    }
  );
}
export {
  Z as DataGrid
};
