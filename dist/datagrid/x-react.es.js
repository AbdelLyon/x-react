/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as k, useEffect as v, forwardRef as A } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as T, TableBody as I, TableRow as z, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as $ } from "@tabler/icons-react";
function B(f, i, r) {
  const [x, p] = k(
    /* @__PURE__ */ new Set()
  ), [o, b] = k(!1), [u, y] = k({
    key: null,
    direction: "asc"
  });
  v(() => {
    b(x.size === f.length);
  }, [x, f]);
  function j(t) {
    p((a) => {
      const c = new Set(a);
      c.has(t.id) ? c.delete(t.id) : c.add(t.id);
      const e = f.filter((s) => c.has(s.id));
      return i == null || i(e), c;
    });
  }
  function n(t) {
    if (t) {
      const a = new Set(f.map((c) => c.id));
      p(a), i == null || i(f);
    } else
      p(/* @__PURE__ */ new Set()), i == null || i([]);
  }
  function h(t, a) {
    y({ key: t, direction: a }), r == null || r(t, a);
  }
  function m(t) {
    return x.has(t.id);
  }
  return {
    checkedRows: x,
    isAllChecked: o,
    sortConfig: u,
    handleCheckboxChange: j,
    handleSelectAll: n,
    handleSort: h,
    isRowChecked: m
  };
}
const H = A(function({
  rows: i,
  columns: r,
  caption: x,
  className: p,
  onCheckedRowsChange: o,
  onSort: b,
  checkboxSelection: u = !0
}, y) {
  const {
    isAllChecked: j,
    sortConfig: n,
    handleCheckboxChange: h,
    handleSelectAll: m,
    handleSort: t,
    isRowChecked: a
  } = B(i, o, b), c = [
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
  return /* @__PURE__ */ l.jsxs(D, { "aria-label": x, className: p, ref: y, children: [
    /* @__PURE__ */ l.jsx(N, { columns: c, children: (e) => /* @__PURE__ */ l.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ l.jsx(
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
            var d;
            const s = (d = r.find(
              (S) => String(S.field) === e.key
            )) == null ? void 0 : d.field;
            s && t(
              s,
              n.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ l.jsx(
              V,
              {
                size: 16,
                className: `absolute -top-1 ${n.key === e.key && n.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ l.jsx(
              $,
              {
                size: 16,
                className: `absolute top-1 ${n.key === e.key && n.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ l.jsx(I, { items: i, children: (e) => /* @__PURE__ */ l.jsx(z, { children: (s) => /* @__PURE__ */ l.jsx(E, { children: s === "checkbox" ? /* @__PURE__ */ l.jsx(
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
H.displayName = "DataGrid";
export {
  H as DataGrid
};
