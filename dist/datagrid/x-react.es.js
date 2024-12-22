/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { useState as j, useEffect as E } from "react";
import { cn as b } from "../utils/x-react.es.js";
import { Table as G, TableHeader as H, TableColumn as R, Checkbox as B, TableBody as V, TableRow as U, TableCell as q } from "@nextui-org/react";
import { IconChevronUp as w, IconChevronDown as F } from "@tabler/icons-react";
const J = (f, n, x) => {
  const [c, S] = j([]), [u, l] = j(!1), [k, e] = j({
    key: null,
    direction: "asc"
  });
  return E(() => {
    l(c.length === f.length && f.length > 0);
  }, [c, f]), {
    selectedRows: c,
    isAllChecked: u,
    sortConfig: k,
    handleCheckboxChange: (d) => {
      const a = c.some((g) => g.id === d.id);
      let o;
      a ? o = c.filter((g) => g.id !== d.id) : o = [...c, d], S(o), n == null || n(o);
    },
    handleSelectAll: (d) => {
      const a = d ? [...f] : [];
      S(a), n == null || n(a);
    },
    handleSort: (d, a) => {
      e({ key: d, direction: a }), x == null || x(d, a);
    },
    isRowSelected: (d) => c.some((a) => a.id === d.id)
  };
}, L = {
  bordered: {
    header: "bg-content2 border border-divider",
    column: "bg-content2 py-4",
    row: "py-4 border-b border-divider last:border-b-0 hover:bg-content2"
  },
  striped: {
    header: "bg-content2 border border-divider",
    column: "bg-content2 py-4",
    row: "py-4 even:bg-content2"
  },
  unstyled: {
    header: "bg-content2 border border-divider",
    column: "bg-content2 py-4",
    row: "py-4 hover:bg-content2"
  }
};
function Z({
  rows: f,
  columns: n,
  caption: x,
  onCheckedRowsChange: c,
  onSort: S,
  checkboxSelection: u = !0,
  classNames: l,
  variant: k = "unstyled",
  props: e
}) {
  var C, A, T, I, z, D, $;
  const {
    isAllChecked: v,
    sortConfig: y,
    handleCheckboxChange: m,
    handleSelectAll: P,
    handleSort: d,
    isRowSelected: a
  } = J(f, c, S), o = L[k], g = [
    ...u ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...n.map((t, h) => ({
      ...t,
      key: String(t.field || h),
      label: t.header
    }))
  ];
  return /* @__PURE__ */ i.jsxs(
    G,
    {
      "aria-label": x,
      classNames: {
        wrapper: b(
          "bg-white bg-background",
          (A = (C = e == null ? void 0 : e.tableProps) == null ? void 0 : C.classNames) == null ? void 0 : A.wrapper
        ),
        base: b("bg-background", (I = (T = e == null ? void 0 : e.tableProps) == null ? void 0 : T.classNames) == null ? void 0 : I.base),
        table: b("bg-background", (D = (z = e == null ? void 0 : e.tableProps) == null ? void 0 : z.classNames) == null ? void 0 : D.table),
        ...($ = e == null ? void 0 : e.tableProps) == null ? void 0 : $.classNames
      },
      ...e == null ? void 0 : e.tableProps,
      radius: "sm",
      children: [
        /* @__PURE__ */ i.jsx(
          H,
          {
            columns: g,
            className: b(o.header),
            ...e == null ? void 0 : e.tableHeaderProps,
            children: (t) => /* @__PURE__ */ i.jsx(
              R,
              {
                "aria-label": String(t.label || t.key),
                className: b(o.column),
                ...e == null ? void 0 : e.tableColumnProps,
                children: t.key === "checkbox" ? /* @__PURE__ */ i.jsx(
                  B,
                  {
                    isSelected: v,
                    onValueChange: P,
                    "aria-label": "Select all rows",
                    className: l == null ? void 0 : l.checkbox
                  }
                ) : /* @__PURE__ */ i.jsxs("div", { className: b("flex items-center gap-2"), children: [
                  t.label,
                  t.sortable && /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: b(
                        "relative size-4 cursor-pointer",
                        l == null ? void 0 : l.sortIcon
                      ),
                      onClick: () => {
                        var r;
                        const h = (r = n.find(
                          (s) => String(s.field) === t.key
                        )) == null ? void 0 : r.field;
                        h && h !== "actions" && d(
                          h,
                          y.direction === "asc" ? "desc" : "asc"
                        );
                      },
                      role: "button",
                      "aria-label": `Sort by ${t.label}`,
                      children: [
                        /* @__PURE__ */ i.jsx(
                          w,
                          {
                            size: 16,
                            className: b(
                              "absolute -top-1",
                              y.key === t.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        ),
                        /* @__PURE__ */ i.jsx(
                          F,
                          {
                            size: 16,
                            className: b(
                              "absolute top-1",
                              y.key === t.key && y.direction === "desc" ? "opacity-100" : "opacity-30"
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              },
              t.key
            )
          }
        ),
        /* @__PURE__ */ i.jsx(V, { items: f, ...e == null ? void 0 : e.tableBodyProps, children: (t) => /* @__PURE__ */ i.jsx(
          U,
          {
            "aria-label": `Row ${t.id}`,
            className: b(o.row),
            ...e == null ? void 0 : e.tableRowProps,
            children: (h) => /* @__PURE__ */ i.jsx(q, { ...e == null ? void 0 : e.tableCellProps, children: h === "checkbox" ? /* @__PURE__ */ i.jsx(
              B,
              {
                isSelected: a(t),
                onValueChange: () => m(t),
                "aria-label": `Select row ${t.id}`,
                className: l == null ? void 0 : l.checkbox
              }
            ) : /* @__PURE__ */ i.jsx("div", { className: l == null ? void 0 : l.cellContent, children: (() => {
              const r = n.find(
                (s) => String(s.field) === h
              );
              return r ? r.cell ? r.cell(t) : r.field && r.field in t ? String(t[r.field]) : null : null;
            })() }) })
          },
          t.id
        ) })
      ]
    }
  );
}
export {
  Z as DataGrid
};
