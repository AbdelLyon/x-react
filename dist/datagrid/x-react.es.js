/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { useState as S, useEffect as T, forwardRef as v } from "react";
import { Table as A, TableHeader as D, TableColumn as N, Checkbox as I, TableBody as G, TableRow as z, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as $ } from "@tabler/icons-react";
function g(o, l, r) {
  const [n, x] = S(
    /* @__PURE__ */ new Set()
  ), [p, b] = S(!1), [u, y] = S({
    key: null,
    direction: "asc"
  });
  T(() => {
    b(n.size === o.length);
  }, [n, o]);
  function h(i) {
    x((a) => {
      const c = new Set(a);
      c.has(i.id) ? c.delete(i.id) : c.add(i.id);
      const e = o.filter((s) => c.has(s.id));
      return l == null || l(e), c;
    });
  }
  function f(i) {
    if (i) {
      const a = new Set(o.map((c) => c.id));
      x(a), l == null || l(o);
    } else
      x(/* @__PURE__ */ new Set()), l == null || l([]);
  }
  function j(i, a) {
    y({ key: i, direction: a }), r == null || r(i, a);
  }
  function k(i) {
    return console.log({ row: i, checkedRowIds: n }), n.has(i.id);
  }
  return {
    checkedRows: n,
    isAllChecked: p,
    sortConfig: u,
    handleCheckboxChange: h,
    handleSelectAll: f,
    handleSort: j,
    isRowChecked: k
  };
}
const B = v(function({
  rows: l,
  columns: r,
  caption: n,
  className: x,
  onCheckedRowsChange: p,
  onSort: b,
  checkboxSelection: u = !0
}, y) {
  const {
    isAllChecked: h,
    sortConfig: f,
    handleCheckboxChange: j,
    handleSelectAll: k,
    handleSort: i,
    isRowChecked: a
  } = g(l, p, b), c = [
    ...u ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...r.map((e, s) => ({
      ...e,
      key: String(e.field || s),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ t.jsxs(A, { "aria-label": n, className: x, ref: y, children: [
    /* @__PURE__ */ t.jsx(D, { columns: c, children: (e) => /* @__PURE__ */ t.jsx(N, { children: e.key === "checkbox" ? /* @__PURE__ */ t.jsx(
      I,
      {
        isSelected: h,
        onValueChange: (s) => k(s)
      }
    ) : /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var d;
            const s = (d = r.find(
              (m) => String(m.field) === e.key
            )) == null ? void 0 : d.field;
            s && i(
              s,
              f.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ t.jsx(
              V,
              {
                size: 16,
                className: `absolute -top-1 ${f.key === e.key && f.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ t.jsx(
              $,
              {
                size: 16,
                className: `absolute top-1 ${f.key === e.key && f.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ t.jsx(G, { items: l, children: (e) => /* @__PURE__ */ t.jsx(z, { children: (s) => /* @__PURE__ */ t.jsx(E, { children: s === "checkbox" ? /* @__PURE__ */ t.jsx(
      I,
      {
        isSelected: a(e),
        onValueChange: () => {
          j(e), console.log(a(e));
        }
      }
    ) : (() => {
      const d = r.find(
        (m) => String(m.field) === s
      );
      return d ? d.cell ? d.cell(e) : d.field ? String(e[d.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
B.displayName = "DataGrid";
export {
  B as DataGrid
};
