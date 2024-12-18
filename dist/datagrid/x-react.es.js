/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { useState as p, useEffect as u } from "react";
import { Table as g, TableHeader as A, TableColumn as T, Checkbox as m, TableBody as v, TableRow as N, TableCell as C } from "@nextui-org/react";
import { IconChevronUp as D, IconChevronDown as I } from "@tabler/icons-react";
const z = (d, c, r) => {
  const [a, o] = p([]), [f, h] = p(!1), [x, n] = p({
    key: null,
    direction: "asc"
  });
  return u(() => {
    h(a.length === d.length && d.length > 0);
  }, [a, d]), {
    selectedRows: a,
    isAllChecked: f,
    sortConfig: x,
    handleCheckboxChange: (i) => {
      const e = a.some((t) => t.id === i.id);
      let l;
      e ? l = a.filter((t) => t.id !== i.id) : l = [...a, i], o(l), c == null || c(l);
    },
    handleSelectAll: (i) => {
      const e = i ? [...d] : [];
      o(e), c == null || c(e);
    },
    handleSort: (i, e) => {
      n({ key: i, direction: e }), r == null || r(i, e);
    },
    isRowSelected: (i) => a.some((e) => e.id === i.id)
  };
};
function H({
  rows: d,
  columns: c,
  caption: r,
  className: a,
  onCheckedRowsChange: o,
  onSort: f,
  checkboxSelection: h = !0
}) {
  const {
    isAllChecked: x,
    sortConfig: n,
    handleCheckboxChange: S,
    handleSelectAll: y,
    handleSort: j,
    isRowSelected: k
  } = z(d, o, f), i = [
    ...h ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...c.map((e, l) => ({
      ...e,
      key: String(e.field || l),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ s.jsxs(g, { "aria-label": r, className: a, children: [
    /* @__PURE__ */ s.jsx(A, { columns: i, children: (e) => /* @__PURE__ */ s.jsx(T, { children: e.key === "checkbox" ? /* @__PURE__ */ s.jsx(
      m,
      {
        isSelected: x,
        onValueChange: y
      }
    ) : /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
      e.label,
      e.sortable && /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "relative w-4 h-4 cursor-pointer",
          onClick: () => {
            var t;
            const l = (t = c.find(
              (b) => String(b.field) === e.key
            )) == null ? void 0 : t.field;
            l && l !== "actions" && j(
              l,
              n.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ s.jsx(
              D,
              {
                size: 16,
                className: `absolute -top-1 ${n.key === e.key && n.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ s.jsx(
              I,
              {
                size: 16,
                className: `absolute top-1 ${n.key === e.key && n.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ s.jsx(v, { items: d, children: (e) => /* @__PURE__ */ s.jsx(N, { children: (l) => /* @__PURE__ */ s.jsx(C, { children: l === "checkbox" ? /* @__PURE__ */ s.jsx(
      m,
      {
        checked: k(e),
        onValueChange: () => S(e)
      }
    ) : (() => {
      const t = c.find(
        (b) => String(b.field) === l
      );
      return t ? t.cell ? t.cell(e) : t.field && t.field in e ? String(e[t.field]) : null : null;
    })() }) }, e.id) })
  ] });
}
export {
  H as DataGrid
};
