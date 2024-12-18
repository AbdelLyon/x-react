/* empty css                */
import { j as t } from "../jsx-runtime-Dx-03ztt.js";
import { Table as A, TableHeader as T, TableColumn as $, Checkbox as g, TableBody as u, TableRow as v, TableCell as C } from "@nextui-org/react";
import { IconChevronUp as D, IconChevronDown as G } from "@tabler/icons-react";
import { useState as y, useEffect as I } from "react";
const z = (d, s, o) => {
  const [r, b] = y([]), [f, h] = y(!1), [x, p] = y({
    key: null,
    direction: "asc"
  });
  return I(() => {
    h(r.length === d.length && d.length > 0);
  }, [r, d]), {
    selectedRows: r,
    isAllChecked: f,
    sortConfig: x,
    handleCheckboxChange: (a) => {
      b((l) => {
        const e = l.some((n) => n.id === a.id) ? l.filter((n) => n.id !== a.id) : [...l, a];
        return s == null || s(e), e;
      });
    },
    handleSelectAll: (a) => {
      const l = a ? [...d] : [];
      b(l), s == null || s(l);
    },
    handleSort: (a, l) => {
      p({ key: a, direction: l }), o == null || o(a, l);
    },
    isRowSelected: (a) => r.some((l) => l.id === a.id)
  };
};
function R({
  rows: d,
  columns: s,
  caption: o,
  className: r,
  "aria-label": b,
  "aria-labelledby": f,
  onCheckedRowsChange: h,
  onSort: x,
  checkboxSelection: p = !0
}) {
  const {
    isAllChecked: j,
    sortConfig: c,
    handleCheckboxChange: k,
    handleSelectAll: m,
    handleSort: a,
    isRowSelected: l
  } = z(d, h, x), S = [
    ...p ? [
      {
        key: "checkbox",
        label: "",
        sortable: !1
      }
    ] : [],
    ...s.map((e) => ({
      ...e,
      key: String(e.field || `column-${e.header}`),
      label: e.header
    }))
  ];
  return /* @__PURE__ */ t.jsxs(
    A,
    {
      "aria-label": b || o || "Data Grid",
      "aria-labelledby": f,
      classNames: {
        base: r,
        table: "min-h-[200px]"
      },
      selectionMode: "multiple",
      selectionBehavior: "toggle",
      children: [
        /* @__PURE__ */ t.jsx(T, { children: S.map((e) => /* @__PURE__ */ t.jsx(
          $,
          {
            allowsSorting: e.sortable,
            "aria-label": String(e.label || e.key),
            className: e.className,
            children: e.key === "checkbox" ? /* @__PURE__ */ t.jsx(
              g,
              {
                isSelected: j,
                onValueChange: m,
                "aria-label": "Select all rows"
              }
            ) : /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
              e.label,
              e.sortable && /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: "relative w-4 h-4 cursor-pointer",
                  onClick: () => {
                    e.field && e.field !== "actions" && a(
                      e.field,
                      c.direction === "asc" ? "desc" : "asc"
                    );
                  },
                  role: "button",
                  "aria-label": `Sort by ${e.label}`,
                  children: [
                    /* @__PURE__ */ t.jsx(
                      D,
                      {
                        size: 16,
                        className: `absolute -top-1 ${c.key === e.field && c.direction === "asc" ? "opacity-100" : "opacity-30"}`
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      G,
                      {
                        size: 16,
                        className: `absolute top-1 ${c.key === e.field && c.direction === "desc" ? "opacity-100" : "opacity-30"}`
                      }
                    )
                  ]
                }
              )
            ] })
          },
          e.key
        )) }),
        /* @__PURE__ */ t.jsx(u, { items: d, emptyContent: "No rows to display", children: (e) => /* @__PURE__ */ t.jsx(v, { "aria-label": `Row ${e.id}`, children: (n) => {
          const i = S.find((N) => N.key === n);
          return /* @__PURE__ */ t.jsx(C, { children: n === "checkbox" ? /* @__PURE__ */ t.jsx(
            g,
            {
              isSelected: l(e),
              onValueChange: () => k(e),
              "aria-label": `Select row ${e.id}`
            }
          ) : i != null && i.cell ? i.cell(e) : i != null && i.field && i.field !== "actions" ? String(e[i.field]) : null });
        } }, e.id) })
      ]
    }
  );
}
export {
  R as DataGrid
};
