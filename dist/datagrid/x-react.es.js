/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as u, useEffect as N, forwardRef as T } from "react";
import { Table as v, TableHeader as D, TableColumn as G, Checkbox as A, TableBody as I, TableRow as z, TableCell as g } from "@nextui-org/react";
import { IconChevronUp as E, IconChevronDown as V } from "@tabler/icons-react";
const $ = (n, l, r) => {
  const [f, b] = u(
    /* @__PURE__ */ new Set()
  ), [o, p] = u(!1), [h, k] = u({
    key: null,
    direction: "asc"
  });
  return N(() => {
    p(f.size === n.length);
  }, [f, n]), {
    checkedRows: f,
    isAllChecked: o,
    sortConfig: h,
    handleCheckboxChange: (t) => {
      b((c) => {
        const a = new Set(c);
        a.has(t.id) ? a.delete(t.id) : a.add(t.id);
        const e = n.filter((s) => a.has(s.id));
        return l == null || l(e), a;
      });
    },
    handleSelectAll: (t) => {
      if (t) {
        const c = new Set(n.map((a) => a.id));
        b(c), l == null || l(n);
      } else
        b(/* @__PURE__ */ new Set()), l == null || l([]);
    },
    handleSort: (t, c) => {
      k({ key: t, direction: c }), r == null || r(t, c);
    },
    isRowChecked: (t) => f.has(t.id)
  };
}, B = T(function({
  rows: l,
  columns: r,
  caption: f,
  className: b,
  onCheckedRowsChange: o,
  onSort: p,
  checkboxSelection: h = !0
}, k) {
  const {
    isAllChecked: j,
    sortConfig: x,
    handleCheckboxChange: m,
    handleSelectAll: S,
    handleSort: t,
    isRowChecked: c
  } = $(l, o, p), a = [
    ...h ? [
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
  return /* @__PURE__ */ i.jsxs(v, { "aria-label": f, className: b, ref: k, children: [
    /* @__PURE__ */ i.jsx(
      D,
      {
        columns: a,
        className: "dark:bg-background py-2",
        children: (e) => /* @__PURE__ */ i.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ i.jsx(
          A,
          {
            checked: j,
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
                  (y) => String(y.field) === e.key
                )) == null ? void 0 : d.field;
                s && t(
                  s,
                  x.direction === "asc" ? "desc" : "asc"
                );
              },
              children: [
                /* @__PURE__ */ i.jsx(
                  E,
                  {
                    size: 16,
                    className: `absolute -top-1 ${x.key === e.key && x.direction === "asc" ? "opacity-100" : "opacity-30"}`
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  V,
                  {
                    size: 16,
                    className: `absolute top-1 ${x.key === e.key && x.direction === "desc" ? "opacity-100" : "opacity-30"}`
                  }
                )
              ]
            }
          )
        ] }) }, e.key)
      }
    ),
    /* @__PURE__ */ i.jsx(I, { items: l, children: (e) => /* @__PURE__ */ i.jsx(z, { children: (s) => /* @__PURE__ */ i.jsx(g, { children: s === "checkbox" ? /* @__PURE__ */ i.jsx(
      A,
      {
        checked: c(e),
        onValueChange: () => {
          m(e);
        }
      }
    ) : (() => {
      const d = r.find(
        (y) => String(y.field) === s
      );
      return d ? d.cell ? d.cell(e) : d.field ? String(e[d.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
B.displayName = "DataGrid";
export {
  B as DataGrid
};
