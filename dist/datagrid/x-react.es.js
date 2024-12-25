/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as v, useEffect as V } from "react";
import { cn as s } from "../utils/x-react.es.js";
import { Table as P, TableHeader as z, TableColumn as D, Skeleton as S, TableBody as I, TableRow as R, TableCell as G, Checkbox as T } from "@nextui-org/react";
import { IconChevronUp as _, IconChevronDown as B } from "@tabler/icons-react";
const E = {
  key: null,
  direction: "asc"
}, H = ({
  rows: l,
  onCheckedRowsChange: a,
  onSort: c
}) => {
  const [n, d] = v([]), [r, h] = v(!1), [g, e] = v(E);
  return V(() => {
    h(n.length === l.length && l.length > 0);
  }, [n, l]), {
    selectedRows: n,
    isAllChecked: r,
    sortConfig: g,
    handleCheckboxChange: (o) => {
      const y = n.some((x) => x.id === o.id) ? n.filter((x) => x.id !== o.id) : [...n, o];
      d(y), a == null || a(y);
    },
    handleSelectAll: (o) => {
      const b = o ? [...l] : [];
      d(b), a == null || a(b);
    },
    handleSort: (o, b) => {
      e({ key: o, direction: b }), c == null || c(o, b);
    },
    isRowSelected: (o) => n.some((b) => b.id === o.id)
  };
}, w = ({
  columns: l = 5,
  rows: a = 5,
  checkboxSelection: c = !0,
  variant: n = "unstyled",
  className: d
}) => {
  const r = $[n], h = c ? l + 1 : l;
  return /* @__PURE__ */ i.jsxs(P, { radius: "sm", "aria-label": "Loading data", className: d, children: [
    /* @__PURE__ */ i.jsx(z, { className: s(r.header), children: Array(h).fill(null).map((g, e) => /* @__PURE__ */ i.jsx(D, { className: s(r.column), children: e === 0 && c ? /* @__PURE__ */ i.jsx(S, { className: "size-4 rounded-md" }) : /* @__PURE__ */ i.jsx(S, { className: "h-4 w-24 rounded-md" }) }, e)) }),
    /* @__PURE__ */ i.jsx(I, { children: Array(a).fill(null).map((g, e) => /* @__PURE__ */ i.jsx(R, { className: s(r.row), children: Array(h).fill(null).map((m, f) => /* @__PURE__ */ i.jsx(G, { children: f === 0 && c ? /* @__PURE__ */ i.jsx(S, { className: "size-4 rounded-md" }) : /* @__PURE__ */ i.jsx(S, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, e)) })
  ] });
}, $ = {
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
function F(l) {
  return typeof l.label == "string" && l.label.length > 0 ? l.label : typeof l.key == "string" && l.key.length > 0 ? l.key : "Column";
}
function U(l) {
  return typeof l == "string" && l.length > 0 ? `Sort by ${l}` : "Sort column";
}
function q(l, a, c) {
  const n = c.find(
    (d) => typeof d.field == "string" && String(d.field) === String(l)
  );
  if (n === void 0)
    return null;
  if (n.cell !== void 0)
    return n.cell(a);
  if (typeof n.field == "string" && n.field.length > 0 && n.field in a) {
    const d = a[n.field];
    return typeof d == "string" || typeof d == "number" ? String(d) : null;
  }
  return null;
}
function Y({
  rows: l,
  columns: a,
  onCheckedRowsChange: c,
  onSort: n,
  checkboxSelection: d = !0,
  classNames: r,
  variant: h = "unstyled",
  isLoading: g = !1,
  props: e
}) {
  const {
    isAllChecked: m,
    sortConfig: f,
    handleCheckboxChange: C,
    handleSelectAll: A,
    handleSort: o,
    isRowSelected: b
  } = H({
    rows: l,
    onCheckedRowsChange: c,
    onSort: n
  });
  if (g)
    return /* @__PURE__ */ i.jsx(
      w,
      {
        columns: a.length,
        checkboxSelection: d,
        variant: h,
        rows: l.length
      }
    );
  const y = $[h], x = [
    ...d === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...a.map((t, u) => ({
      ...t,
      key: typeof t.field == "string" ? String(t.field) : String(u),
      label: t.header
    }))
  ], L = (t) => {
    const u = a.find(
      (k) => typeof k.field == "string" && k.field.length > 0 && String(k.field) === t.key
    ), j = u == null ? void 0 : u.field;
    j != null && j !== "actions" && o(j, f.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ i.jsxs(
    P,
    {
      "aria-label": "data-grid",
      "aria-labelledby": "data-grid",
      ...e == null ? void 0 : e.tableProps,
      radius: "sm",
      children: [
        /* @__PURE__ */ i.jsx(
          z,
          {
            "aria-label": "data-grid-header",
            "aria-labelledby": "data-grid-header",
            columns: x,
            className: s(y.header),
            ...e == null ? void 0 : e.tableHeaderProps,
            children: (t) => /* @__PURE__ */ i.jsx(
              D,
              {
                "aria-labelledby": t.key,
                "aria-label": F(t),
                className: s(y.column),
                ...e == null ? void 0 : e.tableColumnProps,
                children: t.key === "checkbox" ? /* @__PURE__ */ i.jsx(
                  T,
                  {
                    isSelected: m,
                    onValueChange: A,
                    "aria-label": "Select all rows",
                    className: r == null ? void 0 : r.checkbox
                  }
                ) : /* @__PURE__ */ i.jsxs("div", { className: s("flex items-center gap-2"), children: [
                  t.label,
                  t.sortable === !0 && /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: s(
                        "relative size-4 cursor-pointer",
                        r == null ? void 0 : r.sortIcon
                      ),
                      onClick: () => L(t),
                      role: "button",
                      "aria-label": U(t.label),
                      children: [
                        /* @__PURE__ */ i.jsx(
                          _,
                          {
                            size: 16,
                            className: s(
                              "absolute -top-1",
                              f.key === t.key && f.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ i.jsx(
                          B,
                          {
                            size: 16,
                            className: s(
                              "absolute top-1",
                              f.key === t.key && f.direction === "desc" ? "opacity-100" : "opacity-30"
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
        /* @__PURE__ */ i.jsx(I, { items: l, ...e == null ? void 0 : e.tableBodyProps, children: (t) => /* @__PURE__ */ i.jsx(
          R,
          {
            "aria-label": `Row ${t.id}`,
            "aria-labelledby": `Row ${t.id}`,
            className: s(y.row),
            ...e == null ? void 0 : e.tableRowProps,
            children: (u) => /* @__PURE__ */ i.jsx(G, { ...e == null ? void 0 : e.tableCellProps, children: u === "checkbox" ? /* @__PURE__ */ i.jsx(
              T,
              {
                checked: b(t),
                onValueChange: () => C(t),
                "aria-label": `Select row ${t.id}`,
                className: r == null ? void 0 : r.checkbox
              }
            ) : /* @__PURE__ */ i.jsx("div", { className: r == null ? void 0 : r.cellContent, children: q(u, t, a) }) })
          },
          t.id
        ) })
      ]
    }
  );
}
export {
  Y as DataGrid
};
