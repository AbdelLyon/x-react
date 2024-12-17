/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as T, forwardRef as D } from "react";
import { Table as N, TableHeader as G, TableColumn as g, Checkbox as A, TableBody as v, TableRow as z, TableCell as E } from "@nextui-org/react";
import { IconChevronUp as V, IconChevronDown as $ } from "@tabler/icons-react";
const B = (r, i, a) => {
  const [n, f] = j([]), [b, k] = j(!1), [p, u] = j({
    key: null,
    direction: "asc"
  });
  return T(() => {
    k(n.length === r.length);
  }, [n, r]), {
    checkedRows: n,
    isAllChecked: b,
    sortConfig: p,
    handleCheckboxChange: (t) => {
      f((c) => {
        const h = c.includes(t.id) ? c.filter((l) => l !== t.id) : [...c, t.id], e = r.filter((l) => h.includes(l.id));
        return i == null || i(e), h;
      });
    },
    handleSelectAll: (t) => {
      if (t) {
        const c = r.map((x) => x.id);
        f(c), i == null || i(r);
      } else
        f([]), i == null || i([]);
    },
    handleSort: (t, c) => {
      u({ key: t, direction: c }), a == null || a(t, c);
    },
    isRowChecked: (t) => n.includes(t.id)
  };
}, H = D(function({
  rows: i,
  columns: a,
  caption: n,
  className: f,
  onCheckedRowsChange: b,
  onSort: k,
  checkboxSelection: p = !0
}, u) {
  const {
    isAllChecked: m,
    sortConfig: o,
    handleCheckboxChange: S,
    handleSelectAll: I,
    handleSort: t,
    checkedRows: c,
    isRowChecked: x
  } = B(i, b, k), h = [
    ...p ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...a.map((e, l) => ({
      ...e,
      key: String(e.field || l),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ s.jsxs(N, { "aria-label": n, className: f, ref: u, children: [
    /* @__PURE__ */ s.jsx(G, { columns: h, children: (e) => /* @__PURE__ */ s.jsx(g, { children: e.key === "checkbox" ? /* @__PURE__ */ s.jsx(
      A,
      {
        isSelected: m,
        onValueChange: (l) => I(l)
      }
    ) : /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var d;
            const l = (d = a.find(
              (y) => String(y.field) === e.key
            )) == null ? void 0 : d.field;
            l && t(
              l,
              o.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ s.jsx(
              V,
              {
                size: 16,
                className: `absolute -top-1 ${o.key === e.key && o.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ s.jsx(
              $,
              {
                size: 16,
                className: `absolute top-1 ${o.key === e.key && o.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ s.jsx(v, { items: i, children: (e) => /* @__PURE__ */ s.jsx(z, { children: (l) => /* @__PURE__ */ s.jsx(E, { children: l === "checkbox" ? /* @__PURE__ */ s.jsx(
      A,
      {
        isSelected: x(e),
        onValueChange: () => {
          S(e), console.log("id => ", e.id), console.log("checkedRows => ", c);
        }
      }
    ) : (() => {
      const d = a.find(
        (y) => String(y.field) === l
      );
      return d ? d.cell ? d.cell(e) : d.field ? String(e[d.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
H.displayName = "DataGrid";
export {
  H as DataGrid
};
