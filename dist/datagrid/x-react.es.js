/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as S, useEffect as T, forwardRef as v } from "react";
import { Table as A, TableHeader as D, TableColumn as N, Checkbox as I, TableBody as G, TableRow as z, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as $ } from "@tabler/icons-react";
function B(f, i, r) {
  const [x, p] = S(
    /* @__PURE__ */ new Set()
  ), [b, o] = S(!1), [u, y] = S({
    key: null,
    direction: "asc"
  });
  T(() => {
    o(x.size === f.length);
  }, [x, f]);
  function h(t) {
    p((d) => {
      const a = new Set(d);
      a.has(t.id) ? a.delete(t.id) : a.add(t.id);
      const e = f.filter((s) => a.has(s.id));
      return i == null || i(e), a;
    });
  }
  function n(t) {
    if (t) {
      const d = new Set(f.map((a) => a.id));
      p(d), i == null || i(f);
    } else
      p(/* @__PURE__ */ new Set()), i == null || i([]);
  }
  function j(t, d) {
    y({ key: t, direction: d }), r == null || r(t, d);
  }
  function k(t) {
    return x.has(t.id);
  }
  return {
    checkedRows: x,
    isAllChecked: b,
    sortConfig: u,
    handleCheckboxChange: h,
    handleSelectAll: n,
    handleSort: j,
    isRowChecked: k
  };
}
const H = v(function({
  rows: i,
  columns: r,
  caption: x,
  className: p,
  onCheckedRowsChange: b,
  onSort: o,
  checkboxSelection: u = !0
}, y) {
  const {
    isAllChecked: h,
    sortConfig: n,
    handleCheckboxChange: j,
    handleSelectAll: k,
    handleSort: t,
    isRowChecked: d
  } = B(i, b, o), a = [
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
  return /* @__PURE__ */ l.jsxs(A, { "aria-label": x, className: p, ref: y, children: [
    /* @__PURE__ */ l.jsx(D, { columns: a, children: (e) => /* @__PURE__ */ l.jsx(N, { children: e.key === "checkbox" ? /* @__PURE__ */ l.jsx(
      I,
      {
        isSelected: h,
        onValueChange: (s) => k(s)
      }
    ) : /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var c;
            const s = (c = r.find(
              (m) => String(m.field) === e.key
            )) == null ? void 0 : c.field;
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
    /* @__PURE__ */ l.jsx(G, { items: i, children: (e) => /* @__PURE__ */ l.jsx(z, { children: (s) => /* @__PURE__ */ l.jsx(E, { children: s === "checkbox" ? /* @__PURE__ */ l.jsx(
      I,
      {
        isSelected: d(e),
        onValueChange: () => j(e)
      }
    ) : (() => {
      const c = r.find(
        (m) => String(m.field) === s
      );
      return c ? c.cell ? c.cell(e) : c.field ? String(e[c.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
H.displayName = "DataGrid";
export {
  H as DataGrid
};
