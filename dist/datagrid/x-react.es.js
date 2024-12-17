/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as S, useEffect as T, forwardRef as v } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as A, TableBody as I, TableRow as z, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as $ } from "@tabler/icons-react";
const B = (n, l, c) => {
  const [f, o] = S(
    /* @__PURE__ */ new Set()
  ), [p, b] = S(!1), [h, y] = S({
    key: null,
    direction: "asc"
  });
  return T(() => {
    b(f.size === n.length);
  }, [f, n]), {
    checkedRows: f,
    isAllChecked: p,
    sortConfig: h,
    handleCheckboxChange: (t) => {
      o((d) => {
        const a = new Set(d);
        a.has(t.id) ? a.delete(t.id) : a.add(t.id);
        const e = n.filter((s) => a.has(s.id));
        return l == null || l(e), a;
      });
    },
    handleSelectAll: (t) => {
      if (t) {
        const d = new Set(n.map((a) => a.id));
        o(d), l == null || l(n);
      } else
        o(/* @__PURE__ */ new Set()), l == null || l([]);
    },
    handleSort: (t, d) => {
      y({ key: t, direction: d }), c == null || c(t, d);
    },
    isRowChecked: (t) => f.has(t.id)
  };
}, H = v(function({
  rows: l,
  columns: c,
  caption: f,
  className: o,
  onCheckedRowsChange: p,
  onSort: b,
  checkboxSelection: h = !0
}, y) {
  const {
    isAllChecked: j,
    sortConfig: x,
    handleCheckboxChange: k,
    handleSelectAll: m,
    handleSort: t,
    isRowChecked: d
  } = B(l, p, b), a = [
    ...h ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...c.map((e, s) => ({
      ...e,
      key: String(e.field || s),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ i.jsxs(D, { "aria-label": f, className: o, ref: y, children: [
    /* @__PURE__ */ i.jsx(N, { columns: a, children: (e) => /* @__PURE__ */ i.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ i.jsx(
      A,
      {
        isSelected: j,
        onValueChange: (s) => m(s)
      }
    ) : /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var r;
            const s = (r = c.find(
              (u) => String(u.field) === e.key
            )) == null ? void 0 : r.field;
            s && t(
              s,
              x.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ i.jsx(
              V,
              {
                size: 16,
                className: `absolute -top-1 ${x.key === e.key && x.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ i.jsx(
              $,
              {
                size: 16,
                className: `absolute top-1 ${x.key === e.key && x.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ i.jsx(I, { items: l, children: (e) => /* @__PURE__ */ i.jsx(z, { children: (s) => /* @__PURE__ */ i.jsx(E, { children: s === "checkbox" ? /* @__PURE__ */ i.jsx(
      A,
      {
        isSelected: d(e),
        onValueChange: () => k(e)
      }
    ) : (() => {
      const r = c.find(
        (u) => String(u.field) === s
      );
      return r ? r.cell ? r.cell(e) : r.field ? String(e[r.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
H.displayName = "DataGrid";
export {
  H as DataGrid
};
