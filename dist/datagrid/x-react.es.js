/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { useState as u, useEffect as T, forwardRef as v } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as A, TableBody as I, TableRow as z, TableCell as g } from "@nextui-org/react";
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
    handleCheckboxChange: (i) => {
      x((c) => {
        const s = new Set(c);
        s.has(i.id) ? s.delete(i.id) : s.add(i.id);
        const S = n.filter((e) => s.has(e.id));
        return l == null || l(S), s;
      });
    },
    handleSelectAll: (i) => {
      if (i) {
        const c = new Set(n.map((s) => s.id));
        x(c), l == null || l(n);
      } else
        x(/* @__PURE__ */ new Set()), l == null || l([]);
    },
    handleSort: (i, c) => {
      y({ key: i, direction: c }), r == null || r(i, c);
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
    handleSelectAll: i,
    handleSort: c,
    checkedRows: s
  } = $(l, p, b), S = [
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
        onValueChange: (a) => i(a)
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
    /* @__PURE__ */ t.jsx(I, { items: l, children: (e) => /* @__PURE__ */ t.jsx(z, { children: (a) => /* @__PURE__ */ t.jsx(g, { children: a === "checkbox" ? /* @__PURE__ */ t.jsx(
      A,
      {
        isSelected: s.has(e.id),
        onValueChange: () => {
          m(e), console.log("id => ", e.id), console.log("checkedRows => ", s);
        }
      }
    ) : (() => {
      const d = r.find(
        (j) => String(j.field) === a
      );
      return d ? d.cell ? d.cell(e) : d.field ? String(e[d.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
B.displayName = "DataGrid";
export {
  B as DataGrid
};
