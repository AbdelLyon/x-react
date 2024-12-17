/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { useState as p, useEffect as D, forwardRef as N } from "react";
import { Table as G, TableHeader as I, TableColumn as z, Checkbox as v, TableBody as E, TableRow as V, TableCell as $ } from "@nextui-org/react";
import { IconChevronUp as B, IconChevronDown as H } from "@tabler/icons-react";
const U = (n, l, r) => {
  const [f, o] = p(
    /* @__PURE__ */ new Set()
  ), [b, h] = p(!1), [y, u] = p({
    key: null,
    direction: "asc"
  });
  return D(() => {
    h(f.size === n.length);
  }, [f, n]), {
    checkedRows: f,
    isAllChecked: b,
    sortConfig: y,
    handleCheckboxChange: (i) => {
      o((a) => {
        const t = new Set(a);
        t.has(i.id) ? t.delete(i.id) : t.add(i.id);
        const S = n.filter((j) => t.has(j.id));
        return l == null || l(S), t;
      });
    },
    handleSelectAll: (i) => {
      if (i) {
        const a = new Set(n.map((t) => t.id));
        o(a), l == null || l(n);
      } else
        o(/* @__PURE__ */ new Set()), l == null || l([]);
    },
    handleSort: (i, a) => {
      u({ key: i, direction: a }), r == null || r(i, a);
    },
    isRowChecked: (i) => f.has(i.id)
  };
}, g = N(function({
  rows: l,
  columns: r,
  caption: f,
  className: o,
  onCheckedRowsChange: b,
  onSort: h,
  checkboxSelection: y = !0
}, u) {
  const {
    isAllChecked: m,
    sortConfig: x,
    handleCheckboxChange: A,
    handleSelectAll: T,
    handleSort: i,
    isRowChecked: a
  } = U(l, b, h), [t, S] = p();
  D(() => {
    t && a(t);
  }, [t, a]);
  const j = [
    ...y ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...r.map((e, d) => ({
      ...e,
      key: String(e.field || d),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ s.jsxs(G, { "aria-label": f, className: o, ref: u, children: [
    /* @__PURE__ */ s.jsx(I, { columns: j, children: (e) => /* @__PURE__ */ s.jsx(z, { children: e.key === "checkbox" ? /* @__PURE__ */ s.jsx(
      v,
      {
        isSelected: m,
        onValueChange: (d) => T(d)
      }
    ) : /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var c;
            const d = (c = r.find(
              (k) => String(k.field) === e.key
            )) == null ? void 0 : c.field;
            d && i(
              d,
              x.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ s.jsx(
              B,
              {
                size: 16,
                className: `absolute -top-1 ${x.key === e.key && x.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ s.jsx(
              H,
              {
                size: 16,
                className: `absolute top-1 ${x.key === e.key && x.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ s.jsx(E, { items: l, children: (e) => /* @__PURE__ */ s.jsx(V, { children: (d) => /* @__PURE__ */ s.jsx($, { children: d === "checkbox" ? /* @__PURE__ */ s.jsx(
      v,
      {
        isSelected: (t == null ? void 0 : t.id) === e.id,
        onValueChange: () => {
          A(e), S(e);
        }
      }
    ) : (() => {
      const c = r.find(
        (k) => String(k.field) === d
      );
      return c ? c.cell ? c.cell(e) : c.field ? String(e[c.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
g.displayName = "DataGrid";
export {
  g as DataGrid
};
