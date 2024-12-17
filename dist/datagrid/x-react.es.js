/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { useState as u, useEffect as T, forwardRef as v } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as A, TableBody as I, TableRow as g, TableCell as z } from "@nextui-org/react";
import { IconChevronUp as E, IconChevronDown as V } from "@tabler/icons-react";
const $ = (n, l, r) => {
  const [o, x] = u(
    /* @__PURE__ */ new Set()
  ), [p, b] = u(!1), [h, y] = u({
    key: null,
    direction: "asc"
  });
  return T(() => {
    b(o.size === n.length);
  }, [o, n]), {
    checkedRows: o,
    isAllChecked: p,
    sortConfig: h,
    handleCheckboxChange: (s) => {
      x((c) => {
        const i = new Set(c);
        i.has(s.id) ? i.delete(s.id) : i.add(s.id);
        const S = n.filter((e) => i.has(e.id));
        return l == null || l(S), i;
      });
    },
    handleSelectAll: (s) => {
      if (s) {
        const c = new Set(n.map((i) => i.id));
        x(c), l == null || l(n);
      } else
        x(/* @__PURE__ */ new Set()), l == null || l([]);
    },
    handleSort: (s, c) => {
      y({ key: s, direction: c }), r == null || r(s, c);
    }
  };
}, B = v(function({
  rows: l,
  columns: r,
  caption: o,
  className: x,
  onCheckedRowsChange: p,
  onSort: b,
  checkboxSelection: h = !0
}, y) {
  const {
    isAllChecked: k,
    sortConfig: f,
    handleCheckboxChange: m,
    handleSelectAll: s,
    handleSort: c,
    checkedRows: i
  } = $(l, p, b);
  console.log(i);
  const S = [
    ...h ? [
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
  return /* @__PURE__ */ t.jsxs(D, { "aria-label": o, className: x, ref: y, children: [
    /* @__PURE__ */ t.jsx(N, { columns: S, children: (e) => /* @__PURE__ */ t.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ t.jsx(
      A,
      {
        isSelected: k,
        onValueChange: (a) => s(a)
      }
    ) : /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var d;
            const a = (d = r.find(
              (j) => String(j.field) === e.key
            )) == null ? void 0 : d.field;
            a && c(
              a,
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
    /* @__PURE__ */ t.jsx(I, { items: l, children: (e) => /* @__PURE__ */ t.jsx(g, { children: (a) => (console.log("id => ", e.id), console.log("checkedRows => ", i), /* @__PURE__ */ t.jsx(z, { children: a === "checkbox" ? /* @__PURE__ */ t.jsx(
      A,
      {
        isSelected: i.has(e.id),
        onValueChange: () => {
          m(e);
        }
      }
    ) : (() => {
      const d = r.find(
        (j) => String(j.field) === a
      );
      return d ? d.cell ? d.cell(e) : d.field ? String(e[d.field]) : null : null;
    })() })) }, e.id) })
  ] });
});
B.displayName = "DataGrid";
export {
  B as DataGrid
};
