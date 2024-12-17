/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { useState as m, useEffect as T, forwardRef as v } from "react";
import { Table as A, TableHeader as D, TableColumn as G, Checkbox as I, TableBody as E, TableRow as V, TableCell as $ } from "@nextui-org/react";
import { IconChevronUp as g, IconChevronDown as z } from "@tabler/icons-react";
function B(f, i, r) {
  const [x, b] = m(
    /* @__PURE__ */ new Set()
  ), [o, y] = m(!1), [k, h] = m({
    key: null,
    direction: "asc"
  });
  T(() => {
    y(x.size === f.length);
  }, [x, f]);
  function u(t) {
    b((c) => {
      const a = new Set(c);
      a.has(t.id) ? a.delete(t.id) : a.add(t.id);
      const e = f.filter((d) => a.has(d.id));
      return i == null || i(e), a;
    });
  }
  function n(t) {
    if (t) {
      const c = new Set(f.map((a) => a.id));
      b(c), i == null || i(f);
    } else
      b(/* @__PURE__ */ new Set()), i == null || i([]);
  }
  function S(t, c) {
    h({ key: t, direction: c }), r == null || r(t, c);
  }
  function j(t) {
    return x.has(t.id);
  }
  return {
    checkedRows: x,
    isAllChecked: o,
    sortConfig: k,
    handleCheckboxChange: u,
    handleSelectAll: n,
    handleSort: S,
    isRowChecked: j
  };
}
const H = v(function({
  rows: i,
  columns: r,
  caption: x,
  className: b,
  onCheckedRowsChange: o,
  onSort: y,
  checkboxSelection: k = !0
}, h) {
  const {
    isAllChecked: u,
    sortConfig: n,
    handleCheckboxChange: S,
    handleSelectAll: j,
    handleSort: t,
    isRowChecked: c
  } = B(i, o, y), a = [
    ...k ? [
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
  return /* @__PURE__ */ s.jsxs(A, { "aria-label": x, className: b, ref: h, children: [
    /* @__PURE__ */ s.jsx(D, { columns: a, children: (e) => {
      var d;
      return /* @__PURE__ */ s.jsx(
        G,
        {
          allowsSorting: e.sortable,
          className: e.key === "checkbox" ? "" : (d = r.find((l) => String(l.field) === e.key)) == null ? void 0 : d.className,
          children: e.key === "checkbox" ? /* @__PURE__ */ s.jsx(
            I,
            {
              isSelected: u,
              onValueChange: (l) => j(l)
            }
          ) : /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
            e.label,
            e.sortable && /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "relative w-4 h-4 cursor-pointer",
                onClick: () => {
                  var p;
                  const l = (p = r.find(
                    (N) => String(N.field) === e.key
                  )) == null ? void 0 : p.field;
                  l && t(
                    l,
                    n.direction === "asc" ? "desc" : "asc"
                  );
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    g,
                    {
                      className: `absolute -top-1 ${n.key === e.key && n.direction === "asc" ? "opacity-100" : "opacity-30"}`
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    z,
                    {
                      className: `absolute top-1 ${n.key === e.key && n.direction === "desc" ? "opacity-100" : "opacity-30"}`
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
    /* @__PURE__ */ s.jsx(E, { items: i, children: (e) => /* @__PURE__ */ s.jsx(V, { children: (d) => /* @__PURE__ */ s.jsx($, { children: d === "checkbox" ? /* @__PURE__ */ s.jsx(
      I,
      {
        isSelected: c(e),
        onValueChange: () => S(e)
      }
    ) : (() => {
      const l = r.find(
        (p) => String(p.field) === d
      );
      return l ? l.cell ? l.cell(e) : l.field ? String(e[l.field]) : null : null;
    })() }) }, e.id) })
  ] });
});
H.displayName = "DataGrid";
export {
  H as DataGrid
};
