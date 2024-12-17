/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { useState as k, useEffect as v, forwardRef as A } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as T, TableBody as I, TableRow as z, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as $ } from "@tabler/icons-react";
function g(o, i, r) {
  const [n, x] = k(
    /* @__PURE__ */ new Set()
  ), [p, b] = k(!1), [u, y] = k({
    key: null,
    direction: "asc"
  });
  v(() => {
    b(n.size === o.length);
  }, [n, o]);
  function j(l) {
    x((a) => {
      const c = new Set(a);
      c.has(l.id) ? c.delete(l.id) : c.add(l.id);
      const e = o.filter((s) => c.has(s.id));
      return i == null || i(e), c;
    });
  }
  function f(l) {
    if (l) {
      const a = new Set(o.map((c) => c.id));
      x(a), i == null || i(o);
    } else
      x(/* @__PURE__ */ new Set()), i == null || i([]);
  }
  function h(l, a) {
    y({ key: l, direction: a }), r == null || r(l, a);
  }
  function m(l) {
    return console.log(n), n.has(l.id);
  }
  return {
    checkedRows: n,
    isAllChecked: p,
    sortConfig: u,
    handleCheckboxChange: j,
    handleSelectAll: f,
    handleSort: h,
    isRowChecked: m
  };
}
const B = A(function({
  rows: i,
  columns: r,
  caption: n,
  className: x,
  onCheckedRowsChange: p,
  onSort: b,
  checkboxSelection: u = !0
}, y) {
  const {
    isAllChecked: j,
    sortConfig: f,
    handleCheckboxChange: h,
    handleSelectAll: m,
    handleSort: l,
    isRowChecked: a
  } = g(i, p, b), c = [
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
  return /* @__PURE__ */ t.jsxs(D, { "aria-label": n, className: x, ref: y, children: [
    /* @__PURE__ */ t.jsx(N, { columns: c, children: (e) => /* @__PURE__ */ t.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ t.jsx(
      T,
      {
        isSelected: j,
        onValueChange: (s) => m(s)
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
              (S) => String(S.field) === e.key
            )) == null ? void 0 : d.field;
            s && l(
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
    /* @__PURE__ */ t.jsx(I, { items: i, children: (e) => /* @__PURE__ */ t.jsx(z, { children: (s) => /* @__PURE__ */ t.jsx(E, { children: s === "checkbox" ? /* @__PURE__ */ t.jsx(
      T,
      {
        isSelected: a(e),
        onValueChange: () => {
          h(e), console.log(a(e));
        }
      }
    ) : (() => {
      const d = r.find(
        (S) => String(S.field) === s
      );
      return d ? d.cell ? d.cell(e) : d.field ? String(e[d.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
B.displayName = "DataGrid";
export {
  B as DataGrid
};
