/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { useState as S, useEffect as m } from "react";
import { Table as g, TableHeader as A, TableColumn as T, Checkbox as u, TableBody as v, TableRow as $, TableCell as N } from "@nextui-org/react";
import { IconChevronUp as C, IconChevronDown as D } from "@tabler/icons-react";
const I = (d, s, n) => {
  const [c, o] = S([]), [b, f] = S(!1), [x, r] = S({
    key: null,
    direction: "asc"
  });
  return m(() => {
    f(c.length === d.length && d.length > 0);
  }, [c, d]), {
    selectedRows: c,
    isAllChecked: b,
    sortConfig: x,
    handleCheckboxChange: (i) => {
      const e = c.some((t) => t.id === i.id);
      let l;
      e ? l = c.filter((t) => t.id !== i.id) : l = [...c, i], o(l), s == null || s(l);
    },
    handleSelectAll: (i) => {
      const e = i ? [...d] : [];
      o(e), s == null || s(e);
    },
    handleSort: (i, e) => {
      r({ key: i, direction: e }), n == null || n(i, e);
    },
    isRowSelected: (i) => c.some((e) => e.id === i.id)
  };
};
function H({
  rows: d,
  columns: s,
  caption: n,
  className: c,
  onCheckedRowsChange: o,
  onSort: b,
  checkboxSelection: f = !0
}) {
  const {
    isAllChecked: x,
    sortConfig: r,
    handleCheckboxChange: p,
    handleSelectAll: y,
    handleSort: j,
    isRowSelected: k
  } = I(d, o, b), i = [
    ...f ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...s.map((e, l) => ({
      ...e,
      key: String(e.field || l),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ a.jsxs(g, { "aria-label": n, className: c, children: [
    /* @__PURE__ */ a.jsx(A, { columns: i, children: (e) => /* @__PURE__ */ a.jsx(
      T,
      {
        "aria-label": String(e.label || e.key),
        children: e.key === "checkbox" ? /* @__PURE__ */ a.jsx(
          u,
          {
            isSelected: x,
            onValueChange: y,
            "aria-label": "Select all rows"
          }
        ) : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          e.label,
          e.sortable && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "relative w-4 h-4 cursor-pointer",
              onClick: () => {
                var t;
                const l = (t = s.find(
                  (h) => String(h.field) === e.key
                )) == null ? void 0 : t.field;
                l && l !== "actions" && j(
                  l,
                  r.direction === "asc" ? "desc" : "asc"
                );
              },
              role: "button",
              "aria-label": `Sort by ${e.label}`,
              children: [
                /* @__PURE__ */ a.jsx(
                  C,
                  {
                    size: 16,
                    className: `absolute -top-1 ${r.key === e.key && r.direction === "asc" ? "opacity-100" : "opacity-30"}`
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  D,
                  {
                    size: 16,
                    className: `absolute top-1 ${r.key === e.key && r.direction === "desc" ? "opacity-100" : "opacity-30"}`
                  }
                )
              ]
            }
          )
        ] })
      },
      e.key
    ) }),
    /* @__PURE__ */ a.jsx(v, { items: d, children: (e) => /* @__PURE__ */ a.jsx($, { "aria-label": `Row ${e.id}`, children: (l) => /* @__PURE__ */ a.jsx(N, { children: l === "checkbox" ? /* @__PURE__ */ a.jsx(
      u,
      {
        isSelected: k(e),
        onValueChange: () => p(e),
        "aria-label": `Select row ${e.id}`
      }
    ) : (() => {
      const t = s.find(
        (h) => String(h.field) === l
      );
      return t ? t.cell ? t.cell(e) : t.field && t.field in e ? String(e[t.field]) : null : null;
    })() }) }, e.id) })
  ] });
}
export {
  H as DataGrid
};
