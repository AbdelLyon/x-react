/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { useState as u, useEffect as T, forwardRef as v } from "react";
import { Table as D, TableHeader as N, TableColumn as G, Checkbox as A, TableBody as I, TableRow as z, TableCell as g } from "@nextui-org/react";
import { IconChevronUp as E, IconChevronDown as V } from "@tabler/icons-react";
const $ = (n, l, r) => {
  const [x, o] = u(
    /* @__PURE__ */ new Set()
  ), [p, b] = u(!1), [h, y] = u({
    key: null,
    direction: "asc"
  });
  return T(() => {
    b(x.size === n.length);
  }, [x, n]), {
    checkedRows: x,
    isAllChecked: p,
    sortConfig: h,
    handleCheckboxChange: (s) => {
      o((d) => {
        const i = new Set(d);
        i.has(s.id) ? i.delete(s.id) : i.add(s.id);
        const S = n.filter((e) => i.has(e.id));
        return l == null || l(S), i;
      });
    },
    handleSelectAll: (s) => {
      if (s) {
        const d = new Set(n.map((i) => i.id));
        o(d), l == null || l(n);
      } else
        o(/* @__PURE__ */ new Set()), l == null || l([]);
    },
    handleSort: (s, d) => {
      y({ key: s, direction: d }), r == null || r(s, d);
    }
  };
}, B = v(function({
  rows: l,
  columns: r,
  caption: x,
  className: o,
  onCheckedRowsChange: p,
  onSort: b,
  checkboxSelection: h = !0
}, y) {
  const {
    isAllChecked: m,
    sortConfig: f,
    handleCheckboxChange: k,
    handleSelectAll: s,
    handleSort: d,
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
  return /* @__PURE__ */ t.jsxs(D, { "aria-label": x, className: o, ref: y, children: [
    /* @__PURE__ */ t.jsx(N, { columns: S, children: (e) => /* @__PURE__ */ t.jsx(G, { children: e.key === "checkbox" ? /* @__PURE__ */ t.jsx(
      A,
      {
        isSelected: m,
        onValueChange: (a) => s(a)
      }
    ) : /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var c;
            const a = (c = r.find(
              (j) => String(j.field) === e.key
            )) == null ? void 0 : c.field;
            a && d(
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
    /* @__PURE__ */ t.jsx(I, { items: l, children: (e) => /* @__PURE__ */ t.jsx(z, { children: (a) => (console.log(e.id, i.has(e.id)), /* @__PURE__ */ t.jsx(g, { children: a === "checkbox" ? /* @__PURE__ */ t.jsx(
      A,
      {
        isSelected: i.has(e.id),
        onValueChange: () => {
          k(e);
        }
      }
    ) : (() => {
      const c = r.find(
        (j) => String(j.field) === a
      );
      return c ? c.cell ? c.cell(e) : c.field ? String(e[c.field]) : null : null;
    })() })) }, e.id) })
  ] });
});
B.displayName = "DataGrid";
export {
  B as DataGrid
};
