/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as m, useEffect as v, forwardRef as A } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as T, TableBody as I, TableRow as z, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as $ } from "@tabler/icons-react";
const B = (o, t, r) => {
  const [n, x] = m(
    /* @__PURE__ */ new Set()
  ), [p, b] = m(!1), [y, h] = m({
    key: null,
    direction: "asc"
  });
  v(() => {
    b(n.size === o.length);
  }, [n, o]);
  const j = (l) => {
    x((c) => {
      const a = new Set(c);
      a.has(l.id) ? a.delete(l.id) : a.add(l.id);
      const e = o.filter((s) => a.has(s.id));
      return t == null || t(e), a;
    });
  }, f = (l) => {
    if (l) {
      const c = new Set(o.map((a) => a.id));
      x(c), t == null || t(o);
    } else
      x(/* @__PURE__ */ new Set()), t == null || t([]);
  }, u = (l, c) => {
    h({ key: l, direction: c }), r == null || r(l, c);
  };
  return console.log(n), {
    checkedRows: n,
    isAllChecked: p,
    sortConfig: y,
    handleCheckboxChange: j,
    handleSelectAll: f,
    handleSort: u,
    isRowChecked: (l) => n.has(l.id)
  };
}, H = A(function({
  rows: t,
  columns: r,
  caption: n,
  className: x,
  onCheckedRowsChange: p,
  onSort: b,
  checkboxSelection: y = !0
}, h) {
  const {
    isAllChecked: j,
    sortConfig: f,
    handleCheckboxChange: u,
    handleSelectAll: S,
    handleSort: l,
    isRowChecked: c
  } = B(t, p, b), a = [
    ...y ? [
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
  return /* @__PURE__ */ i.jsxs(D, { "aria-label": n, className: x, ref: h, children: [
    /* @__PURE__ */ i.jsx(N, { columns: a, children: (e) => /* @__PURE__ */ i.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ i.jsx(
      T,
      {
        isSelected: j,
        onValueChange: (s) => S(s)
      }
    ) : /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var d;
            const s = (d = r.find(
              (k) => String(k.field) === e.key
            )) == null ? void 0 : d.field;
            s && l(
              s,
              f.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ i.jsx(
              V,
              {
                size: 16,
                className: `absolute -top-1 ${f.key === e.key && f.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ i.jsx(
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
    /* @__PURE__ */ i.jsx(I, { items: t, children: (e) => /* @__PURE__ */ i.jsx(z, { children: (s) => /* @__PURE__ */ i.jsx(E, { children: s === "checkbox" ? /* @__PURE__ */ i.jsx(
      T,
      {
        isSelected: c(e),
        onValueChange: () => {
          u(e);
        }
      }
    ) : (() => {
      const d = r.find(
        (k) => String(k.field) === s
      );
      return d ? d.cell ? d.cell(e) : d.field ? String(e[d.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
H.displayName = "DataGrid";
export {
  H as DataGrid
};
