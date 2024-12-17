/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { Table as m, TableHeader as A, TableColumn as T, Checkbox as S, TableBody as v, TableRow as I, TableCell as N } from "@nextui-org/react";
import { IconChevronUp as z, IconChevronDown as D } from "@tabler/icons-react";
import { useState as o, useEffect as E } from "react";
const G = (c, t, n) => {
  const [r, f] = o(
    /* @__PURE__ */ new Set()
  ), [h, b] = o(!1), [p, d] = o({
    key: null,
    direction: "asc"
  });
  return E(() => {
    b(r.size === c.length);
  }, [r, c]), {
    checkedRows: r,
    isAllChecked: h,
    sortConfig: p,
    handleCheckboxChange: (i) => {
      f((e) => {
        const l = new Set(e);
        l.has(i.id) ? l.delete(i.id) : l.add(i.id);
        const a = c.filter((x) => l.has(x.id));
        return t == null || t(a), l;
      });
    },
    handleSelectAll: (i) => {
      if (i) {
        const e = new Set(c.map((l) => l.id));
        f(e), t == null || t(c);
      } else
        f(/* @__PURE__ */ new Set()), t == null || t([]);
    },
    handleSort: (i, e) => {
      d({ key: i, direction: e }), n == null || n(i, e);
    },
    isRowChecked: (i) => r.has(i.id)
  };
};
function g({
  rows: c,
  columns: t,
  caption: n,
  className: r,
  onCheckedRowsChange: f,
  onSort: h,
  checkboxSelection: b = !0
}) {
  const {
    isAllChecked: p,
    sortConfig: d,
    handleCheckboxChange: k,
    handleSelectAll: y,
    handleSort: j,
    isRowChecked: u
  } = G(c, f, h), i = [
    ...b ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((e, l) => ({
      ...e,
      key: String(e.field || l),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ s.jsxs(m, { "aria-label": n, className: r, children: [
    /* @__PURE__ */ s.jsx(A, { columns: i, children: (e) => /* @__PURE__ */ s.jsx(T, { children: e.key === "checkbox" ? /* @__PURE__ */ s.jsx(
      S,
      {
        checked: p,
        onValueChange: (l) => y(l)
      }
    ) : /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var a;
            const l = (a = t.find(
              (x) => String(x.field) === e.key
            )) == null ? void 0 : a.field;
            l && j(
              l,
              d.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ s.jsx(
              z,
              {
                size: 16,
                className: `absolute -top-1 ${d.key === e.key && d.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ s.jsx(
              D,
              {
                size: 16,
                className: `absolute top-1 ${d.key === e.key && d.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ s.jsx(v, { items: c, children: (e) => /* @__PURE__ */ s.jsx(I, { children: (l) => /* @__PURE__ */ s.jsx(N, { children: l === "checkbox" ? /* @__PURE__ */ s.jsx(
      S,
      {
        checked: u(e),
        onValueChange: () => {
          k(e);
        }
      }
    ) : (() => {
      const a = t.find(
        (x) => String(x.field) === l
      );
      return a ? a.cell ? a.cell(e) : a.field ? String(e[a.field]) : null : null;
    })() }) }, e.id) })
  ] });
}
export {
  g as DataGrid
};
