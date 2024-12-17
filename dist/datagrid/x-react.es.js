/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as k, useEffect as v, forwardRef as A } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as T, TableBody as I, TableRow as z, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as $ } from "@tabler/icons-react";
function B(x, i, d) {
  const [n, o] = k(
    /* @__PURE__ */ new Set()
  ), [p, b] = k(!1), [u, y] = k({
    key: null,
    direction: "asc"
  });
  v(() => {
    b(n.size === x.length);
  }, [n, x]);
  function j(t) {
    o((c) => {
      const a = new Set(c);
      a.has(t.id) ? a.delete(t.id) : a.add(t.id);
      const e = x.filter((s) => a.has(s.id));
      return i == null || i(e), a;
    });
  }
  function f(t) {
    if (t) {
      const c = new Set(x.map((a) => a.id));
      o(c), i == null || i(x);
    } else
      o(/* @__PURE__ */ new Set()), i == null || i([]);
  }
  function h(t, c) {
    y({ key: t, direction: c }), d == null || d(t, c);
  }
  console.log(n);
  function m(t) {
    return n.has(t.id);
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
const H = A(function({
  rows: i,
  columns: d,
  caption: n,
  className: o,
  onCheckedRowsChange: p,
  onSort: b,
  checkboxSelection: u = !0
}, y) {
  const {
    isAllChecked: j,
    sortConfig: f,
    handleCheckboxChange: h,
    handleSelectAll: m,
    handleSort: t,
    isRowChecked: c
  } = B(i, p, b), a = [
    ...u ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...d.map((e, s) => ({
      ...e,
      key: String(e.field || s),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ l.jsxs(D, { "aria-label": n, className: o, ref: y, children: [
    /* @__PURE__ */ l.jsx(N, { columns: a, children: (e) => /* @__PURE__ */ l.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ l.jsx(
      T,
      {
        isSelected: j,
        onValueChange: (s) => m(s)
      }
    ) : /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var r;
            const s = (r = d.find(
              (S) => String(S.field) === e.key
            )) == null ? void 0 : r.field;
            s && t(
              s,
              f.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ l.jsx(
              V,
              {
                size: 16,
                className: `absolute -top-1 ${f.key === e.key && f.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ l.jsx(
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
    /* @__PURE__ */ l.jsx(I, { items: i, children: (e) => /* @__PURE__ */ l.jsx(z, { children: (s) => /* @__PURE__ */ l.jsx(E, { children: s === "checkbox" ? /* @__PURE__ */ l.jsx(
      T,
      {
        isSelected: c(e),
        onValueChange: () => {
          h(e);
        }
      }
    ) : (() => {
      const r = d.find(
        (S) => String(S.field) === s
      );
      return r ? r.cell ? r.cell(e) : r.field ? String(e[r.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
H.displayName = "DataGrid";
export {
  H as DataGrid
};
