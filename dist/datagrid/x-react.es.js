/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as u, useEffect as T, forwardRef as v } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as A, TableBody as I, TableRow as z, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as $ } from "@tabler/icons-react";
const B = (n, l, r) => {
  const [f, h] = u(
    /* @__PURE__ */ new Set()
  ), [o, p] = u(!1), [b, k] = u({
    key: null,
    direction: "asc"
  });
  return T(() => {
    p(f.size === n.length);
  }, [f, n]), {
    checkedRows: f,
    isAllChecked: o,
    sortConfig: b,
    handleCheckboxChange: (t) => {
      h((c) => {
        const a = new Set(c);
        a.has(t.id) ? a.delete(t.id) : a.add(t.id);
        const e = n.filter((s) => a.has(s.id));
        return l == null || l(e), a;
      });
    },
    handleSelectAll: (t) => {
      if (t) {
        const c = new Set(n.map((a) => a.id));
        h(c), l == null || l(n);
      } else
        h(/* @__PURE__ */ new Set()), l == null || l([]);
    },
    handleSort: (t, c) => {
      k({ key: t, direction: c }), r == null || r(t, c);
    },
    isRowChecked: (t) => f.has(t.id)
  };
}, H = v(function({
  rows: l,
  columns: r,
  caption: f,
  className: h,
  onCheckedRowsChange: o,
  onSort: p,
  checkboxSelection: b = !0
}, k) {
  const {
    isAllChecked: j,
    sortConfig: x,
    handleCheckboxChange: m,
    handleSelectAll: S,
    handleSort: t,
    isRowChecked: c
  } = B(l, o, p), a = [
    ...b ? [
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
  return /* @__PURE__ */ i.jsxs(D, { "aria-label": f, className: h, ref: k, children: [
    /* @__PURE__ */ i.jsx(N, { columns: a, children: (e) => /* @__PURE__ */ i.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ i.jsx(
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
H.displayName = "DataGrid";
export {
  H as DataGrid
};
