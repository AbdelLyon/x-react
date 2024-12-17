/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as S, useEffect as N, forwardRef as T } from "react";
import { Table as v, TableHeader as A, TableColumn as D, Checkbox as I, TableBody as G, TableRow as z, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as $ } from "@tabler/icons-react";
function B(f, i, r) {
  const [o, x] = S(
    /* @__PURE__ */ new Set()
  ), [p, b] = S(!1), [u, y] = S({
    key: null,
    direction: "asc"
  });
  N(() => {
    b(o.size === f.length);
  }, [o, f]);
  function h(t) {
    x((c) => {
      const a = new Set(c);
      a.has(t.id) ? a.delete(t.id) : a.add(t.id);
      const e = f.filter((s) => a.has(s.id));
      return i == null || i(e), console.log("New checked rows:", e), a;
    });
  }
  function n(t) {
    if (t) {
      const c = new Set(f.map((a) => a.id));
      x(c), i == null || i(f);
    } else
      x(/* @__PURE__ */ new Set()), i == null || i([]);
  }
  function j(t, c) {
    y({ key: t, direction: c }), r == null || r(t, c);
  }
  function k(t) {
    return o.has(t.id);
  }
  return {
    checkedRows: o,
    isAllChecked: p,
    sortConfig: u,
    handleCheckboxChange: h,
    handleSelectAll: n,
    handleSort: j,
    isRowChecked: k
  };
}
const H = T(function({
  rows: i,
  columns: r,
  caption: o,
  className: x,
  onCheckedRowsChange: p,
  onSort: b,
  checkboxSelection: u = !0
}, y) {
  const {
    isAllChecked: h,
    sortConfig: n,
    handleCheckboxChange: j,
    handleSelectAll: k,
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
    ...r.map((e, s) => ({
      ...e,
      key: String(e.field || s),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ l.jsxs(v, { "aria-label": o, className: x, ref: y, children: [
    /* @__PURE__ */ l.jsx(A, { columns: a, children: (e) => /* @__PURE__ */ l.jsx(D, { children: e.key === "checkbox" ? /* @__PURE__ */ l.jsx(
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
            var d;
            const s = (d = r.find(
              (m) => String(m.field) === e.key
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
    /* @__PURE__ */ l.jsx(G, { items: i, children: (e) => /* @__PURE__ */ l.jsx(z, { children: (s) => /* @__PURE__ */ l.jsx(E, { children: s === "checkbox" ? /* @__PURE__ */ l.jsx(
      I,
      {
        isSelected: c(e),
        onValueChange: () => j(e)
      }
    ) : (() => {
      const d = r.find(
        (m) => String(m.field) === s
      );
      return d ? d.cell ? d.cell(e) : d.field ? String(e[d.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
H.displayName = "DataGrid";
export {
  H as DataGrid
};
