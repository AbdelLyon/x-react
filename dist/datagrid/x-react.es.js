/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as h, useEffect as m } from "react";
import { Table as g, TableHeader as A, TableColumn as T, Checkbox as u, TableBody as $, TableRow as N, TableCell as v } from "@nextui-org/react";
import { IconChevronUp as C, IconChevronDown as D } from "@tabler/icons-react";
const I = (c, a, o) => {
  const [n, b] = h([]), [f, x] = h(!1), [S, d] = h({
    key: null,
    direction: "asc"
  });
  return m(() => {
    x(n.length === c.length && c.length > 0);
  }, [n, c]), {
    selectedRows: n,
    isAllChecked: f,
    sortConfig: S,
    handleCheckboxChange: (l) => {
      b((e) => {
        const t = e.some((r) => r.id === l.id) ? e.filter((r) => r.id !== l.id) : [...e, l];
        return a == null || a(t), t;
      });
    },
    handleSelectAll: (l) => {
      const e = l ? [...c] : [];
      b(e), a == null || a(e);
    },
    handleSort: (l, e) => {
      d({ key: l, direction: e }), o == null || o(l, e);
    },
    isRowSelected: (l) => n.some((e) => e.id === l.id)
  };
};
function H({
  rows: c,
  columns: a,
  caption: o,
  className: n,
  onCheckedRowsChange: b,
  onSort: f,
  checkboxSelection: x = !0
}) {
  const {
    isAllChecked: S,
    sortConfig: d,
    handleCheckboxChange: p,
    handleSelectAll: y,
    handleSort: j,
    isRowSelected: k
  } = I(c, b, f), l = [
    ...x ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...a.map((e, s) => ({
      ...e,
      key: String(e.field || s),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ i.jsxs(g, { "aria-label": o, className: n, children: [
    /* @__PURE__ */ i.jsx(A, { columns: l, children: (e) => /* @__PURE__ */ i.jsx(
      T,
      {
        "aria-label": String(e.label || e.key),
        children: e.key === "checkbox" ? /* @__PURE__ */ i.jsx(
          u,
          {
            isSelected: S,
            onValueChange: y,
            "aria-label": "Select all rows"
          }
        ) : /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          e.label,
          e.sortable && /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: "relative w-4 h-4 cursor-pointer",
              onClick: () => {
                var t;
                const s = (t = a.find(
                  (r) => String(r.field) === e.key
                )) == null ? void 0 : t.field;
                s && s !== "actions" && j(
                  s,
                  d.direction === "asc" ? "desc" : "asc"
                );
              },
              role: "button",
              "aria-label": `Sort by ${e.label}`,
              children: [
                /* @__PURE__ */ i.jsx(
                  C,
                  {
                    size: 16,
                    className: `absolute -top-1 ${d.key === e.key && d.direction === "asc" ? "opacity-100" : "opacity-30"}`
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  D,
                  {
                    size: 16,
                    className: `absolute top-1 ${d.key === e.key && d.direction === "desc" ? "opacity-100" : "opacity-30"}`
                  }
                )
              ]
            }
          )
        ] })
      },
      e.key
    ) }),
    /* @__PURE__ */ i.jsx($, { items: c, children: (e) => /* @__PURE__ */ i.jsx(N, { "aria-label": `Row ${e.id}`, children: (s) => /* @__PURE__ */ i.jsx(v, { children: s === "checkbox" ? /* @__PURE__ */ i.jsx(
      u,
      {
        isSelected: k(e),
        onValueChange: () => p(e),
        "aria-label": `Select row ${e.id}`
      }
    ) : (() => {
      const t = a.find(
        (r) => String(r.field) === s
      );
      return t ? t.cell ? t.cell(e) : t.field && t.field in e ? String(e[t.field]) : null : null;
    })() }) }, e.id) })
  ] });
}
export {
  H as DataGrid
};
