import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { Table as N, TableHeader as T, TableColumn as v, Checkbox as h, TableBody as D, TableRow as I, TableCell as E } from "@nextui-org/react";
import { IconChevronsUp as G, IconChevronsDown as V } from "@tabler/icons-react";
import { useState as u, useEffect as $, useCallback as m } from "react";
function z(r, i, d) {
  const [n, f] = u(/* @__PURE__ */ new Set()), [y, p] = u(!1), [j, k] = u({
    key: null,
    direction: "asc"
  });
  $(() => {
    p(n.size === r.length);
  }, [n, r]);
  const c = m(
    (a) => {
      f((x) => {
        const e = new Set(x), l = Array.from(e).find(
          (t) => t.id === a.id
        );
        return l ? e.delete(l) : e.add(a), i == null || i(Array.from(e)), e;
      });
    },
    [i]
  ), S = m(
    (a) => {
      a ? (f(new Set(r)), i == null || i(r)) : (f(/* @__PURE__ */ new Set()), i == null || i([]));
    },
    [r, i]
  ), o = m(
    (a, x) => {
      k((e) => {
        const l = e.key === a && e.direction === "asc" ? "desc" : "asc";
        return d == null || d(a, x), { key: a, direction: l };
      });
    },
    [d]
  );
  return {
    checkedRows: n,
    isAllChecked: y,
    sortConfig: j,
    handleCheckboxChange: c,
    handleSelectAll: S,
    handleSort: o
  };
}
function q({
  rows: r,
  columns: i,
  caption: d,
  className: n,
  onCheckedRowsChange: f,
  onSort: y,
  checkboxSelection: p = !0
}) {
  const {
    checkedRows: j,
    isAllChecked: k,
    sortConfig: c,
    handleCheckboxChange: S,
    handleSelectAll: o,
    handleSort: a
  } = z(r, f, y), x = [
    ...p ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...i.map((e, l) => ({
      ...e,
      key: String(e.field || l),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ s.jsxs(N, { "aria-label": d, className: n, children: [
    /* @__PURE__ */ s.jsx(T, { columns: x, children: (e) => {
      var l;
      return /* @__PURE__ */ s.jsx(
        v,
        {
          allowsSorting: e.sortable,
          className: e.key === "checkbox" ? "" : (l = i.find((t) => String(t.field) === e.key)) == null ? void 0 : l.className,
          children: e.key === "checkbox" ? /* @__PURE__ */ s.jsx(
            h,
            {
              isSelected: k,
              onValueChange: (t) => o(t)
            }
          ) : /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
            e.label,
            e.sortable && /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "relative w-4 h-4 cursor-pointer",
                onClick: () => {
                  var b;
                  const t = (b = i.find(
                    (A) => String(A.field) === e.key
                  )) == null ? void 0 : b.field;
                  t && a(
                    t,
                    c.direction === "asc" ? "desc" : "asc"
                  );
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    G,
                    {
                      className: `absolute -top-1 ${c.key === e.key && c.direction === "asc" ? "opacity-100" : "opacity-30"}`
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    V,
                    {
                      className: `absolute top-1 ${c.key === e.key && c.direction === "desc" ? "opacity-100" : "opacity-30"}`
                    }
                  )
                ]
              }
            )
          ] })
        },
        e.key
      );
    } }),
    /* @__PURE__ */ s.jsx(D, { items: r, children: (e) => /* @__PURE__ */ s.jsx(I, { children: (l) => /* @__PURE__ */ s.jsx(E, { children: l === "checkbox" ? /* @__PURE__ */ s.jsx(
      h,
      {
        isSelected: j.has(e),
        onValueChange: () => S(e)
      }
    ) : (() => {
      const t = i.find(
        (b) => String(b.field) === l
      );
      return t ? t.cell ? t.cell(e) : t.field ? String(e[t.field]) : null : null;
    })() }) }, e.id) })
  ] });
}
export {
  q as DataGrid
};
