/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { useState as m, useEffect as T, forwardRef as v } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as A, TableBody as I, TableRow as z, TableCell as g } from "@nextui-org/react";
import { IconChevronUp as E, IconChevronDown as V } from "@tabler/icons-react";
const $ = (n, l, r) => {
  const [x, p] = m(
    /* @__PURE__ */ new Set()
  ), [b, o] = m(!1), [h, y] = m({
    key: null,
    direction: "asc"
  });
  return T(() => {
    o(x.size === n.length);
  }, [x, n]), {
    checkedRows: x,
    isAllChecked: b,
    sortConfig: h,
    handleCheckboxChange: (a) => {
      p((c) => {
        const i = new Set(c);
        i.has(a.id) ? i.delete(a.id) : i.add(a.id);
        const S = n.filter((e) => i.has(e.id));
        return l == null || l(S), i;
      });
    },
    handleSelectAll: (a) => {
      if (a) {
        const c = new Set(n.map((i) => i.id));
        p(c), l == null || l(n);
      } else
        p(/* @__PURE__ */ new Set()), l == null || l([]);
    },
    handleSort: (a, c) => {
      y({ key: a, direction: c }), r == null || r(a, c);
    }
  };
}, B = v(function({
  rows: l,
  columns: r,
  caption: x,
  className: p,
  onCheckedRowsChange: b,
  onSort: o,
  checkboxSelection: h = !0
}, y) {
  const {
    isAllChecked: u,
    sortConfig: f,
    handleCheckboxChange: k,
    handleSelectAll: a,
    handleSort: c,
    checkedRows: i
  } = $(l, b, o);
  console.log(i);
  const S = [
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
  return console.log(i.has(l == null ? void 0 : l[0].id)), /* @__PURE__ */ t.jsxs(D, { "aria-label": x, className: p, ref: y, children: [
    /* @__PURE__ */ t.jsx(N, { columns: S, children: (e) => /* @__PURE__ */ t.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ t.jsx(
      A,
      {
        isSelected: u,
        onValueChange: (s) => a(s)
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
              (j) => String(j.field) === e.key
            )) == null ? void 0 : d.field;
            s && c(
              s,
              f.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ t.jsx(
              E,
              {
                size: 16,
                className: `absolute -top-1 ${f.key === e.key && f.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ t.jsx(
              V,
              {
                size: 16,
                className: `absolute top-1 ${f.key === e.key && f.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ t.jsx(I, { items: l, children: (e) => /* @__PURE__ */ t.jsx(z, { children: (s) => /* @__PURE__ */ t.jsx(g, { children: s === "checkbox" ? /* @__PURE__ */ t.jsx(
      A,
      {
        isSelected: i.has(e.id),
        onValueChange: () => {
          k(e);
        }
      }
    ) : (() => {
      const d = r.find(
        (j) => String(j.field) === s
      );
      return d ? d.cell ? d.cell(e) : d.field ? String(e[d.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
B.displayName = "DataGrid";
export {
  B as DataGrid
};
