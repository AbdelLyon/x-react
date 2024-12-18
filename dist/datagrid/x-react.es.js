/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { useState as p, useEffect as u } from "react";
import { Table as g, TableHeader as A, TableColumn as T, Checkbox as m, TableBody as v, TableRow as N, TableCell as $ } from "@nextui-org/react";
import { IconChevronUp as C, IconChevronDown as D } from "@tabler/icons-react";
const I = (d, a, r) => {
  const [c, o] = p([]), [f, x] = p(!1), [b, n] = p({
    key: null,
    direction: "asc"
  });
  return u(() => {
    x(c.length === d.length && d.length > 0);
  }, [c, d]), {
    selectedRows: c,
    isAllChecked: f,
    sortConfig: b,
    handleCheckboxChange: (i) => {
      const e = c.some((t) => t.id === i.id);
      let l;
      e ? l = c.filter((t) => t.id !== i.id) : l = [...c, i], o(l), a == null || a(l);
    },
    handleSelectAll: (i) => {
      const e = i ? [...d] : [];
      o(e), a == null || a(e);
    },
    handleSort: (i, e) => {
      n({ key: i, direction: e }), r == null || r(i, e);
    },
    isRowSelected: (i) => c.some((e) => e.id === i.id)
  };
};
function H({
  rows: d,
  columns: a,
  caption: r,
  className: c,
  onCheckedRowsChange: o,
  onSort: f,
  checkboxSelection: x = !0
}) {
  const {
    isAllChecked: b,
    sortConfig: n,
    handleCheckboxChange: S,
    handleSelectAll: y,
    handleSort: j,
    isRowSelected: k
  } = I(d, o, f), i = [
    ...x ? [
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
  return /* @__PURE__ */ s.jsxs(g, { "aria-label": r, className: c, children: [
    /* @__PURE__ */ s.jsx(A, { columns: i, children: (e) => /* @__PURE__ */ s.jsx(T, { children: e.key === "checkbox" ? /* @__PURE__ */ s.jsx(
      m,
      {
        isSelected: b,
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
            const l = (t = a.find(
              (h) => String(h.field) === e.key
            )) == null ? void 0 : t.field;
            l && l !== "actions" && j(
              l,
              n.direction === "asc" ? "desc" : "asc"
            );
          },
          children: [
            /* @__PURE__ */ s.jsx(
              C,
              {
                size: 16,
                className: `absolute -top-1 ${n.key === e.key && n.direction === "asc" ? "opacity-100" : "opacity-30"}`
              }
            ),
            /* @__PURE__ */ s.jsx(
              D,
              {
                size: 16,
                className: `absolute top-1 ${n.key === e.key && n.direction === "desc" ? "opacity-100" : "opacity-30"}`
              }
            )
          ]
        }
      )
    ] }) }, e.key) }),
    /* @__PURE__ */ s.jsx(v, { items: d, children: (e) => /* @__PURE__ */ s.jsx(N, { "aria-label": `Row ${e.id}`, children: (l) => /* @__PURE__ */ s.jsx($, { children: l === "checkbox" ? /* @__PURE__ */ s.jsx(
      m,
      {
        isSelected: k(e),
        onValueChange: () => S(e),
        "aria-label": `Select row ${e.id}`
      }
    ) : (() => {
      const t = a.find(
        (h) => String(h.field) === l
      );
      return t ? t.cell ? t.cell(e) : t.field && t.field in e ? String(e[t.field]) : null : null;
    })() }) }, e.id) })
  ] });
}
export {
  H as DataGrid
};
