/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as v, forwardRef as D } from "react";
import { Table as N, TableHeader as G, TableColumn as I, Checkbox as T, TableBody as z, TableRow as E, TableCell as V } from "@nextui-org/react";
import { IconChevronUp as $, IconChevronDown as g } from "@tabler/icons-react";
const B = (n, l, r) => {
  const [f, x] = j(
    /* @__PURE__ */ new Set()
  ), [p, b] = j(!1), [h, y] = j({
    key: null,
    direction: "asc"
  });
  return v(() => {
    b(f.size === n.length);
  }, [f, n]), {
    checkedRows: f,
    isAllChecked: p,
    sortConfig: h,
    handleCheckboxChange: (t) => {
      x((c) => {
        const s = new Set(c);
        s.has(t.id) ? s.delete(t.id) : s.add(t.id);
        const k = n.filter((e) => s.has(e.id));
        return l == null || l(k), s;
      });
    },
    handleSelectAll: (t) => {
      if (t) {
        const c = new Set(n.map((s) => s.id));
        x(c), l == null || l(n);
      } else
        x(/* @__PURE__ */ new Set()), l == null || l([]);
    },
    handleSort: (t, c) => {
      y({ key: t, direction: c }), r == null || r(t, c);
    },
    isRowChecked: (t) => f.has(t.id)
  };
}, H = D(function({
  rows: l,
  columns: r,
  caption: f,
  className: x,
  onCheckedRowsChange: p,
  onSort: b,
  checkboxSelection: h = !0
}, y) {
  const {
    isAllChecked: u,
    sortConfig: o,
    handleCheckboxChange: m,
    handleSelectAll: A,
    handleSort: t,
    isRowChecked: c,
    checkedRows: s
  } = B(l, p, b);
  console.log(s);
  const k = [
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
  return /* @__PURE__ */ i.jsxs(N, { "aria-label": f, className: x, ref: y, children: [
    /* @__PURE__ */ i.jsx(G, { columns: k, children: (e) => /* @__PURE__ */ i.jsx(I, { children: e.key === "checkbox" ? /* @__PURE__ */ i.jsx(
      T,
      {
        isSelected: u,
        onValueChange: (a) => A(a)
      }
    ) : /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var d;
            const a = (d = r.find(
              (S) => String(S.field) === e.key
            )) == null ? void 0 : d.field;
            a && t(
              a,
              o.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ i.jsx(
              $,
              {
                size: 16,
                className: `absolute -top-1 ${o.key === e.key && o.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ i.jsx(
              g,
              {
                size: 16,
                className: `absolute top-1 ${o.key === e.key && o.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ i.jsx(z, { items: l, children: (e) => /* @__PURE__ */ i.jsx(E, { children: (a) => /* @__PURE__ */ i.jsx(V, { children: a === "checkbox" ? /* @__PURE__ */ i.jsx(
      T,
      {
        isSelected: c(e),
        onValueChange: () => {
          m(e);
        }
      }
    ) : (() => {
      const d = r.find(
        (S) => String(S.field) === a
      );
      return d ? d.cell ? d.cell(e) : d.field ? String(e[d.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
H.displayName = "DataGrid";
export {
  H as DataGrid
};
