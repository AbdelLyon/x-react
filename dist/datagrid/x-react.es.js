/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { useState as I, useEffect as v, forwardRef as A } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as T, TableBody as z, TableRow as E, TableCell as V } from "@nextui-org/react";
import { IconChevronUp as $, IconChevronDown as B } from "@tabler/icons-react";
function H(f, i, r) {
  const [x, p] = I(
    /* @__PURE__ */ new Set()
  ), [b, u] = I(!1), [o, h] = I({
    key: null,
    direction: "asc"
  });
  v(() => {
    u(x.size === f.length);
  }, [x, f]);
  function y(t) {
    p((d) => {
      const s = new Set(d);
      s.has(t.id) ? s.delete(t.id) : s.add(t.id);
      const m = f.filter((e) => s.has(e.id));
      return i == null || i(m), s;
    });
  }
  function n(t) {
    if (t) {
      const d = new Set(f.map((s) => s.id));
      p(d), i == null || i(f);
    } else
      p(/* @__PURE__ */ new Set()), i == null || i([]);
  }
  function j(t, d) {
    h({ key: t, direction: d }), r == null || r(t, d);
  }
  function k(t) {
    return x.has(t.id);
  }
  return {
    checkedRows: x,
    isAllChecked: b,
    sortConfig: o,
    handleCheckboxChange: y,
    handleSelectAll: n,
    handleSort: j,
    isRowChecked: k
  };
}
const U = A(function({
  rows: i,
  columns: r,
  caption: x,
  className: p,
  onCheckedRowsChange: b,
  onSort: u,
  checkboxSelection: o = !0
}, h) {
  const {
    isAllChecked: y,
    sortConfig: n,
    handleCheckboxChange: j,
    handleSelectAll: k,
    handleSort: t,
    isRowChecked: d,
    checkedRows: s
  } = H(i, b, u), m = [
    ...o ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...r.map((e, a) => ({
      ...e,
      key: String(e.field || a),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ l.jsxs(D, { "aria-label": x, className: p, ref: h, children: [
    /* @__PURE__ */ l.jsx(N, { columns: m, children: (e) => /* @__PURE__ */ l.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ l.jsx(
      T,
      {
        isSelected: y,
        onValueChange: (a) => k(a)
      }
    ) : /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var c;
            const a = (c = r.find(
              (S) => String(S.field) === e.key
            )) == null ? void 0 : c.field;
            a && t(
              a,
              n.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ l.jsx(
              $,
              {
                size: 16,
                className: `absolute -top-1 ${n.key === e.key && n.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ l.jsx(
              B,
              {
                size: 16,
                className: `absolute top-1 ${n.key === e.key && n.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ l.jsx(z, { items: i, children: (e) => /* @__PURE__ */ l.jsx(E, { children: (a) => /* @__PURE__ */ l.jsx(V, { children: a === "checkbox" ? /* @__PURE__ */ l.jsx(
      T,
      {
        isSelected: s.has(e == null ? void 0 : e.id),
        onValueChange: () => {
          j(e), console.log(d(e));
        }
      }
    ) : (() => {
      const c = r.find(
        (S) => String(S.field) === a
      );
      return c ? c.cell ? c.cell(e) : c.field ? String(e[c.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
U.displayName = "DataGrid";
export {
  U as DataGrid
};
