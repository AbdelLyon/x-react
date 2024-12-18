/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { Table as m, TableHeader as A, TableColumn as T, Checkbox as S, TableBody as v, TableRow as N, TableCell as z } from "@nextui-org/react";
import { IconChevronUp as D, IconChevronDown as I } from "@tabler/icons-react";
import { useState as p, useEffect as E } from "react";
const G = (c, i, n) => {
  const [r, f] = p(
    /* @__PURE__ */ new Set()
  ), [b, x] = p(!1), [o, d] = p({
    key: null,
    direction: "asc"
  });
  return E(() => {
    const t = c.length > 0 && r.size === c.length;
    x(t);
  }, [r, c]), {
    checkedRows: r,
    isAllChecked: b,
    sortConfig: o,
    handleCheckboxChange: (t) => {
      f((e) => {
        const l = new Set(e);
        l.has(t.id) ? l.delete(t.id) : l.add(t.id);
        const a = c.filter((h) => l.has(h.id));
        return i == null || i(a), l;
      });
    },
    handleSelectAll: (t) => {
      if (t) {
        const e = new Set(c.map((l) => l.id));
        f(e), i == null || i(c);
      } else
        f(/* @__PURE__ */ new Set()), i == null || i([]);
      x(t);
    },
    handleSort: (t, e) => {
      d({ key: t, direction: e }), n == null || n(t, e);
    },
    isRowChecked: (t) => r.has(t.id)
  };
};
function U({
  rows: c,
  columns: i,
  caption: n,
  className: r,
  onCheckedRowsChange: f,
  onSort: b,
  checkboxSelection: x = !0
}) {
  const {
    isAllChecked: o,
    sortConfig: d,
    handleCheckboxChange: k,
    handleSelectAll: y,
    handleSort: j,
    isRowChecked: u
  } = G(c, f, b), t = [
    ...x ? [
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
  return /* @__PURE__ */ s.jsxs(m, { "aria-label": n, className: r, children: [
    /* @__PURE__ */ s.jsx(A, { columns: t, children: (e) => /* @__PURE__ */ s.jsx(T, { children: e.key === "checkbox" ? /* @__PURE__ */ s.jsx(
      S,
      {
        checked: o,
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
            const l = (a = i.find(
              (h) => String(h.field) === e.key
            )) == null ? void 0 : a.field;
            l && l !== "actions" && j(
              l,
              d.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ s.jsx(
              D,
              {
                size: 16,
                className: `absolute -top-1 ${d.key === e.key && d.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ s.jsx(
              I,
              {
                size: 16,
                className: `absolute top-1 ${d.key === e.key && d.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ s.jsx(v, { items: c, children: (e) => /* @__PURE__ */ s.jsx(N, { children: (l) => /* @__PURE__ */ s.jsx(z, { children: l === "checkbox" ? /* @__PURE__ */ s.jsx(
      S,
      {
        checked: u(e),
        onValueChange: () => {
          k(e);
        }
      }
    ) : (() => {
      const a = i.find(
        (h) => String(h.field) === l
      );
      return a ? a.cell ? a.cell(e) : a.field && a.field in e ? String(e[a.field]) : null : null;
    })() }) }, e.id) })
  ] });
}
export {
  U as DataGrid
};
